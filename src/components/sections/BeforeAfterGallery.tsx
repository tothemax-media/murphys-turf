import Image from 'next/image';

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center">
          See the Difference
        </h2>
        <p className="text-charcoal-light text-center mt-4 font-body">
          Real results from real facilities
        </p>

        <div className="mt-12 flex flex-col items-center">
          <Image
            src="/images/rangel/summit-holladay-partners-llc-i_k.jpg"
            alt="Professional commercial cleaning by Rangel Janitorial"
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <p className="text-sm text-charcoal-light mt-4 text-center font-body">
            Professional commercial cleaning — 30+ years of experience delivering spotless facilities you can count on.
          </p>
        </div>
      </div>
    </section>
  );
}
