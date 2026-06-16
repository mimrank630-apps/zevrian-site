import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { AmazonButton } from "@/components/ui/AmazonButton";
import { BuyDirectButton } from "@/components/BuyDirectButton";
import { ProductCard } from "@/components/ProductCard";
import {
  formatPrice,
  getCategory,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript, productJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Fully static catalog: only the 18 known slugs are valid; unknown slugs 404
// at the static layer (no on-demand server rendering needed on the edge).
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${siteConfig.name}`,
      description: product.shortDescription,
      type: "website",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product, 3);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    ...(category
      ? [{ name: category.name, path: `/products?category=${category.slug}` }]
      : []),
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(productJsonLd(product))}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />

      {/* Breadcrumb */}
      <Container className="pt-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-charcoal-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-charcoal-900">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/products" className="hover:text-charcoal-900">Products</Link>
          {category && (
            <>
              <span aria-hidden="true">/</span>
              <Link
                href={`/products?category=${category.slug}`}
                className="hover:text-charcoal-900"
              >
                {category.name}
              </Link>
            </>
          )}
          <span aria-hidden="true">/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </Container>

      {/* Detail */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div>
              <ProductImage product={product} className="aspect-square rounded-3xl" />
              <div className="mt-4 grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} ${
                      i === 0 ? "ring-2 ring-gold" : "opacity-60"
                    }`}
                  >
                    <span className="font-display text-lg text-charcoal-900/15">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:py-2">
              {category && (
                <Link
                  href={`/products?category=${category.slug}`}
                  className="eyebrow hover:text-gold-600"
                >
                  {category.name}
                </Link>
              )}
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-semibold text-charcoal-900">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-lg text-charcoal-300 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>

              <p className="mt-5 text-base leading-relaxed text-charcoal-500">
                {product.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 space-y-3">
                <AmazonButton href={product.amazonUrl} fullWidth tone="gold" />
                <BuyDirectButton product={product} />
                <p className="text-center text-xs text-charcoal-400">
                  Purchases will be fulfilled by Amazon via{" "}
                  {siteConfig.amazonStoreName}, launching Q3 2026.
                </p>
              </div>

              {/* Features */}
              <div className="mt-10 border-t border-charcoal-100 pt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-charcoal-900">
                  Key features
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal-600">
                      <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" stroke="#C6A43F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16 sm:mt-20">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-charcoal-900 sm:text-3xl">
              Why you&rsquo;ll love it
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="card p-7">
                  <span className="font-display text-3xl text-gold">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                    {benefit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-charcoal-100 bg-charcoal-50 py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal-900 sm:text-3xl">
                More from {category?.name}
              </h2>
              <Link href="/products" className="btn btn-secondary !py-3 text-xs">
                View all
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
