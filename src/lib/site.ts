/**
 * Central site configuration for Zevrian Global LLC.
 * Single source of truth for brand, contact, and SEO defaults.
 */

export const siteConfig = {
  name: "Zevrian",
  legalName: "Zevrian Global LLC",
  tagline: "Considered essentials for modern living.",
  description:
    "Zevrian is an Amazon FBA brand offering premium essentials for the kitchen, home, and travel — available through our Zevrian Direct storefront on Amazon.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zevrian.com",
  email: "info@zevrian.com",
  amazonStoreName: "Zevrian Direct",
  amazonStoreUrl: "https://www.amazon.com/stores/zevrian",
  // ⚠️ TODO [PRE-LAUNCH]: Replace the placeholder WhatsApp number below with the
  // real Zevrian business WhatsApp number before going live. Current value is
  // +1 (555) 555-5555 which is NOT a valid number.
  whatsappNumber: "15555555555",
  whatsappUrl:
    "https://wa.me/15555555555?text=Hi%20Zevrian%2C%20I%20have%20a%20question%20about%20your%20products.",
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
