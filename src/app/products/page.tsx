import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Product categories sold by Zevrian Global LLC on Amazon: Sports & Outdoors, Arts & Crafts, Home & Kitchen, Home Improvement, Office Products and Pet Supplies, sourced from brands and authorized distributors.",
  keywords: [
    "Zevrian products",
    "sports and outdoors",
    "arts and crafts",
    "office products",
    "pet supplies",
    "Amazon FBA wholesale",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Zevrian",
    description:
      "The product categories Zevrian Global LLC sells on Amazon under Zevrian Direct.",
    url: `${siteConfig.url}/products`,
    type: "website",
  },
};

export default function ProductsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />

      {/* Header */}
      <section className="border-b border-charcoal-100 bg-charcoal-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{siteConfig.amazonStoreName}</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl">
              Our Categories
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              We sell authentic products from established brands across six
              categories, sourced directly from brands and their authorized
              distributors.
            </p>
          </div>
        </Container>
      </section>

      {/* Category cards */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} id={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
