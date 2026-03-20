import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Map,
  Leaf,
  Droplets,
  Bug,
  Sprout,
  Wind,
  Calendar,
  ChevronRight,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Testimonial {
  name: string;
  neighborhood: string;
  rating: number;
  text: string;
}

interface ServiceItem {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
}

interface LocationData {
  city: string;
  slug: string;
  state: string;
  phone: string;
  email: string;
  heroSubtitle: string;
  description: string[];
  neighborhoods: string[];
  testimonials: Testimonial[];
  metaTitle: string;
  metaDescription: string;
  climateNote: string;
  serviceAreaDescription: string;
}

// ---------------------------------------------------------------------------
// Shared services (same across all locations)
// ---------------------------------------------------------------------------

const services: ServiceItem[] = [
  {
    name: 'Lawn Cleaning',
    slug: 'lawn-cleaning',
    icon: 'leaf',
    shortDescription:
      'Professional turf cleaning to remove debris, thatch, and buildup for a healthier, greener lawn.',
  },
  {
    name: 'Aeration',
    slug: 'aeration',
    icon: 'wind',
    shortDescription:
      'Core aeration to relieve compaction, improve drainage, and allow nutrients to reach the root zone.',
  },
  {
    name: 'Seeding',
    slug: 'seeding',
    icon: 'sprout',
    shortDescription:
      'Overseeding and new lawn establishment with premium grass varieties suited for Colorado.',
  },
  {
    name: 'Fertilization',
    slug: 'fertilization',
    icon: 'droplets',
    shortDescription:
      'Custom fertilization programs designed around soil tests and seasonal nutrient needs.',
  },
  {
    name: 'Pest Control',
    slug: 'pest-control',
    icon: 'bug',
    shortDescription:
      'Targeted pest and grub management to protect your lawn from damage without harsh chemicals.',
  },
  {
    name: 'Seasonal Maintenance',
    slug: 'seasonal-maintenance',
    icon: 'calendar',
    shortDescription:
      'Spring cleanup, fall winterization, and year-round maintenance plans to keep lawns pristine.',
  },
];

// ---------------------------------------------------------------------------
// Location data
// ---------------------------------------------------------------------------

const locationData: Record<string, LocationData> = {
  denver: {
    city: 'Denver',
    slug: 'denver',
    state: 'CO',
    phone: '(720) 555-1234',
    email: 'denver@murphysturf.com',
    heroSubtitle:
      'Professional lawn care and turf cleaning for the Mile High City. Our main office and largest service team are right here in Denver, ready to transform your yard.',
    description: [
      "Denver's semi-arid climate presents a unique set of challenges for homeowners who want a lush, healthy lawn. With over 300 days of sunshine, intense summer heat, and cold, dry winters, the Mile High City demands a lawn care approach that accounts for rapid moisture loss, heavy clay soils, and dramatic temperature swings. At Murphy's Turf, our Denver headquarters has been serving neighborhoods across the metro area since 2018, and we understand exactly what it takes to keep your grass thriving at 5,280 feet above sea level.",
      "From the historic tree-lined streets of Capitol Hill and the manicured lawns of Washington Park to the modern developments in Central Park (formerly Stapleton) and the creative community of RiNo, every Denver neighborhood has its own character and its own turf care needs. Cherry Creek properties often feature high-end landscape designs that demand meticulous maintenance, while Park Hill's mature lots benefit from deep-root aeration and overseeding to rejuvenate aging lawns. In Baker and Highlands, smaller urban yards need targeted fertilization programs that maximize every square foot of green space.",
      "Our Denver team performs comprehensive soil testing to understand your yard's specific pH and nutrient profile, then builds a custom treatment plan around those results. We use cool-season grass blends like Kentucky bluegrass and tall fescue that are proven performers along the Front Range. Whether you need spring cleanup after a tough Colorado winter, grub control to protect your investment during summer, or a full fall aeration and overseeding program, Murphy's Turf has the local expertise and professional-grade equipment to deliver results you can see and feel underfoot.",
    ],
    neighborhoods: [
      'Capitol Hill',
      'Cherry Creek',
      'Highlands',
      'Park Hill',
      'Central Park (Stapleton)',
      'Washington Park',
      'Congress Park',
      'City Park',
      'Baker',
      'RiNo',
    ],
    testimonials: [
      {
        name: 'Sarah Mitchell',
        neighborhood: 'Washington Park',
        rating: 5,
        text: "We moved to Wash Park three years ago and our lawn was in rough shape. Murphy's Turf did a full aeration and overseeding in the fall, followed by their fertilization program. By the next summer our neighbors were asking who we hired. Couldn't be happier with the results.",
      },
      {
        name: 'James Ortega',
        neighborhood: 'Central Park',
        rating: 5,
        text: "As a new build in Central Park, our builder-grade sod was struggling. Murphy's team identified our soil compaction issues, set up a treatment schedule, and now our lawn is the greenest on the block. Their communication is top-notch too.",
      },
      {
        name: 'Linda Chen',
        neighborhood: 'Cherry Creek',
        rating: 5,
        text: "I've tried three different lawn care companies over the years, and Murphy's Turf is the first one that actually explained what they were doing and why. The difference in our Cherry Creek lawn after just one season was remarkable. They genuinely care about the work.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Denver, CO',
    metaDescription:
      "Denver's trusted lawn care professionals. Murphy's Turf offers aeration, seeding, fertilization, pest control, and seasonal maintenance across Capitol Hill, Cherry Creek, Highlands, Park Hill, and more.",
    climateNote:
      'Denver receives about 17 inches of precipitation annually with intense UV at altitude. Clay-heavy soils require regular aeration, and cool-season grasses need consistent watering schedules during the hot, dry summers.',
    serviceAreaDescription:
      'Our Denver service area covers the entire city and county, from the Highlands and Berkeley in the northwest to Park Hill and Montclair in the east, and from the Wash Park and University neighborhoods in the south to the new developments along the I-70 corridor.',
  },

  'colorado-springs': {
    city: 'Colorado Springs',
    slug: 'colorado-springs',
    state: 'CO',
    phone: '(719) 555-5678',
    email: 'cosprings@murphysturf.com',
    heroSubtitle:
      'High-altitude lawn care expertise for the Pikes Peak region. Our Colorado Springs team specializes in treatments designed for the unique elevation and soil conditions south of Denver.',
    description: [
      "Colorado Springs sits at over 6,000 feet in elevation, and that altitude makes all the difference when it comes to lawn care. The UV exposure here is significantly more intense than at lower elevations, which means turf grasses face more stress, faster moisture evaporation, and a shorter effective growing season. The soil along the Front Range south of Denver tends to be a challenging mix of rocky substrate, clay, and alkaline deposits from the ancient seabed. Murphy's Turf has spent years developing treatment protocols specifically for these conditions, and our Colorado Springs crew delivers results that generic national lawn care chains simply cannot match.",
      "Whether you live in the prestigious Broadmoor neighborhood, the family-friendly streets of Briargate and Cordera, or the eclectic charm of Old Colorado City near Manitou Springs, our team knows your area. Rockrimmon and Mountain Shadows properties face unique microclimates created by their proximity to the foothills, often requiring customized watering and fertilization schedules. The newer master-planned communities of Flying Horse and Northgate feature modern irrigation systems that we can optimize alongside our treatment programs. Even the Manitou Springs area, with its distinctive mineral-rich soil, receives tailored care from our specialists.",
      "Our Colorado Springs services include deep-core aeration to break through compacted clay and rocky layers, overseeding with drought-tolerant grass varieties that handle altitude stress, and a multi-step fertilization program that feeds your lawn through the short but intense growing season. We also offer targeted grub and pest control to address the Japanese beetle larvae and sod webworms that are increasingly common in El Paso County. Every treatment starts with a thorough property assessment so we can build a plan that works for your specific lot, soil, and sun exposure.",
    ],
    neighborhoods: [
      'Broadmoor',
      'Briargate',
      'Old Colorado City',
      'Manitou Springs Area',
      'Rockrimmon',
      'Northgate',
      'Flying Horse',
      'Cordera',
      'Mountain Shadows',
    ],
    testimonials: [
      {
        name: 'Michael Brandt',
        neighborhood: 'Briargate',
        rating: 5,
        text: "Living in Briargate, our clay soil was a nightmare. Murphy's Turf did a double-pass aeration and then started us on their seasonal fertilization plan. Two seasons in and our lawn has never looked this good. They really understand Springs soil.",
      },
      {
        name: 'Patricia Vasquez',
        neighborhood: 'Broadmoor',
        rating: 5,
        text: "We needed a company that could match the quality of our Broadmoor property. Murphy's Turf exceeded our expectations. Their attention to detail is impeccable and they always show up when they say they will. Highly recommend for anyone who takes their lawn seriously.",
      },
      {
        name: 'Robert Kim',
        neighborhood: 'Flying Horse',
        rating: 5,
        text: "Just built in Flying Horse and wanted to get our lawn established right from the start. Murphy's team guided us through the whole process, from soil prep to seeding to the first full fertilization cycle. Our lawn looks years ahead of our neighbors' brand new sod.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Colorado Springs, CO',
    metaDescription:
      "Professional lawn care for Colorado Springs. Murphy's Turf specializes in high-altitude turf management with aeration, seeding, fertilization, and pest control for Broadmoor, Briargate, Flying Horse, and beyond.",
    climateNote:
      'Colorado Springs experiences higher UV intensity than Denver due to its elevation. Rocky, alkaline soils need amendments, and the shorter growing season demands efficient fertilization timing. Afternoon thunderstorms in summer provide some moisture but also risk hail damage to lawns.',
    serviceAreaDescription:
      'We serve the greater Colorado Springs metropolitan area including El Paso County communities from Monument and Black Forest in the north to Security-Widefield in the south, and from Manitou Springs at the base of Pikes Peak to the eastern plains developments.',
  },

  aurora: {
    city: 'Aurora',
    slug: 'aurora',
    state: 'CO',
    phone: '(720) 555-2345',
    email: 'aurora@murphysturf.com',
    heroSubtitle:
      'Comprehensive lawn care for one of Colorado\'s fastest-growing cities. From established neighborhoods to brand new developments, we keep Aurora lawns green and healthy.',
    description: [
      "Aurora is Colorado's third-largest city and one of the most diverse communities along the Front Range. Stretching from the edge of Denver east toward the plains, Aurora encompasses a remarkable range of property types, from the mature lots near Cherry Creek State Park and the Quincy Reservoir area to the sparkling new master-planned communities of Painted Prairie and Blackstone. Each of these areas presents distinct lawn care challenges, and Murphy's Turf has the experience and local knowledge to handle them all.",
      "Established neighborhoods like Saddle Rock and Tallyn's Reach feature properties with 15- to 20-year-old lawns that are entering the phase where they need serious rejuvenation. Compacted soil, thinning grass, and accumulated thatch are common issues we address with our comprehensive cleanup and aeration services. Murphy Creek, the community built around the popular golf course, tends to have homeowners who expect impeccable turf quality, and our fertilization and pest control programs deliver that country-club look. Meanwhile, the newer developments in Painted Prairie and Blackstone often come with builder-grade sod over poorly prepared subsoil, and our team specializes in getting those young lawns established with deep root growth and proper nutrient balance.",
      "Aurora's position on the eastern plains means it receives more wind exposure and slightly less precipitation than neighborhoods closer to the foothills. Our treatment plans account for this with drought-smart watering recommendations and grass seed blends that tolerate wind stress and temperature extremes. We also see a higher incidence of prairie-adapted weeds in Aurora, so our integrated weed management approach targets bindweed, thistle, and spurge before they take over. From a simple seasonal maintenance plan to a full lawn transformation, Murphy's Turf brings the same professional-grade service to every Aurora property we touch.",
    ],
    neighborhoods: [
      'Southlands',
      'Quincy Reservoir Area',
      'Cherry Creek State Park Area',
      'Saddle Rock',
      "Tallyn's Reach",
      'Murphy Creek',
      'Painted Prairie',
      'Blackstone',
    ],
    testimonials: [
      {
        name: 'David Nakamura',
        neighborhood: 'Saddle Rock',
        rating: 5,
        text: "Our Saddle Rock lawn was showing its age after 15 years. Murphy's Turf came out, did their soil testing, and recommended a full aeration, overseeding, and fertilization program. The turnaround has been incredible. It looks better now than when we first moved in.",
      },
      {
        name: 'Angela Torres',
        neighborhood: 'Painted Prairie',
        rating: 5,
        text: "New construction lawn problems are real! Our builder sod was turning brown within months. Murphy's Turf diagnosed poor soil preparation underneath and built a recovery plan. Six months later our lawn is thick, green, and actually growing roots. Life savers.",
      },
      {
        name: 'Kevin O\'Brien',
        neighborhood: 'Murphy Creek',
        rating: 5,
        text: "Living next to a golf course means you want your lawn to look the part. Murphy's Turf keeps our property looking sharp with their seasonal maintenance program. Consistent, reliable, and the results speak for themselves every time I walk outside.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Aurora, CO',
    metaDescription:
      "Aurora's trusted lawn care provider. Murphy's Turf serves Saddle Rock, Tallyn's Reach, Painted Prairie, Murphy Creek, and more with aeration, seeding, fertilization, and seasonal maintenance.",
    climateNote:
      'Aurora sits on the eastern edge of the metro area where wind exposure is higher and precipitation slightly lower. Soils range from heavy clay in western Aurora to sandy clay loam near the plains. Drought-tolerant grass blends and proper irrigation management are essential.',
    serviceAreaDescription:
      "Our Aurora service area spans from the western border with Denver near Cherry Creek State Park all the way east to the E-470 corridor and beyond. We cover the full city from Fitzsimons and the Anschutz campus area in the north to Tallyn's Reach and Southlands in the south.",
  },

  lakewood: {
    city: 'Lakewood',
    slug: 'lakewood',
    state: 'CO',
    phone: '(720) 555-3456',
    email: 'lakewood@murphysturf.com',
    heroSubtitle:
      'Expert lawn care at the edge of the Rockies. Our Lakewood team understands foothill microclimates and delivers tailored solutions for every elevation and exposure.',
    description: [
      "Lakewood's unique position along the foothills west of Denver creates some of the most variable growing conditions along the Front Range. Elevation changes of several hundred feet between neighborhoods mean that one block might face different sun exposure, wind patterns, and frost timing than a property just a mile away. At Murphy's Turf, we thrive on this complexity. Our Lakewood team members live and work in these communities, and they bring intimate knowledge of how Green Mountain's shadow affects afternoon temperatures, how Bear Creek's moisture patterns influence soil composition, and how foothill winds impact watering schedules.",
      "The established neighborhoods of Applewood and Eiber feature mature trees and well-developed landscapes that require a careful approach. Too much fertilizer can burn shallow root systems competing with tree roots, while too little leaves grass thin and vulnerable. Our soil testing and custom treatment plans are designed to find that perfect balance. Belmar and the surrounding area have seen significant redevelopment, blending older residential lots with newer townhome communities, and our team is experienced in managing both legacy lawns and recently installed sod. Up the hill, Morse Park and the Green Mountain neighborhoods present elevation-related challenges including faster soil drying, stronger UV exposure, and earlier fall frost dates.",
      "Lakewood residents also benefit from our proximity to the foothills for pest management. The deer and wildlife that make foothill living special can wreak havoc on lawns, and our integrated approach includes deterrent strategies alongside traditional pest and grub control. We use cool-season grass blends that establish deep roots to withstand the freeze-thaw cycles common at Lakewood's elevation, and our aeration services are timed to coincide with the narrow windows of optimal soil moisture. Whether your property is nestled in the Bear Creek corridor or perched on the Green Mountain ridgeline, Murphy's Turf has a plan that fits.",
    ],
    neighborhoods: [
      'Green Mountain',
      'Belmar',
      'Bear Creek',
      'Applewood',
      'Foothills',
      'Eiber',
      'Morse Park',
    ],
    testimonials: [
      {
        name: 'Catherine Reeves',
        neighborhood: 'Green Mountain',
        rating: 5,
        text: "Up on Green Mountain, our lawn dries out so fast in summer. Murphy's Turf set us up with a deep aeration program and adjusted our watering schedule. The difference has been night and day. Our grass stays green well into September now instead of browning out by July.",
      },
      {
        name: 'Tom Andersen',
        neighborhood: 'Applewood',
        rating: 5,
        text: "We have a big lot in Applewood with mature trees everywhere. Murphy's Turf figured out a fertilization approach that feeds the lawn without overloading the soil around our trees. Smart, knowledgeable team that actually explains the science behind what they do.",
      },
      {
        name: 'Maria Gonzalez',
        neighborhood: 'Bear Creek',
        rating: 5,
        text: "The wildlife near Bear Creek was tearing up our lawn every spring. Murphy's Turf not only repaired the damage with overseeding but set up a year-round maintenance plan that keeps our yard looking great despite the deer and elk that wander through. True professionals.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Lakewood, CO',
    metaDescription:
      "Lakewood lawn care experts. Murphy's Turf provides aeration, seeding, fertilization, and pest control for Green Mountain, Applewood, Bear Creek, Belmar, and all Lakewood neighborhoods.",
    climateNote:
      'Lakewood spans significant elevation changes along the foothills, creating variable microclimates. Western neighborhoods experience earlier frosts, higher winds, and faster soil drying. Clay soils are common throughout, and foothill runoff can create localized drainage challenges.',
    serviceAreaDescription:
      'We serve the entire city of Lakewood from the Applewood and Wheat Ridge border in the north, through the Belmar and Eiber neighborhoods, up to the Green Mountain and Foothills communities in the west, and along the Bear Creek corridor to the south.',
  },

  boulder: {
    city: 'Boulder',
    slug: 'boulder',
    state: 'CO',
    phone: '(303) 555-4567',
    email: 'boulder@murphysturf.com',
    heroSubtitle:
      'Eco-conscious lawn care for a community that values sustainability. Our Boulder team offers organic and low-impact options alongside proven professional treatments.',
    description: [
      "Boulder is a community that values environmental stewardship, and Murphy's Turf is proud to offer lawn care services that align with those values. Our Boulder team provides a full range of organic and low-impact treatment options alongside our conventional programs, giving homeowners the flexibility to choose an approach that fits their environmental philosophy without sacrificing lawn quality. From the iconic Chautauqua neighborhood at the base of the Flatirons to the suburban streets of Gunbarrel and the family-friendly blocks of Martin Acres, we deliver Boulder-caliber results with a sustainability-first mindset.",
      "Boulder's proximity to the mountains creates unique growing conditions. The Flatirons and surrounding peaks channel afternoon winds, create rain shadows, and influence temperature inversions that can vary dramatically from neighborhood to neighborhood. Table Mesa and Chautauqua properties face rocky, thin soils with excellent drainage but poor nutrient retention, while North Boulder and Newlands tend toward the heavy clay soils common across the Front Range. Mapleton Hill's historic properties feature mature landscapes that demand a delicate touch, and University Hill's compact lots near CU require efficient, high-impact treatments that maximize limited space. Our team takes all of these factors into account when building each customer's care plan.",
      "We partner with local soil labs to provide the most detailed nutrient analysis available, and our organic fertilization options use compost-based formulas and natural slow-release nutrients that build long-term soil health rather than creating chemical dependency. For customers who prefer conventional treatments, we use EPA-approved products applied by certified technicians at the minimum effective rates. Our Boulder pest control program emphasizes integrated pest management, using biological controls and targeted applications rather than blanket spraying. And our aeration and overseeding services use grass varieties selected for drought tolerance, because in Boulder, water conservation is not just good practice, it is a community responsibility.",
    ],
    neighborhoods: [
      'Chautauqua',
      'Table Mesa',
      'North Boulder',
      'Gunbarrel',
      'Martin Acres',
      'Newlands',
      'Mapleton Hill',
      'University Hill',
    ],
    testimonials: [
      {
        name: 'Dr. Emily Sato',
        neighborhood: 'Mapleton Hill',
        rating: 5,
        text: "As someone who cares deeply about what goes on our soil, I was thrilled to find Murphy's Turf and their organic program. Our Mapleton Hill lawn has never looked better, and I feel good knowing the products are safe for our kids, pets, and the creek down the street.",
      },
      {
        name: 'Ryan Kowalski',
        neighborhood: 'Gunbarrel',
        rating: 5,
        text: "We switched to Murphy's Turf after our previous company kept pushing products we didn't need. Murphy's did a soil test first, identified exactly what our Gunbarrel lawn was lacking, and built a targeted plan. Better results, less product, lower cost. Smart approach.",
      },
      {
        name: 'Jennifer Walsh',
        neighborhood: 'Table Mesa',
        rating: 5,
        text: "Table Mesa's rocky soil is tough on grass, but Murphy's Turf figured it out. Their aeration and organic fertilization program has transformed our yard from patchy brown to thick green. They even helped us choose water-efficient grass varieties. Outstanding service.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Boulder, CO',
    metaDescription:
      "Boulder's eco-friendly lawn care provider. Murphy's Turf offers organic and conventional lawn care including aeration, seeding, fertilization, and pest control in Chautauqua, Table Mesa, North Boulder, and more.",
    climateNote:
      'Boulder receives more precipitation than Denver but also experiences strong Chinook winds, rapid temperature changes, and intense UV exposure. Mountain proximity creates microclimates, and water conservation is a key community priority. Organic and low-water-use approaches are especially popular here.',
    serviceAreaDescription:
      'Our Boulder service area covers the city of Boulder from Chautauqua and the Flatirons foothills in the west, through the central neighborhoods of Mapleton Hill, Newlands, and University Hill, out to Gunbarrel and the Diagonal Highway corridor in the east.',
  },

  'fort-collins': {
    city: 'Fort Collins',
    slug: 'fort-collins',
    state: 'CO',
    phone: '(970) 555-6789',
    email: 'fortcollins@murphysturf.com',
    heroSubtitle:
      'Northern Colorado lawn care informed by the latest turf science. Our Fort Collins team brings research-backed treatments to your front door.',
    description: [
      "Fort Collins anchors the northern end of Colorado's Front Range, and its lawn care needs differ meaningfully from the communities farther south. Northern Colorado receives more annual precipitation than Denver, the growing season starts a bit later and ends a bit earlier, and the soil profiles shift from the heavy clay of the metro area toward more varied compositions that include loamy soils, especially near the Cache la Poudre River corridor. Murphy's Turf has built our Fort Collins program around these regional distinctions, and our team stays current with the turf management research coming out of Colorado State University, which is right here in our backyard.",
      "The heart of Fort Collins is Old Town, where historic properties feature established landscapes that benefit from our gentle, preservation-focused maintenance approach. Moving south along the Harmony corridor, the newer communities of Rigden Farm, Bucking Horse, and Jessup Farm represent the latest in planned development, with modern irrigation infrastructure and young lawns that need proper establishment care. Fossil Creek properties sit along the natural drainage corridor and sometimes face seasonal moisture challenges that require adjusted treatment timing. Out toward Timnath and the Windsor border, larger lots and agricultural-adjacent properties benefit from our full-service programs that address the unique weed pressures and soil types found at the rural-suburban interface.",
      "Fort Collins homeowners appreciate our science-forward approach. We use soil testing protocols aligned with CSU Extension recommendations, select grass seed varieties from the university's turf trials, and time our applications around the northern Colorado frost calendar rather than generic regional schedules. Our fertilization programs account for Fort Collins' longer spring moisture period, which allows for more effective nutrient uptake in the early season. We also address the snow mold issues that are more common in northern Colorado due to heavier, longer-lasting snow cover. From Old Town charm to new construction precision, Murphy's Turf brings Fort Collins lawns the professional care they deserve.",
    ],
    neighborhoods: [
      'Old Town',
      'Harmony Area',
      'Timnath',
      'Windsor Border',
      'Fossil Creek',
      'Rigden Farm',
      'Bucking Horse',
      'Jessup Farm',
    ],
    testimonials: [
      {
        name: 'Mark Stevens',
        neighborhood: 'Old Town',
        rating: 5,
        text: "Our Old Town property has a 100-year-old lawn and mature trees. Murphy's Turf treated it with the care it deserves. They understood that we needed a gentle approach and their organic fertilization program has brought our grass back to life without harming our heritage trees.",
      },
      {
        name: 'Ashley Nguyen',
        neighborhood: 'Rigden Farm',
        rating: 5,
        text: "We built in Rigden Farm and our lawn was struggling after the first winter. Murphy's Turf diagnosed snow mold and set up a treatment plan that included aeration, overseeding, and their seasonal maintenance program. By mid-summer, you'd never know there was a problem. Excellent work.",
      },
      {
        name: 'Chris Bauer',
        neighborhood: 'Timnath',
        rating: 5,
        text: "Out in Timnath we get every weed the prairie can throw at us. Murphy's Turf set up an integrated weed management plan alongside their fertilization program and the difference is dramatic. Our lawn is thick enough now that weeds can't get a foothold. Worth every penny.",
      },
    ],
    metaTitle: 'Lawn Care & Turf Cleaning in Fort Collins, CO',
    metaDescription:
      "Fort Collins lawn care backed by turf science. Murphy's Turf provides aeration, seeding, fertilization, pest control, and seasonal maintenance in Old Town, Timnath, Rigden Farm, and all of northern Colorado.",
    climateNote:
      'Fort Collins receives more precipitation than Denver, experiences a shorter growing season, and faces snow mold risk from heavier winter snowpack. Soils vary from clay to loam depending on proximity to the Poudre River. CSU turf research informs best practices for the region.',
    serviceAreaDescription:
      'We serve the greater Fort Collins area from Old Town and the CSU campus through the Harmony and Timberline corridors, east to Timnath and the Windsor border, and south to the Fossil Creek and Loveland transition areas.',
  },
};

// ---------------------------------------------------------------------------
// Icon helper
// ---------------------------------------------------------------------------

function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const props = { className: className || 'w-6 h-6' };
  switch (icon) {
    case 'leaf':
      return <Leaf {...props} />;
    case 'wind':
      return <Wind {...props} />;
    case 'sprout':
      return <Sprout {...props} />;
    case 'droplets':
      return <Droplets {...props} />;
    case 'bug':
      return <Bug {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    default:
      return <Leaf {...props} />;
  }
}

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return [
    { slug: 'denver' },
    { slug: 'colorado-springs' },
    { slug: 'aurora' },
    { slug: 'lakewood' },
    { slug: 'boulder' },
    { slug: 'fort-collins' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locationData[slug];
  if (!location) {
    return { title: 'Location Not Found' };
  }
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: 'website',
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-forest via-forest-light to-sage py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-forest-dark/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm font-body mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/locations" className="hover:text-white transition-colors">
              Locations
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{location.city}, {location.state}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-body px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {location.city}, Colorado
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6 leading-tight">
              Turf Cleaning & Lawn Care
              <br />
              <span className="text-cream">
                in {location.city}, CO
              </span>
            </h1>
            <p className="text-lg text-white/80 font-body leading-relaxed max-w-3xl">
              {location.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-forest font-semibold px-8 py-3.5 rounded-lg hover:bg-cream transition-colors font-body shadow-md"
              >
                <Phone className="w-4 h-4" />
                {location.phone}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors font-body shadow-md"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City Description */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-charcoal font-heading mb-8">
                Professional Lawn Care in {location.city}
              </h2>
              <div className="space-y-6">
                {location.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-charcoal-light font-body leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {/* Climate Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-charcoal font-heading mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-sage" />
                  Local Climate Notes
                </h3>
                <p className="text-charcoal-light font-body text-sm leading-relaxed">
                  {location.climateNote}
                </p>
              </div>
              {/* Quick Contact Card */}
              <div className="bg-forest rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold font-heading mb-4">
                  {location.city} Office
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
                    className="flex items-center gap-3 text-white/90 hover:text-sage-light transition-colors font-body text-sm"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {location.phone}
                  </a>
                  <a
                    href={`mailto:${location.email}`}
                    className="flex items-center gap-3 text-white/90 hover:text-sage-light transition-colors font-body text-sm"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {location.email}
                  </a>
                  <div className="flex items-center gap-3 text-white/90 font-body text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    Mon-Fri 7am-6pm, Sat 8am-4pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-heading mb-4">
              Services Available in {location.city}
            </h2>
            <p className="text-lg text-charcoal-light font-body max-w-2xl mx-auto">
              Every service is tailored to {location.city}&apos;s specific soil, climate,
              and elevation conditions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-cream hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-sage/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors">
                  <ServiceIcon icon={service.icon} className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-heading mb-2 group-hover:text-forest transition-colors">
                  {service.name}
                </h3>
                <p className="text-charcoal-light font-body text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sage font-semibold font-body text-sm group-hover:text-forest transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-heading mb-4">
              What {location.city} Customers Say
            </h2>
            <p className="text-lg text-charcoal-light font-body">
              Real reviews from real neighbors in {location.city}.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {location.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-sage fill-sage"
                    />
                  ))}
                </div>
                <p className="text-charcoal-light font-body text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-charcoal font-heading text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-charcoal-light font-body text-xs">
                    {testimonial.neighborhood}, {location.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Details & Neighborhoods */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-charcoal font-heading mb-6">
                Neighborhoods We Serve in {location.city}
              </h2>
              <p className="text-charcoal-light font-body leading-relaxed mb-8">
                {location.serviceAreaDescription}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {location.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-cream rounded-lg px-4 py-3"
                  >
                    <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                    <span className="text-charcoal font-body text-sm font-medium">
                      {neighborhood}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-[350px] sm:h-[400px] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50" />
              <div className="relative flex flex-col items-center gap-4 text-center px-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Map className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-heading">
                  {location.city} Service Area Map
                </h3>
                <p className="text-charcoal-light font-body text-sm max-w-sm">
                  Interactive Google Maps integration showing our complete service
                  coverage across {location.city} and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contact & Quote Form */}
      <section id="quote-form" className="py-16 sm:py-24 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal font-heading mb-6">
                Get a Free Quote in {location.city}
              </h2>
              <p className="text-charcoal-light font-body leading-relaxed mb-8">
                Ready to transform your {location.city} lawn? Fill out the form and our
                local team will get back to you within one business day with a custom quote.
                Or reach out directly:
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-sage/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading text-sm">
                      Call Us
                    </p>
                    <p className="text-sage font-body">{location.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${location.email}`}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-sage/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading text-sm">
                      Email Us
                    </p>
                    <p className="text-sage font-body">{location.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal font-heading text-sm">
                      Business Hours
                    </p>
                    <p className="text-charcoal-light font-body text-sm">
                      Mon-Fri 7:00 AM - 6:00 PM &middot; Sat 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal font-heading mb-6">
                Request Your Free Quote
              </h3>
              <form className="space-y-5">
                {/* Hidden/Readonly location field */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                  >
                    Service Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={`${location.city}, ${location.state}`}
                    readOnly
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg font-body text-charcoal-light cursor-not-allowed"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Murphy"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(720) 555-0000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-charcoal font-body mb-1.5"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your lawn and what you're looking for..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sage hover:bg-sage-dark text-white font-semibold py-3.5 rounded-lg transition-colors font-body shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  Get My Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-charcoal-light font-body text-center">
                  We typically respond within 1 business day. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations CTA */}
      <section className="py-12 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading mb-1">
                We Also Serve Other Front Range Communities
              </h3>
              <p className="text-white/70 font-body text-sm">
                See all locations or contact us if you don&apos;t see your area listed.
              </p>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-white text-forest font-semibold px-6 py-3 rounded-lg hover:bg-cream transition-colors font-body shadow-sm flex-shrink-0"
            >
              View All Locations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
