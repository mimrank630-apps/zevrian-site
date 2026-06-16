import type { Category, CategorySlug, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    tagline: "Culinary tools, refined.",
    description:
      "Precision culinary tools and modern dining essentials engineered for everyday use.",
  },
  {
    slug: "home-organization",
    name: "Home Organization",
    tagline: "Order, beautifully kept.",
    description:
      "Minimalist storage and workspace solutions that bring calm and clarity to any space.",
  },
  {
    slug: "office-products",
    name: "Office Products",
    tagline: "Focus, by design.",
    description:
      "Premium workspace essentials designed for productivity and modern work environments.",
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
