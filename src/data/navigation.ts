import type { NavItem, NavGroup } from '../types';

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/locations" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: NavGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Janitorial Cleaning", href: "/services/janitorial-cleaning" },
      { label: "Day Porter", href: "/services/day-porter" },
      { label: "Electrostatic Disinfection", href: "/services/electrostatic-disinfection" },
      { label: "Floor Care", href: "/services/floor-care" },
      { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Greater Sacramento", href: "/locations/sacramento" },
      { label: "Murrieta / Inland Empire", href: "/locations/murrieta" },
      { label: "Walnut Creek / East Bay", href: "/locations/walnut-creek" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/locations" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const ctaText = "Get a Quote";
export const ctaHref = "/locations";
