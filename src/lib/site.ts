/**
 * Central site configuration for Zevrian Global LLC.
 * Single source of truth for brand, contact, and SEO defaults.
 */

export const siteConfig = {
  name: "Zevrian",
  legalName: "Zevrian Global LLC",
  tagline: "Authentic brands, delivered by Amazon.",
  description:
    "Zevrian Global LLC is a Wyoming-registered online retailer selling authentic branded products to US customers through Amazon, under the Zevrian Direct storefront.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zevrian.com",
  email: "info@zevrian.com",
  phone: "+1 307 443 6480",
  phoneHref: "+13074436480",
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
  ogImage: "/og-image.png",
} as const;

export const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "For Brands", href: "/brand" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  shop: [
    { label: "All Categories", href: "/products" },
    { label: "Sports & Outdoors", href: "/products#sports-outdoors" },
    { label: "Arts & Crafts", href: "/products#arts-crafts" },
    { label: "Home & Kitchen", href: "/products#home-kitchen" },
    { label: "Home Improvement", href: "/products#home-improvement" },
    { label: "Office Products", href: "/products#office-products" },
    { label: "Pet Supplies", href: "/products#pet-supplies" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "For Brands", href: "/brand" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;
