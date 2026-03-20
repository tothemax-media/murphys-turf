import type { Company } from '../types';

export const company: Company = {
  name: "Murphy's Turf",
  tagline: "When you care about clean turf, call Murphy's Turf",
  phone: "(951) 331-3300",
  email: "info@murphysturf.com",
  address: {
    street: "26323 Jefferson Avenue",
    city: "Murrieta",
    state: "CA",
    zip: "92562",
  },
  businessHours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  founded: 2018,
  description: `Murphy's Turf brings over 30 years of cleaning and disinfecting experience to the artificial turf industry. Based in Murrieta, California, we recognized early on that synthetic turf installations across Southern California needed a professional cleaning solution that garden hoses and DIY efforts simply could not deliver. Pet waste, bacteria, embedded debris, and California's intense sun combine to create unsanitary conditions that demand specialized treatment.

Our proprietary OxyTurf product powers every cleaning we perform — delivering deep sanitization, odor elimination, and fiber restoration that leaves artificial turf looking, smelling, and feeling like the day it was installed. What started as a local operation serving the Inland Empire has grown into one of California's most trusted artificial turf cleaning companies, with a dedicated team serving thousands of residential and commercial clients across Huntington Beach, Murrieta, the Bay Area's Contra Costa County, and Sacramento. We specialize in pet hair and debris removal, blooming and de-compacting, disinfecting and deodorizing, poop scooping, and OxyTurf-powered treatments — everything needed to keep synthetic turf performing and looking its best for years to come.`,
  mission: "To deliver exceptional artificial turf cleaning and disinfecting that keeps synthetic grass safe, clean, and beautiful — using our proprietary OxyTurf product that protects California families, pets, and the environment.",
  values: [
    {
      title: "Quality First",
      description: "We never cut corners. Every turf surface receives our full attention, professional-grade equipment, and proven cleaning techniques that deliver visible, lasting results.",
    },
    {
      title: "Customer Focused",
      description: "Your satisfaction drives everything we do. We customize our cleaning approach to your turf's specific needs and stand behind our work with a satisfaction guarantee.",
    },
    {
      title: "Eco-Friendly",
      description: "Our OxyTurf product is safe for children, pets, and the environment. Our methods conserve water while delivering a superior clean.",
    },
    {
      title: "Community Driven",
      description: "As a California family business with 30+ years of cleaning and disinfecting experience, we're invested in the communities we serve. We believe in giving back to the places that have supported our growth.",
    },
  ],
  stats: {
    yearsInBusiness: 30,
    customersServed: "2,500+",
    satisfactionRate: "98%",
    projectsCompleted: "10,000+",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
    google: "#",
    yelp: "#",
  },
  certifications: [
    "Licensed & Insured",
    "EPA Certified",
    "California Landscape Contractors Association (CLCA)",
    "Better Business Bureau A+ Rated",
  ],
};
