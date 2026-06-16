import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Zevrian Global LLC is preparing to launch premium kitchen, home, and office essentials through Amazon FBA under the Zevrian Direct storefront.",
  keywords: [
    "Zevrian products",
    "premium kitchen tools",
    "home organization",
    "office products",
    "Amazon FBA brand",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Zevrian",
    description:
      "Zevrian's planned product categories for our upcoming Amazon launch under Zevrian Direct.",
    url: `${siteConfig.url}/products`,
    type: "website",
  },
};

const categoryAccent: Record<string, string> = {
  "kitchen-dining": "from-amber-100 via-stone-100 to-stone-300",
  "home-organization": "from-stone-100 via-neutral-100 to-zinc-300",
  "office-products": "from-sky-50 via-slate-100 to-zinc-300",
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
              Product Preview
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              The products displayed on this website represent Zevrian&apos;s
              planned product categories. Final product selection and
              specifications will be confirmed at launch.
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
                className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-charcoal-100 p-7"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    categoryAccent[category.slug] ?? "from-stone-100 to-stone-300"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/5 to-transparent" />

                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-light">
                    Launching Q3 2026
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
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
