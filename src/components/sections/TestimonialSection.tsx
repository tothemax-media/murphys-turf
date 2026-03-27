import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/cards/TestimonialCard';

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Rangel Janitorial keeps our corporate offices immaculate. The team is professional, punctual, and the results consistently exceed our expectations. Highly recommend.",
    name: 'Sarah Johnson',
    location: 'Murrieta, CA',
  },
  {
    rating: 5,
    quote:
      "Best commercial cleaning service in California. They've been maintaining our medical facility for 3 years and it's never been cleaner. Their electrostatic disinfection is a game-changer.",
    name: 'Mike Rodriguez',
    location: 'Sacramento, CA',
  },
  {
    rating: 5,
    quote:
      "Incredible attention to detail. Our tenants constantly compliment the building's cleanliness. The day porter service keeps everything pristine during business hours.",
    name: 'Jennifer Walsh',
    location: 'Walnut Creek, CA',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-charcoal">
          What Our Clients Say
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4">
          <StarRating rating={4.9} size="lg" />
          <p className="text-charcoal-light font-body text-sm">
            4.9 out of 5 based on 200+ reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              rating={testimonial.rating}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
