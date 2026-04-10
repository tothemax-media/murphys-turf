import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Security: Rate limiting (in-memory, per-IP, resets on deploy)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // max 10 submissions per IP per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ---------------------------------------------------------------------------
// Security: Input sanitization
// ---------------------------------------------------------------------------
function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .slice(0, 500) // cap length
    .replace(/<[^>]*>/g, '') // strip HTML tags
    .replace(/[<>"'`]/g, ''); // strip dangerous chars
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

// ---------------------------------------------------------------------------
// Allowed form IDs (whitelist)
// ---------------------------------------------------------------------------
const ALLOWED_FORM_IDS = new Set([
  '6L08kToCUbkqyOiTqitu',  // Sacramento
  'fUggM7F49myI8reYUz05',  // Murrieta
  'FOFJpViBh8idExeBbAk8',  // Walnut Creek
]);

// ---------------------------------------------------------------------------
// GHL Contact Creation
// ---------------------------------------------------------------------------
const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Origin check — only allow from our domain or localhost
    const origin = request.headers.get('origin') || '';
    const allowedOrigins = [
      'https://rangeljanitorial.com',
      'https://www.rangeljanitorial.com',
      'http://localhost:3000',
      'http://localhost:3001',
    ];
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { success: false, message: 'Forbidden' },
        { status: 403 }
      );
    }

    // Parse and validate
    const body = await request.json();

    const formId = sanitize(body.formId);
    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const phone = sanitize(body.phone);
    const email = sanitize(body.email);
    const facilityType = sanitize(body.facilityType);
    const frequency = sanitize(body.frequency);
    const referralSource = sanitize(body.referralSource);
    const message = sanitize(body.message);
    const location = sanitize(body.location);

    // Required fields
    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate formats
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Whitelist form IDs
    if (formId && !ALLOWED_FORM_IDS.has(formId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid form' },
        { status: 400 }
      );
    }

    // API key + location ID check
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!apiKey || !locationId) {
      console.error('GHL_API_KEY or GHL_LOCATION_ID not configured');
      return NextResponse.json(
        { success: false, message: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Build GHL contact payload with location-based tags for workflow routing
    const locationTag = location
      ? `location-${location.toLowerCase().replace(/\s+/g, '-')}`
      : 'location-unknown';

    // GHL v2 Contacts API with custom fields for email template
    // Custom field IDs from GHL location settings
    const customFields = [
      facilityType ? { id: 'fVouV566y2CSCh8GmHzp', field_value: facilityType } : null,        // Type Of Facility?
      frequency ? { id: 'npSugoNIifW9NuoWENST', field_value: frequency } : null,              // Frequency:
      referralSource ? { id: '35dEadwR8DjeqFd7wiKH', field_value: referralSource } : null,     // How Did You Hear About Us?
      message ? { id: 'V3Is6asWPYYuj2lWnjIG', field_value: message } : null,                   // Questions / Comments?
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

    // Send to GHL v2 Contacts API
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
      // Still return success to user — we don't expose backend errors
      // Log for debugging but don't block the UX
    }

    return NextResponse.json({ success: true, message: 'Quote request submitted' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please call us directly.' },
      { status: 500 }
    );
  }
}
