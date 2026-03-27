import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Expert janitorial and commercial cleaning tips, facility maintenance guides, and industry insights for California businesses. Learn from Rangel Janitorial professionals how to keep your facility clean, healthy, and professional.",
  openGraph: {
    title: "Blog | Rangel Janitorial",
    description:
      'Expert janitorial and commercial cleaning tips, facility maintenance guides, and industry insights for California businesses.',
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
    slug: 'carpet-cleaning-commercial-buildings',
    title: 'Carpet Cleaning for Commercial Buildings: What You Need to Know',
    category: 'Janitorial Tips',
    author: "Rangel Janitorial Team",
    date: '2025-12-28',
    excerpt:
      'Professional carpet cleaning extends carpet life and improves indoor air quality. Learn about methods, frequency, and what commercial carpet cleaning includes.',
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
