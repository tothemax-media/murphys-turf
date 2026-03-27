'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultItems: FAQItem[] = [
  {
    question: 'What types of facilities do you clean?',
    answer:
      'We provide professional janitorial and commercial cleaning services for Class A office buildings, corporate campuses, light industrial parks, multi-unit complexes, medical and dental facilities, municipalities, and fitness centers across California.',
  },
  {
    question: 'How often do you provide cleaning services?',
    answer:
      "We offer flexible scheduling including daily, nightly, weekly, and custom maintenance plans. We'll work with you to create a cleaning schedule that fits your facility's needs and budget.",
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      "Yes! We provide free, no-obligation estimates for all our services. Simply fill out our quote form or give us a call, and we'll schedule a convenient time to assess your facility.",
  },
  {
    question: 'What cleaning services do you offer?',
    answer:
      'Our services include janitorial cleaning, day porter services, electrostatic disinfection, floor care (VCT strip and wax, polishing), and commercial carpet cleaning. Each service is tailored to your facility\'s specific requirements.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve communities across California, including Sacramento, Murrieta, Walnut Creek, and surrounding areas.',
  },
  {
    question: 'What if I\'m not satisfied with the service?',
    answer:
      "Your satisfaction is our top priority. If you're not happy with any service, contact us within 48 hours and we'll return to address your concerns at no additional charge.",
  },
];

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const regionId = `faq-region-${index}`;

            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  id={headingId}
                  type="button"
                  className="w-full flex justify-between items-center py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium text-charcoal font-body pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-light shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={regionId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <p className="pb-5 text-charcoal-light font-body">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
