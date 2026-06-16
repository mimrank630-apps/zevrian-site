/**
 * Central site configuration for Zevrian Global LLC.
 * Single source of truth for brand, contact, and SEO defaults.
 */

export const siteConfig = {
  name: "Zevrian",
  legalName: "Zevrian Global LLC",
  tagline: "Considered essentials for modern living.",
  description:
    "Zevrian Global LLC is a Wyoming-registered e-commerce company offering premium kitchen, home, and travel essentials through Amazon FBA under the Zevrian Direct storefront.",
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
  filingId: "2026-001998631",
  incorporatedDate: "June 5, 2026",
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
