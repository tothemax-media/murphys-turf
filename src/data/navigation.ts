import type { NavItem, NavGroup } from '../types';

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pet Hair & Debris Removal", href: "/services/pet-hair-debris" },
      { label: "Blooming & De-Compacting", href: "/services/blooming-decompacting" },
      { label: "Disinfect & Deodorize", href: "/services/disinfect-deodorize" },
      { label: "Poop Scooping & Removal", href: "/services/poop-scooping" },
      { label: "Powered By OxyTurf", href: "/services/oxyturf" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Huntington Beach / LA Area", href: "/locations/huntington-beach" },
      { label: "Murrieta / Inland Empire", href: "/locations/murrieta" },
      { label: "Martinez / Bay Area", href: "/locations/martinez" },
      { label: "Greater Sacramento", href: "/locations/sacramento" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Pet Hair & Debris Removal", href: "/services/pet-hair-debris" },
      { label: "Blooming & De-Compacting", href: "/services/blooming-decompacting" },
      { label: "Disinfect & Deodorize", href: "/services/disinfect-deodorize" },
      { label: "Poop Scooping & Removal", href: "/services/poop-scooping" },
      { label: "Powered By OxyTurf", href: "/services/oxyturf" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Huntington Beach / LA Area", href: "/locations/huntington-beach" },
      { label: "Murrieta / Inland Empire", href: "/locations/murrieta" },
      { label: "Martinez / Bay Area", href: "/locations/martinez" },
      { label: "Greater Sacramento", href: "/locations/sacramento" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const ctaText = "Get Free Quote";
export const ctaHref = "/contact";
