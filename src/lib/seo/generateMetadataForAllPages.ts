import {
  generatePageMetadata,
  generateServiceMetadata,
  generateLocationMetadata,
  generateBlogMetadata,
  generateBlogIndexMetadata,
} from "./metadata";

export const homeMetadata = generatePageMetadata(
  "Professional Janitorial & Commercial Cleaning in California",
  "Rangel Janitorial — 30+ years of professional janitorial and commercial cleaning services across California. Creating Excellent First Impressions for offices, medical facilities, and more. Serving Sacramento, Murrieta & Walnut Creek. Get a free quote today!",
  "/"
);

export const servicesMetadata = generatePageMetadata(
  "Our Janitorial & Commercial Cleaning Services",
  "Rangel Janitorial offers comprehensive commercial cleaning: janitorial cleaning, day porter services, electrostatic disinfection, floor care, and carpet cleaning. 30+ years experience.",
  "/services"
);

export const locationsMetadata = generatePageMetadata(
  "Janitorial & Commercial Cleaning Locations in California",
  "Rangel Janitorial serves Sacramento, Murrieta, Walnut Creek, and surrounding areas. Find professional janitorial and commercial cleaning services near you.",
  "/locations"
);

const services = [
  {
    name: "Janitorial Cleaning",
    slug: "janitorial-cleaning" as const,
    shortDescription:
      "Comprehensive daily and nightly janitorial services for offices, medical facilities, and commercial buildings across California.",
  },
  {
    name: "Day Porter",
    slug: "day-porter" as const,
    shortDescription:
      "On-site daytime cleaning and maintenance to keep your facility looking its best throughout the business day.",
  },
  {
    name: "Electrostatic Disinfection",
    slug: "electrostatic-disinfection" as const,
    shortDescription:
      "Advanced electrostatic spraying technology for thorough disinfection of high-touch surfaces and hard-to-reach areas.",
  },
  {
    name: "Floor Care",
    slug: "floor-care" as const,
    shortDescription:
      "Professional floor care including VCT strip and wax, polishing, and ongoing maintenance to keep your floors pristine.",
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning" as const,
    shortDescription:
      "Commercial carpet cleaning services using professional-grade equipment to extend carpet life and maintain a clean, professional appearance.",
  },
];

export const serviceMetadata: Record<string, ReturnType<typeof generateServiceMetadata>> = {};
for (const service of services) {
  serviceMetadata[service.slug] = generateServiceMetadata(service);
}

const locations = [
  {
    name: "Sacramento",
    slug: "sacramento" as const,
    description:
      "Janitorial and commercial cleaning in Sacramento and surrounding areas including Elk Grove, Roseville, Folsom, and the Central Valley.",
  },
  {
    name: "Murrieta",
    slug: "murrieta" as const,
    description:
      "Rangel Janitorial headquarters in Murrieta. Professional janitorial and commercial cleaning for the Inland Empire including Temecula, Menifee, and Lake Elsinore.",
  },
  {
    name: "Walnut Creek",
    slug: "walnut-creek" as const,
    description:
      "Professional janitorial and commercial cleaning in Walnut Creek and the East Bay. Serving Contra Costa County, Concord, Pleasant Hill, and the greater Bay Area.",
  },
];

export const locationMetadata: Record<string, ReturnType<typeof generateLocationMetadata>> = {};
for (const location of locations) {
  locationMetadata[location.slug] = generateLocationMetadata(location);
}

export const blogIndexMetadata = generateBlogIndexMetadata();

const blogPosts = [
  {
    title: "Office Cleaning Best Practices for a Healthier Workplace",
    slug: "office-cleaning-best-practices",
    description:
      "Essential office cleaning practices that promote employee health, productivity, and professional impressions. Learn what top janitorial companies focus on.",
  },
  {
    title: "Janitorial Services in Sacramento: What to Look For",
    slug: "janitorial-services-sacramento",
    description:
      "A guide for Sacramento businesses seeking reliable janitorial services. What to expect, key questions to ask, and how to evaluate commercial cleaning companies.",
  },
  {
    title: "Commercial Cleaning in Murrieta & the Inland Empire",
    slug: "commercial-cleaning-murrieta",
    description:
      "Why Inland Empire businesses trust Rangel Janitorial for their commercial cleaning needs. Services, reliability, and what sets us apart in Murrieta and Temecula.",
  },
  {
    title: "The Benefits of Day Porter Services for Your Facility",
    slug: "day-porter-benefits",
    description:
      "How day porter services keep your facility looking its best throughout the business day. Real-time cleaning, restroom maintenance, and common area upkeep.",
  },
  {
    title: "Electrostatic Disinfection Explained: How It Works",
    slug: "electrostatic-disinfection-explained",
    description:
      "Understanding electrostatic disinfection technology — how it works, why it provides superior coverage, and when your facility needs it.",
  },
  {
    title: "Floor Care 101: VCT Strip and Wax Guide",
    slug: "floor-care-vct-strip-wax",
    description:
      "Everything you need to know about VCT floor care — strip and wax schedules, maintenance tips, and why professional floor care extends the life of your flooring.",
  },
  {
    title: "Medical Facility Cleaning Standards You Should Know",
    slug: "medical-facility-cleaning-standards",
    description:
      "Cleaning standards and best practices for medical and dental facilities. Infection control, compliance requirements, and what to expect from your janitorial provider.",
  },
  {
    title: "Fitness Center Cleaning: A Complete Guide",
    slug: "fitness-center-cleaning-guide",
    description:
      "How to maintain a clean, hygienic fitness center. Equipment sanitization, locker room care, and the cleaning schedule your gym needs.",
  },
  {
    title: "How to Choose the Right Commercial Cleaning Company",
    slug: "choosing-commercial-cleaning-company",
    description:
      "Key factors to consider when selecting a commercial cleaning company. Insurance, references, scope of services, and red flags to watch for.",
  },
  {
    title: "Carpet Cleaning for Commercial Buildings: What You Need to Know",
    slug: "carpet-cleaning-commercial-buildings",
    description:
      "Professional carpet cleaning extends carpet life and improves indoor air quality. Learn about methods, frequency, and what commercial carpet cleaning includes.",
  },
  {
    title: "Green Cleaning for Commercial Facilities",
    slug: "green-cleaning-commercial-facilities",
    description:
      "How environmentally responsible cleaning practices benefit your facility, employees, and the planet. Green products, sustainable methods, and certifications to look for.",
  },
  {
    title: "Janitorial Services in Walnut Creek & the East Bay",
    slug: "janitorial-services-walnut-creek",
    description:
      "Professional janitorial services for Walnut Creek, Concord, Pleasant Hill, and the greater East Bay. What Bay Area businesses should expect from their cleaning provider.",
  },
];

export const blogMetadata: Record<string, ReturnType<typeof generateBlogMetadata>> = {};
for (const post of blogPosts) {
  blogMetadata[post.slug] = generateBlogMetadata(post);
}
