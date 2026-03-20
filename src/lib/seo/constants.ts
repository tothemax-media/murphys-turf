export const SITE_URL = "https://murphysturf.com";
export const COMPANY_NAME = "Murphy's Turf";
export const COMPANY_DESCRIPTION =
  "Professional artificial turf cleaning, disinfecting, and maintenance services across California. Murphy's Turf specializes in pet hair and debris removal, blooming and de-compacting, disinfecting and deodorizing, poop scooping, and OxyTurf-powered treatments to keep your artificial lawn fresh, clean, and looking like new. 30+ years of cleaning and disinfecting experience.";
export const COMPANY_PHONE = "(951) 331-3300";
export const COMPANY_EMAIL = "info@murphysturf.com";

export const COMPANY_ADDRESS = {
  street: "26323 Jefferson Avenue",
  city: "Murrieta",
  state: "CA",
  zip: "92562",
  full: "26323 Jefferson Avenue, Murrieta, CA 92562",
};

export const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/murphysturf",
  instagram: "https://instagram.com/murphysturf",
  google: "https://g.page/murphysturf",
  yelp: "https://yelp.com/biz/murphys-turf-murrieta",
};

export const SERVICE_SLUGS = [
  "pet-hair-debris",
  "blooming-decompacting",
  "disinfect-deodorize",
  "poop-scooping",
  "oxyturf",
] as const;

export const LOCATION_SLUGS = [
  "huntington-beach",
  "murrieta",
  "martinez",
  "sacramento",
] as const;

export const BLOG_SLUGS = [
  "ultimate-guide-artificial-turf-cleaning",
  "pet-turf-odor-removal-tips",
  "how-often-clean-artificial-turf",
  "artificial-turf-vs-natural-grass-maintenance",
  "commercial-turf-cleaning-benefits",
  "synthetic-turf-sanitization-process",
  "keeping-artificial-turf-cool-california-heat",
  "artificial-turf-cleaning-mistakes-to-avoid",
  "why-professional-turf-cleaning-matters",
  "extending-lifespan-artificial-turf",
  "artificial-turf-pet-owners-guide",
  "seasonal-artificial-turf-maintenance-california",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
export type LocationSlug = (typeof LOCATION_SLUGS)[number];
export type BlogSlug = (typeof BLOG_SLUGS)[number];
