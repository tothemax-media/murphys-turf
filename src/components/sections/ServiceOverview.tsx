import { Building2, UserCheck, Zap, Layers, Sparkles } from 'lucide-react';
import ServiceCard from '@/components/cards/ServiceCard';
import type { LucideIcon } from 'lucide-react';

interface ServiceData {
  icon: LucideIcon;
  name: string;
  slug: string;
  description: string;
}

const services: ServiceData[] = [
  {
    icon: Building2,
    name: 'Janitorial Cleaning',
    slug: 'janitorial-cleaning',
    description:
      'Comprehensive daily and nightly janitorial services for offices, medical facilities, and commercial buildings. Reliable, thorough, and consistent.',
  },
  {
    icon: UserCheck,
    name: 'Day Porter',
    slug: 'day-porter',
    description:
      'On-site daytime cleaning and maintenance to keep your facility looking its best throughout the business day.',
  },
  {
    icon: Zap,
    name: 'Electrostatic Disinfection',
    slug: 'electrostatic-disinfection',
    description:
      'Advanced electrostatic spraying technology for thorough disinfection of high-touch surfaces and hard-to-reach areas.',
  },
  {
    icon: Layers,
    name: 'Floor Care',
    slug: 'floor-care',
    description:
      'Professional floor care including VCT strip and wax, polishing, and maintenance to keep your floors looking pristine.',
  },
  {
    icon: Sparkles,
    name: 'Office Cleaning',
    slug: 'office-cleaning',
    description:
      'Comprehensive office cleaning services to keep workspaces, desks, and common areas spotless and professionally maintained.',
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-charcoal">
          Our Commercial Cleaning Services
        </h2>
        <p className="text-center text-charcoal-light mt-4 font-body">
          Comprehensive janitorial and facility maintenance solutions to keep your
          commercial space clean, healthy, and professional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              name={service.name}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
