import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilter } from "@/components/ProductFilter";
import {
  categories,
  getCategory,
  getProductsByCategory,
  products,
} from "@/lib/products";
import type { CategorySlug } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full Zevrian catalog — premium kitchen, home organization, and travel essentials, available on Amazon under Zevrian Direct.",
  alternates: { canonical: "/products" },
};

// This page reads searchParams (category filter), making it dynamic.
// @cloudflare/next-on-pages requires dynamic routes to run on the edge.
export const runtime = "edge";

const validSlugs = categories.map((c) => c.slug);

function isCategorySlug(value: string | undefined): value is CategorySlug {
  return !!value && validSlugs.includes(value as CategorySlug);
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active: CategorySlug | "all" = isCategorySlug(category) ? category : "all";

  const activeCategory = active !== "all" ? getCategory(active) : undefined;
  const list =
    active === "all" ? products : getProductsByCategory(active);

  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal-100 bg-charcoal-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{siteConfig.amazonStoreName}</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl">
              {activeCategory ? activeCategory.name : "The Zevrian Catalog"}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              {activeCategory
                ? activeCategory.description
                : "Premium private-label essentials across kitchen, home, and travel — each one engineered to be a pleasure to own."}
            </p>
          </div>
        </Container>
      </section>

      {/* Catalog */}
      <section className="py-12 sm:py-16">
        <Container>
          <ProductFilter active={active} />

          <p className="mt-8 text-center text-sm text-charcoal-400">
            Showing {list.length} {list.length === 1 ? "product" : "products"}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
