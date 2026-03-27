import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Home, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 py-16 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center">
            <Building2 className="w-10 h-10 text-forest" />
          </div>
        </div>

        {/* 404 number */}
        <h1 className="font-heading text-[8rem] sm:text-[10rem] font-black leading-none text-forest tracking-tighter select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-charcoal">
          Looks Like This Page Got Swept Away
        </h2>

        {/* Subtext */}
        <p className="mt-4 font-body text-lg text-charcoal-light leading-relaxed">
          The page you&apos;re looking for seems to have disappeared.
          Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sage hover:bg-sage-dark text-white font-heading font-semibold rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-forest text-forest hover:bg-forest hover:text-white font-heading font-semibold rounded-full transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
