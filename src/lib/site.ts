/**
 * Central site configuration for Zevrian Global LLC.
 * Single source of truth for brand, contact, and SEO defaults.
 */

export const siteConfig = {
  name: "Zevrian",
  legalName: "Zevrian Global LLC",
  tagline: "Considered essentials for modern living.",
  description:
    "Zevrian designs premium private-label essentials for the kitchen, home, and travel. Discover thoughtfully engineered products, available on Amazon under Zevrian Direct.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zevrian.com",
  email: "info@zevrian.com",
  amazonStoreName: "Zevrian Direct",
  amazonStoreUrl: "https://www.amazon.com/stores/zevrian",
  address: {
    line1: "30 N Gould St Ste N",
    city: "Sheridan",
    state: "WY",
    stateLong: "Wyoming",
    zip: "82801",
    country: "USA",
  },
  ogImage: "/og-image.svg",
} as const;

export const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Brand", href: "/brand" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Kitchen & Dining", href: "/products?category=kitchen-dining" },
    { label: "Home Organization", href: "/products?category=home-organization" },
    { label: "Travel & Outdoor", href: "/products?category=travel-outdoor" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Brand", href: "/brand" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;
