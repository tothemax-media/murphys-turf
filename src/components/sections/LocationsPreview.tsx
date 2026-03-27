import { MapPin } from 'lucide-react';
import LocationCard from '@/components/cards/LocationCard';

const locations = [
  {
    city: 'Sacramento',
    description:
      'Professional commercial cleaning services for Sacramento and surrounding communities.',
    slug: 'sacramento',
  },
  {
    city: 'Murrieta / Inland Empire',
    description:
      'Our home base — expert janitorial services and facility maintenance for the Inland Empire region.',
    slug: 'murrieta',
  },
  {
    city: 'Walnut Creek / East Bay',
    description:
      'Trusted commercial cleaning for Walnut Creek, Contra Costa County, and East Bay businesses.',
    slug: 'walnut-creek',
  },
];

export default function LocationsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center">
          Serving California Businesses
        </h2>
        <p className="text-charcoal-light text-center mt-4 font-body">
          Professional commercial cleaning in your area
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((location) => (
              <LocationCard
                key={location.slug}
                city={location.city}
                description={location.description}
                slug={location.slug}
              />
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="rounded-xl bg-sage/10 border-2 border-dashed border-sage/30 min-h-[400px] flex flex-col items-center justify-center gap-3">
            <MapPin className="w-10 h-10 text-sage" />
            <p className="text-sage font-semibold font-body">
              Interactive Map Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
