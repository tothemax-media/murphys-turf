import {
  generatePageMetadata,
  generateServiceMetadata,
  generateLocationMetadata,
  generateBlogMetadata,
  generateBlogIndexMetadata,
} from "./metadata";

export const homeMetadata = generatePageMetadata(
  "Professional Artificial Turf Cleaning in California",
  "Murphy's Turf provides expert artificial turf cleaning, disinfecting, pet odor removal, and synthetic turf maintenance across California. Powered by OxyTurf. Free estimates — call (951) 331-3300 today!",
  "/"
);

export const aboutMetadata = generatePageMetadata(
  "About Us",
  "Learn about Murphy's Turf — California's trusted artificial turf cleaning professionals with 30+ years of cleaning and disinfecting experience. Powered by OxyTurf. Based in Murrieta, CA.",
  "/about"
);

export const contactMetadata = generatePageMetadata(
  "Contact Us",
  "Get in touch with Murphy's Turf for a free artificial turf cleaning quote. Serving Huntington Beach, Murrieta, Martinez, Sacramento, and more. Call (951) 331-3300 or fill out our form.",
  "/contact"
);

export const servicesMetadata = generatePageMetadata(
  "Our Artificial Turf Cleaning Services",
  "Explore Murphy's Turf professional services: pet hair & debris removal, blooming & de-compacting, disinfect & deodorize, poop scooping, and OxyTurf treatments throughout California.",
  "/services"
);

export const locationsMetadata = generatePageMetadata(
  "Artificial Turf Cleaning Locations in California",
  "Murphy's Turf serves Huntington Beach, Murrieta, Martinez, Sacramento, and surrounding areas. Find professional artificial turf cleaning services near you.",
  "/locations"
);

const services = [
  {
    name: "Pet Hair & Debris Removal",
    slug: "pet-hair-debris" as const,
    shortDescription:
      "Thorough removal of pet hair, leaves, dirt, and embedded debris from artificial turf fibers and infill using commercial-grade extraction equipment.",
  },
  {
    name: "Blooming & De-Compacting",
    slug: "blooming-decompacting" as const,
    shortDescription:
      "Restore flattened turf fibers to their original upright position and break up compacted infill for improved drainage and appearance.",
  },
  {
    name: "Disinfect & Deodorize",
    slug: "disinfect-deodorize" as const,
    shortDescription:
      "Professional-grade disinfecting and deodorizing powered by OxyTurf. Eliminate bacteria, pet odors, mold, and mildew at their source.",
  },
  {
    name: "Poop Scooping & Removal",
    slug: "poop-scooping" as const,
    shortDescription:
      "Regular, reliable pet waste removal from artificial turf. Scheduled weekly or bi-weekly service to keep your yard clean and hygienic.",
  },
  {
    name: "Powered By OxyTurf",
    slug: "oxyturf" as const,
    shortDescription:
      "Our proprietary OxyTurf cleaning and disinfecting formula delivers deep sanitization, odor elimination, and fiber rejuvenation in every treatment.",
  },
];

export const serviceMetadata: Record<string, ReturnType<typeof generateServiceMetadata>> = {};
for (const service of services) {
  serviceMetadata[service.slug] = generateServiceMetadata(service);
}

const locations = [
  {
    name: "Huntington Beach",
    slug: "huntington-beach" as const,
    description:
      "Serving the Huntington Beach and LA coastal area with expert artificial turf cleaning, disinfecting, and pet odor removal services.",
  },
  {
    name: "Murrieta",
    slug: "murrieta" as const,
    description:
      "Professional artificial turf cleaning for Murrieta homeowners and businesses in the Inland Empire. Murphy's Turf headquarters.",
  },
  {
    name: "Martinez",
    slug: "martinez" as const,
    description:
      "Reliable artificial turf cleaning services in Martinez and the East Bay — from deep cleaning to OxyTurf disinfecting treatments.",
  },
  {
    name: "Sacramento",
    slug: "sacramento" as const,
    description:
      "Full-service artificial turf cleaning in Sacramento — keeping Central Valley synthetic lawns fresh and disinfected year-round.",
  },
];

export const locationMetadata: Record<string, ReturnType<typeof generateLocationMetadata>> = {};
for (const location of locations) {
  locationMetadata[location.slug] = generateLocationMetadata(location);
}

export const blogIndexMetadata = generateBlogIndexMetadata();

const blogPosts = [
  {
    title: "The Ultimate Guide to Artificial Turf Cleaning",
    slug: "ultimate-guide-artificial-turf-cleaning",
    description:
      "Everything you need to know about cleaning artificial turf — methods, frequency, DIY vs. professional cleaning, and how to keep synthetic grass looking pristine.",
  },
  {
    title: "Pet Turf Odor Removal: Tips That Actually Work",
    slug: "pet-turf-odor-removal-tips",
    description:
      "How to eliminate pet urine odor from artificial turf. Proven methods for neutralizing bacteria and keeping your synthetic lawn fresh for pets and family.",
  },
  {
    title: "How Often Should You Clean Artificial Turf?",
    slug: "how-often-clean-artificial-turf",
    description:
      "Learn the recommended cleaning frequency for residential and commercial artificial turf. Seasonal schedules, maintenance tips, and signs it's time for a deep clean.",
  },
  {
    title: "Artificial Turf vs. Natural Grass: Maintenance Compared",
    slug: "artificial-turf-vs-natural-grass-maintenance",
    description:
      "A detailed comparison of artificial turf and natural grass maintenance costs, time, water usage, and long-term care requirements for California homeowners.",
  },
  {
    title: "Why Commercial Properties Need Professional Turf Cleaning",
    slug: "commercial-turf-cleaning-benefits",
    description:
      "The business case for professional artificial turf cleaning at commercial facilities, sports venues, and HOA common areas. ROI, hygiene, and liability benefits.",
  },
  {
    title: "The Synthetic Turf Sanitization Process Explained",
    slug: "synthetic-turf-sanitization-process",
    description:
      "A step-by-step look at professional synthetic turf sanitization — from initial assessment to OxyTurf treatment, disinfecting, and infill grooming.",
  },
  {
    title: "Keeping Artificial Turf Cool in California Heat",
    slug: "keeping-artificial-turf-cool-california-heat",
    description:
      "Practical solutions for reducing artificial turf heat in California summers. Cooling infills, shade strategies, and maintenance tips for comfortable synthetic grass.",
  },
  {
    title: "Artificial Turf Cleaning Mistakes to Avoid",
    slug: "artificial-turf-cleaning-mistakes-to-avoid",
    description:
      "Common mistakes homeowners make when cleaning artificial turf — harsh chemicals, pressure washing errors, and neglecting infill — and how to avoid them.",
  },
  {
    title: "Why Professional Turf Cleaning Matters",
    slug: "why-professional-turf-cleaning-matters",
    description:
      "The difference between DIY and professional artificial turf cleaning. Why expert equipment, OxyTurf treatments, and proper techniques deliver superior results.",
  },
  {
    title: "How to Extend the Lifespan of Your Artificial Turf",
    slug: "extending-lifespan-artificial-turf",
    description:
      "Maximize your artificial turf investment with proper maintenance. Tips for extending synthetic grass lifespan from 15 to 25+ years with regular professional care.",
  },
  {
    title: "The Complete Artificial Turf Guide for Pet Owners",
    slug: "artificial-turf-pet-owners-guide",
    description:
      "Everything pet owners need to know about artificial turf — choosing pet-friendly turf, cleaning routines, odor prevention, and keeping it safe for dogs and cats.",
  },
  {
    title: "Seasonal Artificial Turf Maintenance in California",
    slug: "seasonal-artificial-turf-maintenance-california",
    description:
      "A season-by-season guide to artificial turf maintenance in California. Spring refresh, summer heat management, fall cleanup, and winter care for synthetic lawns.",
  },
];

export const blogMetadata: Record<string, ReturnType<typeof generateBlogMetadata>> = {};
for (const post of blogPosts) {
  blogMetadata[post.slug] = generateBlogMetadata(post);
}
