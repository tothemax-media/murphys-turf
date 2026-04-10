import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Expert janitorial and commercial cleaning tips, facility maintenance guides, and industry insights for California businesses. Learn from Rangel Janitorial professionals how to keep your facility clean, healthy, and professional.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog | Rangel Janitorial",
    description:
      'Expert janitorial and commercial cleaning tips, facility maintenance guides, and industry insights for California businesses.',
    url: '/blog',
  },
};

/* --------------------------- DATA --------------------------- */

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  gradient: string;
}

const blogPosts: BlogPost[] = [
  // ── Original 12 posts ────────────────────────────────────────────────
  {
    slug: 'office-cleaning-best-practices',
    title: 'Office Cleaning Best Practices for a Healthier Workplace',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2026-03-15',
    excerpt:
      'Essential office cleaning practices that promote employee health, productivity, and professional impressions. Learn what top janitorial companies focus on and how to maintain a spotless work environment.',
    gradient: 'from-emerald-600 via-green-500 to-teal-400',
  },
  {
    slug: 'janitorial-services-sacramento',
    title: 'Janitorial Services in Sacramento: What to Look For',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2026-03-08',
    excerpt:
      'A guide for Sacramento businesses seeking reliable janitorial services. What to expect, key questions to ask, and how to evaluate commercial cleaning companies in the Sacramento area.',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
  },
  {
    slug: 'commercial-cleaning-murrieta',
    title: 'Commercial Cleaning in Murrieta & the Inland Empire',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2026-02-25',
    excerpt:
      'Why Inland Empire businesses trust Rangel Janitorial for their commercial cleaning needs. Services, reliability, and what sets us apart in Murrieta, Temecula, and surrounding areas.',
    gradient: 'from-sky-500 via-blue-400 to-cyan-400',
  },
  {
    slug: 'day-porter-benefits',
    title: 'The Benefits of Day Porter Services for Your Facility',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2026-02-18',
    excerpt:
      'How day porter services keep your facility looking its best throughout the business day. Real-time cleaning, restroom maintenance, and common area upkeep that makes a real difference.',
    gradient: 'from-rose-500 via-pink-400 to-fuchsia-400',
  },
  {
    slug: 'electrostatic-disinfection-explained',
    title: 'Electrostatic Disinfection Explained: How It Works',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2026-02-10',
    excerpt:
      'Understanding electrostatic disinfection technology — how it works, why it provides superior coverage, and when your facility needs this advanced cleaning method.',
    gradient: 'from-teal-500 via-emerald-400 to-green-400',
  },
  {
    slug: 'floor-care-vct-strip-wax',
    title: 'Floor Care 101: VCT Strip and Wax Guide',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2026-02-01',
    excerpt:
      'Everything you need to know about VCT floor care — strip and wax schedules, maintenance tips, and why professional floor care extends the life of your commercial flooring.',
    gradient: 'from-lime-500 via-green-400 to-emerald-400',
  },
  {
    slug: 'medical-facility-cleaning-standards',
    title: 'Medical Facility Cleaning Standards You Should Know',
    category: 'Industry Insights',
    author: "Rangel Janitorial Team",
    date: '2026-01-22',
    excerpt:
      'Cleaning standards and best practices for medical and dental facilities. Infection control, compliance requirements, and what to expect from your janitorial provider.',
    gradient: 'from-violet-500 via-purple-400 to-indigo-400',
  },
  {
    slug: 'fitness-center-cleaning-guide',
    title: 'Fitness Center Cleaning: A Complete Guide',
    category: 'Industry Insights',
    author: "Rangel Janitorial Team",
    date: '2026-01-14',
    excerpt:
      'How to maintain a clean, hygienic fitness center. Equipment sanitization, locker room care, and the cleaning schedule your gym needs to keep members happy and healthy.',
    gradient: 'from-green-500 via-lime-400 to-yellow-400',
  },
  {
    slug: 'choosing-commercial-cleaning-company',
    title: 'How to Choose the Right Commercial Cleaning Company',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2026-01-06',
    excerpt:
      'Key factors to consider when selecting a commercial cleaning company. Insurance, references, scope of services, and red flags to watch for when evaluating providers.',
    gradient: 'from-forest via-sage to-sage-light',
  },
  {
    slug: 'office-cleaning-best-practices-guide',
    title: 'Office Cleaning Best Practices: A Complete Guide for Facility Managers',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2025-12-28',
    excerpt:
      'Professional office cleaning keeps workspaces healthy, productive, and impressive. Learn best practices for workstation sanitization, conference rooms, and common areas.',
    gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
  },
  {
    slug: 'green-cleaning-commercial-facilities',
    title: 'Green Cleaning for Commercial Facilities',
    category: 'Industry Insights',
    author: "Rangel Janitorial Team",
    date: '2025-12-18',
    excerpt:
      'How environmentally responsible cleaning practices benefit your facility, employees, and the planet. Green products, sustainable methods, and certifications to look for.',
    gradient: 'from-red-500 via-orange-400 to-amber-400',
  },
  {
    slug: 'janitorial-services-walnut-creek',
    title: 'Janitorial Services in Walnut Creek & the East Bay',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-12-08',
    excerpt:
      'Professional janitorial services for Walnut Creek, Concord, Pleasant Hill, and the greater East Bay. What Bay Area businesses should expect from their cleaning provider.',
    gradient: 'from-orange-500 via-amber-400 to-yellow-400',
  },
  // ── Sacramento location posts (12) ───────────────────────────────────
  {
    slug: 'sacramento-class-a-office-cleaning-checklist',
    title: 'Sacramento Class A Office Cleaning Checklist for Property Managers',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-11-30',
    excerpt:
      'A complete cleaning checklist for Class A office buildings in Sacramento. Covers lobby, restrooms, elevators, common areas, parking decks, and tenant retention standards.',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
  },
  {
    slug: 'sacramento-medical-office-cleaning-compliance',
    title: 'Sacramento Medical Office Cleaning: HIPAA, OSHA, and Bloodborne Pathogen Compliance',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-11-22',
    excerpt:
      'How Sacramento medical offices, urgent care, and dental clinics meet HIPAA, OSHA, and bloodborne pathogen cleaning standards. A practical guide for practice managers.',
    gradient: 'from-violet-500 via-purple-400 to-indigo-400',
  },
  {
    slug: 'sacramento-after-hours-janitorial-service',
    title: 'After-Hours Janitorial Service in Sacramento: What to Expect and How to Plan',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-11-14',
    excerpt:
      'Everything Sacramento facility managers need to know about after-hours janitorial service: scheduling, security, building access, supervision, and pricing.',
    gradient: 'from-sky-500 via-blue-400 to-cyan-400',
  },
  {
    slug: 'sacramento-multi-tenant-property-manager-guide',
    title: 'Sacramento Multi-Tenant Property Management: A Guide to Janitorial Vendor Contracts',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-11-06',
    excerpt:
      'How Sacramento property managers structure janitorial vendor contracts for multi-tenant buildings. Scope, billing, common-area allocation, tenant chargebacks, and SLAs.',
    gradient: 'from-teal-500 via-emerald-400 to-green-400',
  },
  {
    slug: 'sacramento-industrial-warehouse-cleaning',
    title: 'Sacramento Industrial and Warehouse Cleaning: Light Manufacturing, Distribution, and Logistics',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-10-29',
    excerpt:
      'How Sacramento industrial parks, warehouses, and light manufacturing facilities maintain safety, OSHA compliance, and product quality with the right cleaning program.',
    gradient: 'from-emerald-600 via-green-500 to-teal-400',
  },
  {
    slug: 'sacramento-tech-office-coworking-cleaning',
    title: 'Sacramento Tech Office and Coworking Cleaning: Open-Plan, Hot Desks, and Shared Spaces',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-10-21',
    excerpt:
      'How Sacramento tech companies and coworking spaces keep open-plan offices, hot desks, and shared kitchens clean. A guide to high-touch cleaning in modern workspaces.',
    gradient: 'from-lime-500 via-green-400 to-emerald-400',
  },
  {
    slug: 'sacramento-school-daycare-cleaning',
    title: 'Sacramento School and Daycare Cleaning: Health, Compliance, and Parent Confidence',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-10-13',
    excerpt:
      'How Sacramento schools, preschools, and daycare centers run cleaning programs that meet California licensing requirements and reassure parents.',
    gradient: 'from-rose-500 via-pink-400 to-fuchsia-400',
  },
  {
    slug: 'sacramento-green-cleaning-leed-sustainability',
    title: 'Green Cleaning in Sacramento: LEED, Title 24, and Corporate Sustainability Goals',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-10-05',
    excerpt:
      'How Sacramento businesses, agencies, and property managers meet LEED, Title 24, and corporate sustainability goals through certified green commercial cleaning.',
    gradient: 'from-green-500 via-lime-400 to-yellow-400',
  },
  {
    slug: 'sacramento-floor-care-climate',
    title: 'Sacramento Floor Care: How Central Valley Climate Shapes Your Cleaning Schedule',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-09-27',
    excerpt:
      'Sacramento\'s Central Valley climate creates unique challenges for commercial floor care. A guide to seasonal floor care for VCT, stone, and hard surfaces in Sacramento offices.',
    gradient: 'from-forest via-sage to-sage-light',
  },
  {
    slug: 'sacramento-best-time-hire-janitorial',
    title: 'When to Hire a Janitorial Service in Sacramento: Timing, Budget Cycles, and Transitions',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-09-19',
    excerpt:
      'When Sacramento businesses should hire or switch janitorial services. Tips on timing, budget cycles, lease transitions, and how to plan a smooth changeover.',
    gradient: 'from-red-500 via-orange-400 to-amber-400',
  },
  {
    slug: 'sacramento-fitness-center-gym-cleaning',
    title: 'Sacramento Gym and Fitness Center Cleaning: Member Health, Equipment Care, and Reviews',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-09-11',
    excerpt:
      'How Sacramento gyms, boutique fitness studios, and rec centers run cleaning programs that protect members, equipment, and online reviews.',
    gradient: 'from-orange-500 via-amber-400 to-yellow-400',
  },
  {
    slug: 'sacramento-restaurant-restroom-day-porter',
    title: 'Sacramento Restaurant and Hospitality Day Porter Services: Restrooms, Lobbies, and Reviews',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-09-03',
    excerpt:
      'How Sacramento restaurants, hotels, and hospitality venues use day porter cleaning services to maintain restrooms, lobbies, and 5-star online reviews.',
    gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
  },
  // ── Murrieta / Inland Empire location posts (12) ─────────────────────
  {
    slug: 'murrieta-temecula-wine-country-cleaning',
    title: 'Murrieta and Temecula Wine Country Office Cleaning Standards',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-08-26',
    excerpt:
      'How Murrieta and Temecula offices, tasting rooms, and hospitality venues run cleaning programs that match the wine country aesthetic and visitor expectations.',
    gradient: 'from-sky-500 via-blue-400 to-cyan-400',
  },
  {
    slug: 'inland-empire-warehouse-distribution-cleaning',
    title: 'Inland Empire Warehouse and Distribution Center Cleaning',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-08-18',
    excerpt:
      'How Inland Empire warehouses, distribution centers, and logistics facilities run cleaning programs that meet OSHA, customer audits, and food safety standards.',
    gradient: 'from-teal-500 via-emerald-400 to-green-400',
  },
  {
    slug: 'murrieta-medical-dental-urgent-care-cleaning',
    title: 'Murrieta Medical, Dental, and Urgent Care Cleaning Standards',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-08-10',
    excerpt:
      'How Murrieta and Inland Empire medical offices, dental practices, and urgent care centers meet OSHA, HIPAA, and infection control standards through professional cleaning.',
    gradient: 'from-violet-500 via-purple-400 to-indigo-400',
  },
  {
    slug: 'murrieta-hot-climate-floor-care',
    title: 'Hot Climate Floor Care: Surviving Inland Empire Summers',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-08-02',
    excerpt:
      'How Murrieta and Inland Empire commercial floors survive 100+ degree summers, dust, and heavy AC use. A guide to extending commercial floor life in hot climates.',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
  },
  {
    slug: 'murrieta-school-district-vendor-selection',
    title: 'Murrieta School District Cleaning Vendor Selection: A Guide for Facilities Directors',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-07-25',
    excerpt:
      'How Murrieta and Inland Empire school districts select cleaning vendors. RFPs, SLAs, prevailing wage, child safety, and what facilities directors need to know.',
    gradient: 'from-rose-500 via-pink-400 to-fuchsia-400',
  },
  {
    slug: 'murrieta-hospitality-tasting-room-cleaning',
    title: 'Temecula Hospitality and Tasting Room Cleaning Best Practices',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-07-17',
    excerpt:
      'How Temecula and Murrieta hospitality venues, tasting rooms, and event spaces run cleaning programs that protect 5-star reviews and brand reputation.',
    gradient: 'from-lime-500 via-green-400 to-emerald-400',
  },
  {
    slug: 'murrieta-hoa-multifamily-cleaning',
    title: 'Murrieta HOA and Multi-Family Janitorial Service Guide',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-07-09',
    excerpt:
      'How Murrieta HOAs, apartment communities, and multi-family complexes manage common-area cleaning, pool decks, fitness centers, and resident satisfaction.',
    gradient: 'from-green-500 via-lime-400 to-yellow-400',
  },
  {
    slug: 'murrieta-auto-dealership-showroom-cleaning',
    title: 'Inland Empire Auto Dealership Cleaning: Showrooms, Service Bays, and Customer Experience',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-07-01',
    excerpt:
      'How Murrieta and Inland Empire auto dealerships maintain showrooms, service bays, and customer lounges with the right commercial cleaning program.',
    gradient: 'from-forest via-sage to-sage-light',
  },
  {
    slug: 'murrieta-class-a-day-porter',
    title: 'Day Porter Services for Murrieta Class A Office Buildings',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-06-23',
    excerpt:
      'How Murrieta Class A office buildings use day porter services to maintain lobbies, restrooms, and tenant satisfaction during business hours.',
    gradient: 'from-emerald-600 via-green-500 to-teal-400',
  },
  {
    slug: 'murrieta-post-construction-cleaning',
    title: 'Post-Construction Cleaning in the Inland Empire Building Boom',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-06-15',
    excerpt:
      'How Murrieta and Inland Empire general contractors use post-construction cleaning services to deliver finished buildings ready for tenants and inspections.',
    gradient: 'from-red-500 via-orange-400 to-amber-400',
  },
  {
    slug: 'murrieta-electrostatic-disinfection-flu-season',
    title: 'Murrieta Electrostatic Disinfection: Flu Season, Outbreaks, and Workplace Wellness',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-06-07',
    excerpt:
      'How Murrieta and Inland Empire offices, schools, and gyms use electrostatic disinfection to reduce illness, control flu season outbreaks, and protect productivity.',
    gradient: 'from-sky-500 via-blue-400 to-cyan-400',
  },
  {
    slug: 'murrieta-green-cleaning-sustainability',
    title: 'Murrieta Green Cleaning: Sustainability for Inland Empire Offices and Schools',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-05-30',
    excerpt:
      'How Murrieta and Inland Empire businesses adopt green cleaning programs that reduce chemical exposure, improve air quality, and support sustainability goals.',
    gradient: 'from-orange-500 via-amber-400 to-yellow-400',
  },
  // ── Walnut Creek / East Bay location posts (10) ──────────────────────
  {
    slug: 'walnut-creek-class-a-office-tower-cleaning',
    title: 'Walnut Creek Class A Office Tower Cleaning Standards',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-05-22',
    excerpt:
      'How Walnut Creek Class A office towers maintain lobbies, restrooms, and tenant satisfaction in a competitive East Bay leasing market.',
    gradient: 'from-teal-500 via-emerald-400 to-green-400',
  },
  {
    slug: 'walnut-creek-biotech-lab-cleaning',
    title: 'East Bay Biotech and Lab Cleaning: Sterile Environment Requirements',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-05-14',
    excerpt:
      'How East Bay biotech, research labs, and pharmaceutical facilities meet sterile environment cleaning requirements with the right commercial cleaning program.',
    gradient: 'from-violet-500 via-purple-400 to-indigo-400',
  },
  {
    slug: 'walnut-creek-bart-office-cleaning',
    title: 'Walnut Creek BART-Adjacent Office Cleaning: High-Traffic Strategies',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-05-06',
    excerpt:
      'How Walnut Creek offices near BART stations manage the heavy foot traffic, commuter patterns, and weather challenges with the right cleaning program.',
    gradient: 'from-rose-500 via-pink-400 to-fuchsia-400',
  },
  {
    slug: 'walnut-creek-lamorinda-boutique-office',
    title: 'Lamorinda Boutique Office Cleaning: Lafayette, Orinda, and Moraga',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-04-28',
    excerpt:
      'How boutique offices in Lafayette, Orinda, and Moraga run cleaning programs that match the premium Lamorinda aesthetic and client expectations.',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
  },
  {
    slug: 'walnut-creek-tri-valley-tech-campus',
    title: 'Tri-Valley Tech Campus Cleaning: Pleasanton, Dublin, and San Ramon',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-04-20',
    excerpt:
      'How Pleasanton, Dublin, and San Ramon tech campuses run cleaning programs for open-plan offices, break rooms, game rooms, and amenity-rich workspaces.',
    gradient: 'from-lime-500 via-green-400 to-emerald-400',
  },
  {
    slug: 'walnut-creek-medical-plaza-compliance',
    title: 'Walnut Creek Medical Plaza Cleaning Compliance Guide',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-04-12',
    excerpt:
      'How Walnut Creek and East Bay medical plazas run cleaning programs that meet OSHA, HIPAA, and infection control standards while protecting patient experience.',
    gradient: 'from-emerald-600 via-green-500 to-teal-400',
  },
  {
    slug: 'walnut-creek-east-bay-green-cleaning',
    title: 'East Bay Green Cleaning: Bay Area Environmental Standards',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-04-04',
    excerpt:
      'How Walnut Creek and East Bay businesses meet Bay Area environmental standards through certified green commercial cleaning programs.',
    gradient: 'from-green-500 via-lime-400 to-yellow-400',
  },
  {
    slug: 'walnut-creek-concord-pleasant-hill-industrial',
    title: 'Concord and Pleasant Hill Industrial Facility Cleaning',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-03-27',
    excerpt:
      'How Concord, Pleasant Hill, and Martinez industrial facilities run cleaning programs that meet OSHA standards and customer requirements.',
    gradient: 'from-sky-500 via-blue-400 to-cyan-400',
  },
  {
    slug: 'walnut-creek-financial-district-after-hours',
    title: 'After-Hours Janitorial Service for Walnut Creek Financial District',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-03-19',
    excerpt:
      'How Walnut Creek financial district offices manage after-hours cleaning for security-sensitive workspaces, law firms, and wealth management offices.',
    gradient: 'from-forest via-sage to-sage-light',
  },
  {
    slug: 'walnut-creek-property-management-rfp-guide',
    title: 'Walnut Creek Property Management Cleaning Vendor RFP Guide',
    category: 'Local Guides',
    author: "Rangel Janitorial Team",
    date: '2025-03-11',
    excerpt:
      'How Walnut Creek property managers structure janitorial RFPs, evaluate proposals, and select vendors for Class A and Class B multi-tenant buildings.',
    gradient: 'from-red-500 via-orange-400 to-amber-400',
  },
];

const categories = ['All', 'Janitorial Tips', 'Industry Insights', 'Local Guides'] as const;

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Janitorial Tips': { bg: 'bg-sage/15', text: 'text-sage-dark' },
  'Industry Insights': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'Local Guides': { bg: 'bg-blue-100', text: 'text-blue-700' },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/* ----------------------- CATEGORY COUNTS ----------------------- */

const categoryCounts: Record<string, number> = {};
blogPosts.forEach((post) => {
  categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
});

/* ═══════════════════════ MAIN PAGE ═══════════════════════ */

export default function BlogPage() {
  return (
    <>
      {/* ----------------- HERO ----------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/95 via-forest/90 to-sage/80" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-[length:40px_40px]" />

        <AnimateOnScroll direction="up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="inline-block bg-sage/20 border border-sage/40 text-sage-light font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            Insights &amp; Expertise
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Rangel Janitorial Blog
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-200 font-body leading-relaxed max-w-3xl mx-auto">
            Commercial Cleaning Tips, Facility Maintenance Guides &amp; Industry Insights for California Businesses
          </p>
        </AnimateOnScroll>
      </section>

      {/* ----------------- BLOG CONTENT ----------------- */}
      <BlogContent
        posts={blogPosts}
        categories={categories as unknown as string[]}
        categoryColors={categoryColors}
        categoryCounts={categoryCounts}
      />
    </>
  );
}
