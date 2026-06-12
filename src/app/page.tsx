import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { TrustBar } from "@/components/TrustBar";
import { BrandPhilosophyStrip } from "@/components/sections/BrandPhilosophyStrip";
import { AmazonTrustSection } from "@/components/sections/AmazonTrustSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { categories, getFeaturedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const trustPoints = [
  {
    title: "Design-led",
    detail:
      "Every product begins with a question: how can this be more considered, more useful, more beautiful?",
  },
  {
    title: "Premium materials",
    detail:
      "We specify the materials we'd want in our own homes — and hold our manufacturing partners to them.",
  },
  {
    title: "Backed on Amazon",
    detail:
      "Shop with confidence through our Zevrian Direct storefront, with Amazon's fulfillment and returns.",
  },
  {
    title: "Independently owned",
    detail:
      "A Wyoming-registered company building a focused catalog of essentials — not a sprawling marketplace.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts(6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,164,63,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow text-gold-light">Private label · Amazon FBA</span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Essentials, designed for the life you deserve.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-charcoal-300">
              Precision-engineered kitchen, home, and travel products that
              elevate every moment — designed with intention by {siteConfig.name}{" "}
              and delivered worldwide through our {siteConfig.amazonStoreName}{" "}
              storefront on Amazon.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn btn-gold">
                Explore the catalog
              </Link>
              <a
                href={siteConfig.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !border-charcoal-700 !bg-transparent !text-white hover:!bg-white hover:!text-charcoal-900"
              >
                Explore on Amazon
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Brand philosophy strip */}
      <BrandPhilosophyStrip />

      {/* Brand story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="eyebrow">Our vision</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                Modern living, elevated by design.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-500">
                <p>
                  {siteConfig.legalName} is a modern lifestyle brand built on a
                  simple belief: the objects we use every day should be a
                  pleasure to own. We obsess over the details others overlook —
                  the weight of a handle, the close of a lid, the grain of a
                  finish.
                </p>
                <p>
                  As a focused private-label company, we develop a tight,
                  intentional catalog rather than chasing trends. Each product
                  is engineered with premium materials and brought to customers
                  worldwide through Amazon fulfillment.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900 transition-colors hover:text-gold-600"
              >
                Read our story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-40 w-40 opacity-10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="12" y="1" width="15.5" height="15.5" rx="2" transform="rotate(45 12 1)" stroke="#111111" strokeWidth="1" />
                  <path d="M8 8.5h8L8 15.5h8" stroke="#111111" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
                <p className="font-display text-lg text-charcoal-900">
                  &ldquo;Build fewer things, better.&rdquo;
                </p>
                <p className="mt-1 text-sm text-charcoal-500">The Zevrian principle</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Collections"
            title="Five collections, one standard"
            description="A curated catalog organized around the spaces and moments where good design matters most."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured"
              title="Pieces worth the counter space"
              description="A selection of favorites from across the Zevrian catalog."
            />
            <Link
              href="/products"
              className="btn btn-secondary shrink-0 !py-3 text-xs"
            >
              View all products
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Zevrian"
            title="A brand built on restraint"
            description="We'd rather make a handful of products exceptionally well than a thousand that are merely fine."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal-100 bg-charcoal-100 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <div key={i} className="bg-white p-7">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-charcoal-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Amazon trust explainer */}
      <AmazonTrustSection />

      {/* Social proof */}
      <SocialProof />

      {/* Newsletter */}
      <section className="border-t border-charcoal-100 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Stay in the loop"
              title="New arrivals, first."
              description="Be the first to know about launches, restocks, and curated lifestyle notes from the Zevrian team."
            />
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-xs text-charcoal-400">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
