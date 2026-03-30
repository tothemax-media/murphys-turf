'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/our-work/rangel-02-6941b0a16edec52d705e6e30.png', alt: 'Rangel crew member mopping commercial floors' },
  { src: '/images/gallery/our-work/rangel-13-6941b0a1db710a50675087a5.png', alt: 'Rangel crew member cleaning restroom facilities' },
  { src: '/images/gallery/our-work/rangel-17-6941b0a17109a80798658d66.png', alt: 'Freshly polished warehouse floor' },
  { src: '/images/gallery/our-work/rangel-21-6941b0a10041dc7c1a15ddbd.png', alt: 'Rangel crew member vacuuming office carpet' },
  { src: '/images/gallery/our-work/rangel-11-6941b0a175b6078f79318d3d.png', alt: 'Detailed surface cleaning by Rangel crew' },
  { src: '/images/gallery/our-work/rangel-12-6941b0a1db710a16915087a6.png', alt: 'Commercial lobby floor cleaning' },
  { src: '/images/gallery/our-work/rangel-09-6941b0a1dd15223020c724e4.png', alt: 'Rangel crew member cleaning glass surfaces' },
  { src: '/images/gallery/our-work/rangel-16-6941b0a16edec513c25e6e41.png', alt: 'Team members sanitizing office surfaces' },
  { src: '/images/gallery/our-work/rangel-10-6941b0a17109a8dad2658d64.png', alt: 'Clean commercial office cubicle space' },
  { src: '/images/gallery/our-work/rangel-15-6941b0a16edec523065e6e2e.png', alt: 'Rangel crew handling trash and recycling' },
  { src: '/images/gallery/our-work/rangel-22-6941b0a1db710a7d4d5087a4.png', alt: 'Break room table cleaning by Rangel crew' },
  { src: '/images/gallery/our-work/rangel-24-6941b0a1ca729885d4435373.png', alt: 'Rangel crew member dusting ceiling fixtures' },
];

export default function OurWorkGallery() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body font-semibold text-sage text-sm uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
            Our Work
          </h2>
          <p className="mt-4 font-body text-charcoal-light leading-relaxed">
            See our professional crews in action across California facilities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
