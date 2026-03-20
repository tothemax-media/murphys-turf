import type { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  // --- General ---
  {
    question: "What areas does Murphy's Turf serve?",
    answer: "Murphy's Turf proudly serves communities across California, including Huntington Beach and the LA coastal area, Murrieta and the Inland Empire, Martinez and the greater East Bay, and Greater Sacramento. Whether you're in Newport Beach or Elk Grove, our crews deliver expert artificial turf cleaning tailored to your local climate and conditions.",
    category: "general",
  },
  {
    question: "Is Murphy's Turf licensed and insured?",
    answer: "Yes, Murphy's Turf is fully licensed and insured for artificial turf cleaning and maintenance services in the state of California. We are a member of the California Landscape Contractors Association (CLCA) and maintain a BBB A+ rating. Your property is in safe, professional hands.",
    category: "general",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer: "Absolutely. Our proprietary OxyTurf product is specifically formulated to be safe for pets and children after a short drying period, typically one to two hours. We are always happy to discuss the specific products and active ingredients we use so you can make informed decisions for your family.",
    category: "general",
  },
  {
    question: "How much experience does Murphy's Turf have?",
    answer: "Murphy's Turf brings over 30 years of cleaning and disinfecting experience to the artificial turf industry. Based in Murrieta, California, we have been serving communities across Southern California, the Bay Area, and Sacramento with professional artificial turf cleaning powered by our proprietary OxyTurf product.",
    category: "general",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we offer completely free estimates with no obligation. You can schedule a convenient on-site assessment, or if you prefer, we can provide an initial estimate over the phone or through our online request form. Our team will work with you to find the right cleaning plan for your turf and budget.",
    category: "general",
  },
  {
    question: "What makes Murphy's Turf different from other companies?",
    answer: "We specialize exclusively in artificial turf cleaning and disinfecting — we are not a general landscaping company. With 30+ years of cleaning and disinfecting experience and our proprietary OxyTurf product, we deliver results that generic cleaning services simply cannot match. Our California-specific expertise means we understand the unique challenges that intense heat and UV exposure create for synthetic turf. Every customer receives a custom maintenance program backed by our satisfaction guarantee.",
    category: "general",
  },
  {
    question: "How often should I have my artificial turf professionally cleaned?",
    answer: "We recommend professional cleaning every three to six months at a minimum to keep your turf looking and smelling its best. If you have pets, monthly cleaning is strongly recommended to prevent uric acid buildup and bacterial growth in the infill. California's warm climate accelerates odor and bacteria development, making regular professional maintenance especially important.",
    category: "general",
  },
  {
    question: "Is professional cleaning really necessary for artificial turf?",
    answer: "Yes, rinsing your turf with a garden hose alone is not enough to remove bacteria, allergens, and odor-causing compounds that become embedded deep in the infill layer. California's intense heat amplifies bacterial growth and accelerates the breakdown of organic waste trapped in the turf fibers. Professional cleaning with specialized equipment and our OxyTurf treatment is the only way to truly sanitize your turf and extend its lifespan.",
    category: "general",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer: "We stand behind every service we provide. If you are not completely satisfied with the results, we will re-clean your turf at no additional cost. If we still cannot meet your expectations, we will issue a full refund for that service. We are proud to maintain a 98% customer satisfaction rate across all of our California locations.",
    category: "general",
  },
  {
    question: "What is OxyTurf?",
    answer: "OxyTurf is our proprietary cleaning and disinfecting product — developed from 30+ years of professional experience — that powers every Murphy's Turf treatment. It is specifically engineered for artificial turf, dissolving uric acid crystals, eliminating bacteria on contact, and neutralizing odors at the molecular level. OxyTurf is safe for children, pets, and the environment.",
    category: "general",
  },

  // --- Pricing ---
  {
    question: "How much does artificial turf cleaning cost?",
    answer: "Pricing varies depending on the service, turf area size, and current condition of your synthetic turf. Contact us at (951) 331-3300 for a free estimate tailored to your specific property. We offer competitive pricing and maintenance plans that provide great value for regular service.",
    category: "pricing",
  },
  {
    question: "Do you offer package discounts?",
    answer: "Yes, we offer maintenance plans and bundled service packages that can save you significantly compared to booking individual services. Our programs combine regular pet hair removal, blooming, disinfecting, and poop scooping into one convenient plan with predictable pricing so your turf stays fresh year-round.",
    category: "pricing",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, personal checks, and online payments through our customer portal. For larger commercial projects or multi-service packages, we are happy to work with you on convenient payment arrangements.",
    category: "pricing",
  },
  {
    question: "Are there any hidden fees?",
    answer: "Never. We believe in transparent, upfront pricing with no surprises. The quote you receive includes all labor, OxyTurf product, and equipment — there are no hidden charges after the work is done. If anything changes during the job, we will discuss it with you and get approval before proceeding.",
    category: "pricing",
  },
  {
    question: "Do you offer maintenance plans?",
    answer: "Yes, we offer weekly, bi-weekly, monthly, and quarterly maintenance plans designed to keep your artificial turf in peak condition year-round. Regular maintenance plans ensure consistent cleaning and disinfecting, prevent odor buildup, and extend the life of your turf investment. Plan members also receive priority scheduling and discounted rates on additional services.",
    category: "pricing",
  },

  // --- Services ---
  {
    question: "What does the pet hair and debris removal service involve?",
    answer: "Our pet hair and debris removal service uses commercial-grade extraction equipment to remove embedded pet hair, leaves, dirt, pollen, and organic material from within the turf fibers and infill layer. We finish with fiber grooming and infill redistribution for a clean, well-maintained surface. This service is ideal as standalone maintenance or as part of a comprehensive cleaning visit.",
    category: "services",
    serviceSlug: "pet-hair-debris",
  },
  {
    question: "What is blooming and de-compacting?",
    answer: "Blooming and de-compacting is our two-phase turf restoration service. De-compacting breaks up hardened infill material to restore drainage and cushioning. Blooming uses professional power-brushing to lift flattened turf fibers back to their original upright position. The result is turf that looks, feels, and drains like it was freshly installed.",
    category: "services",
    serviceSlug: "blooming-decompacting",
  },
  {
    question: "How does the disinfect and deodorize service work?",
    answer: "We use our proprietary OxyTurf product to penetrate deep into the infill layer where bacteria, pathogens, and odor-causing compounds reside. OxyTurf eliminates microorganisms on contact and breaks down odor molecules at the chemical level — genuinely neutralizing smells rather than masking them. The treatment is safe for children and pets once dry.",
    category: "services",
    serviceSlug: "disinfect-deodorize",
  },
  {
    question: "What does your poop scooping service include?",
    answer: "Our poop scooping service includes thorough inspection of the entire turf surface, complete removal and disposal of all pet waste, and spot treatment of affected areas to prevent bacterial contamination. We offer weekly and bi-weekly scheduling for consistent maintenance. This service pairs perfectly with OxyTurf disinfecting for complete turf hygiene.",
    category: "services",
    serviceSlug: "poop-scooping",
  },
  {
    question: "What is OxyTurf and why is it better than DIY products?",
    answer: "OxyTurf is our proprietary cleaning and disinfecting formula developed from 30+ years of professional experience. Unlike retail products that are general-purpose cleaners repurposed for turf, OxyTurf is purpose-built for synthetic turf — it dissolves uric acid crystals, eliminates bacteria, and neutralizes odors at the molecular level with deep infill penetration that consumer products cannot achieve.",
    category: "services",
    serviceSlug: "oxyturf",
  },
  {
    question: "How long until I can use my turf after cleaning?",
    answer: "For most services, your turf is safe for use once the OxyTurf treatment has dried — typically one to two hours in California's sunny conditions. We will always provide specific guidance based on the services performed that day.",
    category: "services",
  },

  // --- Scheduling ---
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking one to two weeks in advance to secure your preferred date and time. Spring and summer are our busiest seasons as warmer temperatures increase odor and bacteria concerns, so early booking is especially important during those months. Recurring maintenance plan customers receive priority scheduling year-round.",
    category: "scheduling",
  },
  {
    question: "How long does a typical cleaning take?",
    answer: "A standard residential turf cleaning for an average-sized yard of 500 to 1,000 square feet typically takes one to two hours to complete. Larger properties or additional services may extend the service time. We will provide a time estimate when you book so you know what to expect.",
    category: "scheduling",
  },
  {
    question: "Do I need to be home during service?",
    answer: "No, you do not need to be home during your appointment. We simply ask that you ensure gate access to the turf areas being serviced and that pets are kept indoors or in a separate area during the cleaning. We will leave a detailed service summary at your door or send one via email so you know exactly what was completed.",
    category: "scheduling",
  },
  {
    question: "What if it rains on my service day?",
    answer: "If rain prevents us from completing your service, we will reschedule at no additional charge as quickly as possible. Because our OxyTurf treatment requires dry conditions for optimal absorption and effectiveness, heavy rain can reduce results. We monitor weather conditions closely and will proactively contact you to reschedule if needed.",
    category: "scheduling",
  },
  {
    question: "How do I cancel or reschedule a service?",
    answer: "We ask for at least 24 hours' notice for cancellations or reschedules. You can call our office at (951) 331-3300, send us an email, or use the online customer portal to manage your appointments. There is no fee for rescheduling as long as we receive timely notice.",
    category: "scheduling",
  },

  // --- Locations ---
  {
    question: "Do you serve the Huntington Beach and LA area?",
    answer: "Yes, we provide full-service artificial turf cleaning throughout the Huntington Beach and LA coastal corridor, including Newport Beach, Costa Mesa, Long Beach, and Seal Beach. Our crews understand the region's coastal conditions and how they impact synthetic turf maintenance needs.",
    category: "locations",
  },
  {
    question: "Where is Murphy's Turf headquartered?",
    answer: "Murphy's Turf is headquartered in Murrieta, California, in the heart of the Inland Empire. From our home base we serve the entire Inland Empire region including Temecula, French Valley, Menifee, Lake Elsinore, Hemet, Perris, Wildomar, Canyon Lake, Temescal Valley, and Winchester.",
    category: "locations",
  },
  {
    question: "Do you serve the Bay Area and Sacramento?",
    answer: "Yes, we serve both the Bay Area and Sacramento metro regions. In the Bay Area, our team covers Martinez and the greater East Bay including Concord, Pleasant Hill, Walnut Creek, Antioch, and Brentwood. In the Sacramento region, we serve Elk Grove, Roseville, Folsom, and Rancho Cordova.",
    category: "locations",
  },
];
