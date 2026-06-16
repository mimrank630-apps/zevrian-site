import type { Product } from "@/lib/types";
import { siteConfig } from "@/lib/site";

const BASE = siteConfig.url.replace(/\/$/, "");

export function abs(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Organization schema — issued once, sitewide, from the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: BASE,
    email: siteConfig.email,
    logo: abs("/favicon.svg"),
    image: abs(siteConfig.ogImage),
    description: siteConfig.description,
    foundingLocation: siteConfig.address.stateLong,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [siteConfig.amazonStoreUrl],
  };
}

/** WebSite schema — enables sitelinks/site-name in search. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: siteConfig.name,
    url: BASE,
    description: siteConfig.description,
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Product schema WITHOUT reviews/ratings (none exist yet — honesty + no markup penalty). */
export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.slug,
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url: product.amazonUrl,
      seller: { "@type": "Organization", name: siteConfig.amazonStoreName },
    },
  };
}

export function itemListJsonLd(items: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: abs(`/products/${p.slug}`),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Render helper for inline JSON-LD scripts. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
