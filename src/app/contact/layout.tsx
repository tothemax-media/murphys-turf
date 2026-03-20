import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Murphy's Turf for a free artificial turf cleaning quote. Call, email, or fill out our contact form. Serving Huntington Beach, Murrieta, Martinez, and Sacramento.",
  openGraph: {
    title: "Contact Us | Murphy's Turf",
    description:
      "Reach out to Murphy's Turf for professional artificial turf cleaning services across California. Free quotes and estimates available.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
