import type { Category, CategorySlug, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "sports-outdoors",
    name: "Sports & Outdoors",
    tagline: "Gear from established brands.",
    description:
      "Swim, fitness, fishing and outdoor gear from established brands.",
  },
  {
    slug: "arts-crafts",
    name: "Arts & Crafts",
    tagline: "Supplies makers rely on.",
    description: "Jewelry-making, beading and craft supplies.",
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    tagline: "Everyday essentials.",
    description: "Everyday home and kitchen essentials.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    tagline: "Tools for the job.",
    description: "Tools, hardware and household fixes.",
  },
  {
    slug: "office-products",
    name: "Office Products",
    tagline: "Write, plan, organize.",
    description: "Writing instruments, desk and office supplies.",
  },
  {
    slug: "pet-supplies",
    name: "Pet Supplies",
    tagline: "For every companion.",
    description: "Feeding accessories, toys and care products for pets.",
  },
];

export const products: Product[] = [];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
