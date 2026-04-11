import type { Context } from "@netlify/functions";

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';

// Custom field IDs from GHL location settings
const CUSTOM_FIELD_IDS = {
  facilityType: 'fVouV566y2CSCh8GmHzp',
  frequency: 'npSugoNIifW9NuoWENST',
  referralSource: '35dEadwR8DjeqFd7wiKH',
  message: 'V3Is6asWPYYuj2lWnjIG',
};

const ALLOWED_ORIGINS = [
  'https://rangeljanitorial.com',
  'https://www.rangeljanitorial.com',
  'http://localhost:3000',
];

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 500).replace(/<[^>]*>/g, '').replace(/[<>"'`]/g, '');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default async (req: Request, _context: Context) => {
  const origin = req.headers.get('origin') || '';

  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    });
  }

  // Origin check
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ success: false, message: 'Forbidden' }), {
      status: 403, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();

    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const phone = sanitize(body.phone);
    const email = sanitize(body.email);
    const facilityType = sanitize(body.facilityType);
    const frequency = sanitize(body.frequency);
    const referralSource = sanitize(body.referralSource);
    const message = sanitize(body.message);
    const location = sanitize(body.location);

    if (!firstName || !lastName || !phone || !email) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), {
        status: 400, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid email address' }), {
        status: 400, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    if (!isValidPhone(phone)) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid phone number' }), {
        status: 400, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Netlify.env.get('GHL_API_KEY');
    const locationId = Netlify.env.get('GHL_LOCATION_ID');

    if (!apiKey || !locationId) {
      console.error('GHL_API_KEY or GHL_LOCATION_ID not configured in Netlify env vars');
      return new Response(JSON.stringify({ success: false, message: 'Service temporarily unavailable' }), {
        status: 503, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    const locationTag = location
      ? `location-${location.toLowerCase().replace(/\s+/g, '-')}`
      : 'location-unknown';

    const customFields = [
      facilityType ? { id: CUSTOM_FIELD_IDS.facilityType, field_value: facilityType } : null,
      frequency ? { id: CUSTOM_FIELD_IDS.frequency, field_value: frequency } : null,
      referralSource ? { id: CUSTOM_FIELD_IDS.referralSource, field_value: referralSource } : null,
      message ? { id: CUSTOM_FIELD_IDS.message, field_value: message } : null,
    ].filter(Boolean);

    const ghlPayload: Record<string, unknown> = {
      locationId,
      firstName,
      lastName,
      phone,
      email,
      source: `Website - ${location || 'Unknown'}`,
      tags: [
        'website-lead',
        locationTag,
        facilityType ? `facility-${facilityType.toLowerCase().replace(/[\s\/]+/g, '-')}` : '',
        frequency ? `freq-${frequency.toLowerCase().replace(/[\s\/()]+/g, '-')}` : '',
        referralSource ? `ref-${referralSource.toLowerCase().replace(/\s+/g, '-')}` : '',
      ].filter(Boolean),
      companyName: facilityType || undefined,
      customFields: customFields.length > 0 ? customFields : undefined,
    };

    // Remove undefined values
    Object.keys(ghlPayload).forEach(k => {
      if (ghlPayload[k] === undefined) delete ghlPayload[k];
    });

    const ghlResponse = await fetch(GHL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      const errText = await ghlResponse.text();
      console.error('GHL API error:', ghlResponse.status, errText);
    }

    return new Response(JSON.stringify({ success: true, message: 'Quote request submitted' }), {
      status: 200, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Something went wrong. Please call us directly.' }), {
      status: 500, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    });
  }
};
