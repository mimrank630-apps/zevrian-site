import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { TrustBar } from "@/components/TrustBar";
import { BrandPhilosophyStrip } from "@/components/sections/BrandPhilosophyStrip";
import { AmazonTrustSection } from "@/components/sections/AmazonTrustSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { FaqSection } from "@/components/sections/FaqSection";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const trustPoints = [
  {
    title: "Authentic only",
    detail:
      "We buy directly from brands and their authorized distributors — never from unverified sources.",
  },
  {
    title: "Brand-friendly",
    detail:
      "We respect MAP and pricing policies, keep listings accurate, and protect each brand's presentation.",
  },
  {
    title: "Backed on Amazon",
    detail:
      "Our Zevrian Direct storefront uses Amazon fulfillment, buyer protection and returns.",
  },
  {
    title: "Independently owned",
    detail:
      "A Wyoming-registered company with a focused, carefully selected catalog.",
  },
];

const facts = [
  { label: "Legal entity", value: `${siteConfig.legalName}` },
  { label: "Registered", value: "Wyoming, USA" },
  { label: "Sales channel", value: `Amazon FBA — ${siteConfig.amazonStoreName}` },
  { label: "Sourcing", value: "Brands and authorized distributors only" },
  { label: "Contact", value: `${siteConfig.email} · ${siteConfig.phone}` },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,164,63,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]" />
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow text-gold-light">Amazon FBA Wholesale Retailer</span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Authentic brands. Delivered by Amazon.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-charcoal-300">
              {siteConfig.legalName} is a US online retailer of genuine branded
              products, sold to customers across the United States through our{" "}
              {siteConfig.amazonStoreName} storefront on Amazon.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn btn-gold">
                Our categories
              </Link>
              <Link
                href="/contact"
                className="btn !border-charcoal-600 !bg-transparent !text-white hover:!border-gold"
              >
                Brand partnerships
              </Link>
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
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                A reseller brands can trust.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-500">
                <p>
                  {siteConfig.legalName} buys authentic products directly from
                  brands and their authorized distributors and sells them to
                  US customers on Amazon. Every item is new, genuine and
                  stored and shipped by Amazon&rsquo;s fulfillment network.
                </p>
                <p>
                  For brands, we are a careful partner: we follow MAP and
                  pricing policies, keep listings accurate, and keep stock
                  levels steady so customers can always find your products.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900 transition-colors hover:text-gold-600"
              >
                About the company
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="rounded-3xl border border-charcoal-100 bg-charcoal-50 p-8 sm:p-10">
              <span className="eyebrow">Company at a glance</span>
              <dl className="mt-6 divide-y divide-charcoal-200/70">
                {facts.map((fact) => (
                  <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-luxe text-gold-600">{fact.label}</dt>
                    <dd className="text-sm font-medium text-charcoal-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-display text-lg text-charcoal-900">
                &ldquo;Genuine products. Honest selling.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="What we sell"
            description="A focused catalog of authentic products from established brands."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Zevrian"
            title="How we work"
            description="Simple standards for customers and brand partners alike."
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

      {/* FAQ */}
      <FaqSection />

      {/* Newsletter */}
      <section className="border-t border-charcoal-100 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Stay in the loop"
              title="Stay updated."
              description="Want to know when new products arrive? Email us and we will keep you posted."
            />
            <div className="mt-8 flex justify-center">
              <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Product updates")}`} className="btn btn-primary">
                Email us for updates
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
