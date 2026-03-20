import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const openSans = Open_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Murphy's Turf | Professional Lawn Care & Turf Cleaning in Colorado",
    template: "%s | Murphy's Turf",
  },
  description:
    "Colorado's premier turf cleaning and lawn care company. Professional aeration, seeding, fertilization, pest control, and seasonal maintenance across the Front Range. Get a free quote today!",
  keywords: [
    'lawn care Colorado',
    'turf cleaning Denver',
    'aeration Colorado Springs',
    'lawn maintenance Aurora',
    'fertilization Boulder',
    'pest control Fort Collins',
    'seasonal lawn care Lakewood',
  ],
  openGraph: {
    title: "Murphy's Turf | Professional Lawn Care & Turf Cleaning in Colorado",
    description:
      "Colorado's premier turf cleaning and lawn care company serving the Front Range since 2018.",
    type: 'website',
    locale: 'en_US',
    siteName: "Murphy's Turf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
