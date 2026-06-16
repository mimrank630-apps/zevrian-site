export type CategorySlug =
  | "kitchen-dining"
  | "home-organization"
  | "office-products";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  /** Optional pre-discount price for showing savings. */
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: { title: string; detail: string }[];
  amazonUrl: string;
  /** Tailwind gradient classes used as a premium image placeholder. */
  accent: string;
  badge?: string;
}
