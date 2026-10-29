import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Zevrian Global LLC is a Wyoming-registered online retailer selling authentic branded products to US customers through Amazon, under the Zevrian Direct storefront.",
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

const categoryAccent: Record<string, string> = {
  "sports-outdoors": "from-sky-100 via-slate-100 to-zinc-300",
  "arts-crafts": "from-amber-100 via-stone-100 to-stone-300",
  "home-kitchen": "from-stone-100 via-neutral-100 to-zinc-300",
  "home-improvement": "from-zinc-100 via-stone-200 to-zinc-400",
  "office-products": "from-sky-50 via-slate-100 to-zinc-300",
  "pet-supplies": "from-emerald-50 via-stone-100 to-stone-300",
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
              <div
                key={category.slug}
                id={category.slug}
                className="relative flex scroll-mt-28 aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-charcoal-100 p-7"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    categoryAccent[category.slug] ?? "from-stone-100 to-stone-300"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/5 to-transparent" />

                <div className="relative">
                  <h3 className=" text-2xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
