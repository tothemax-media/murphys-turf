export const SITE_URL = "https://rangeljanitorial.com";
export const COMPANY_NAME = "Rangel Janitorial";
export const COMPANY_TAGLINE = "Creating Excellent First Impressions";
export const COMPANY_DESCRIPTION =
  "Professional janitorial and commercial cleaning services across California. Rangel Janitorial delivers reliable, thorough cleaning for offices, medical facilities, industrial parks, and more. Serving Sacramento, Murrieta, and Walnut Creek.";
export const COMPANY_PHONE = "951-894-4222";
export const COMPANY_EMAIL = "ralph@rangeljanitorial.com";

export const COMPANY_ADDRESS = {
  city: "Murrieta",
  state: "CA",
  full: "Murrieta, CA 92562",
};

export const DEFAULT_OG_IMAGE = "/images/og-image.png";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100090088264095",
  instagram: "https://www.instagram.com/rangeljanitorial/",
  youtube: "https://www.youtube.com/@rangeljanitorial/featured",
};

export const SERVICE_SLUGS = [
  "janitorial-cleaning",
  "day-porter",
  "electrostatic-disinfection",
  "floor-care",
  "office-cleaning",
] as const;

export const LOCATION_SLUGS = [
  "sacramento",
  "murrieta",
  "walnut-creek",
] as const;

export const BLOG_SLUGS = [
  // Original 12 posts
  "office-cleaning-best-practices",
  "janitorial-services-sacramento",
  "commercial-cleaning-murrieta",
  "day-porter-benefits",
  "electrostatic-disinfection-explained",
  "floor-care-vct-strip-wax",
  "medical-facility-cleaning-standards",
  "fitness-center-cleaning-guide",
  "choosing-commercial-cleaning-company",
  "office-cleaning-best-practices-guide",
  "green-cleaning-commercial-facilities",
  "janitorial-services-walnut-creek",
  // Sacramento location posts (12)
  "sacramento-class-a-office-cleaning-checklist",
  "sacramento-medical-office-cleaning-compliance",
  "sacramento-after-hours-janitorial-service",
  "sacramento-multi-tenant-property-manager-guide",
  "sacramento-industrial-warehouse-cleaning",
  "sacramento-tech-office-coworking-cleaning",
  "sacramento-school-daycare-cleaning",
  "sacramento-green-cleaning-leed-sustainability",
  "sacramento-floor-care-climate",
  "sacramento-best-time-hire-janitorial",
  "sacramento-fitness-center-gym-cleaning",
  "sacramento-restaurant-restroom-day-porter",
  // Murrieta / Inland Empire location posts (12)
  "murrieta-temecula-wine-country-cleaning",
  "inland-empire-warehouse-distribution-cleaning",
  "murrieta-medical-dental-urgent-care-cleaning",
  "murrieta-hot-climate-floor-care",
  "murrieta-school-district-vendor-selection",
  "murrieta-hospitality-tasting-room-cleaning",
  "murrieta-hoa-multifamily-cleaning",
  "murrieta-auto-dealership-showroom-cleaning",
  "murrieta-class-a-day-porter",
  "murrieta-post-construction-cleaning",
  "murrieta-electrostatic-disinfection-flu-season",
  "murrieta-green-cleaning-sustainability",
  // Walnut Creek / East Bay location posts (10)
  "walnut-creek-class-a-office-tower-cleaning",
  "walnut-creek-biotech-lab-cleaning",
  "walnut-creek-bart-office-cleaning",
  "walnut-creek-lamorinda-boutique-office",
  "walnut-creek-tri-valley-tech-campus",
  "walnut-creek-medical-plaza-compliance",
  "walnut-creek-east-bay-green-cleaning",
  "walnut-creek-concord-pleasant-hill-industrial",
  "walnut-creek-financial-district-after-hours",
  "walnut-creek-property-management-rfp-guide",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
export type LocationSlug = (typeof LOCATION_SLUGS)[number];
export type BlogSlug = (typeof BLOG_SLUGS)[number];
