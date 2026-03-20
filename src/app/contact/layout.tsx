import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Murphy's Turf for a free lawn care quote. Call, email, or fill out our contact form. Serving Denver, Colorado Springs, Aurora, and the Front Range.",
  openGraph: {
    title: "Contact Us | Murphy's Turf",
    description:
      "Reach out to Murphy's Turf for professional lawn care services across Colorado's Front Range. Free quotes and estimates available.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
