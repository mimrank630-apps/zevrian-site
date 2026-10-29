import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zevrian Global LLC is a Wyoming-registered online retailer selling authentic branded products to US customers through Amazon, under the Zevrian Direct storefront.",
  keywords: [
    "Zevrian about",
    "brand story",
    "Zevrian Global LLC",
    "Amazon FBA wholesale brand",
    "Wyoming LLC",
    "Amazon FBA brand",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Zevrian",
    description:
      "Zevrian Global LLC is a Wyoming-registered online retailer selling authentic branded products to US customers through Amazon, under the Zevrian Direct storefront.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const values = [
  {
    title: "Authenticity",
    detail:
      "We buy only from brands and authorized distributors. Every product we sell is genuine.",
  },
  {
    title: "Brand respect",
    detail:
      "We follow MAP and pricing policies and keep every listing accurate and well presented.",
  },
  {
    title: "Honest value",
    detail:
      "Fair prices, accurate descriptions and no fake reviews or false urgency.",
  },
  {
    title: "Customer obsession",
    detail:
      "Every decision starts with the person who'll live with the product every day.",
  },
];

const roadmap = [
  {
    phase: "Phase 01",
    title: "Amazon FBA wholesale",
    detail:
      "Build a focused catalog of authentic branded products through our Zevrian Direct storefront, using Amazon's fulfillment and customer trust.",
    status: "Current",
  },
  {
    phase: "Phase 02",
    title: "Deeper brand partnerships",
    detail:
      "Grow long-term relationships with each brand we carry, adding more of their range and keeping it reliably in stock.",
    status: "Planned",
  },
  {
    phase: "Phase 03",
    title: "More categories",
    detail:
      "Expand into new categories and marketplaces while keeping the same standards for authenticity and service.",
    status: "Ahead",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-light">About {siteConfig.name}</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Authentic brands, sold with care.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              {siteConfig.legalName} is an Amazon FBA wholesale retailer. We buy
              authentic products from established brands and their authorized
              distributors and sell them to US customers through our{" "}
              {siteConfig.amazonStoreName} storefront on Amazon.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="card p-9">
              <span className="eyebrow">Mission</span>
              <p className="mt-4 text-xl font-medium leading-relaxed text-charcoal-800">
                To give US customers easy access to genuine branded products,
                delivered fast through Amazon.
              </p>
            </div>
            <div className="card p-9">
              <span className="eyebrow">Vision</span>
              <p className="mt-4 text-xl font-medium leading-relaxed text-charcoal-800">
                To be the reseller brands choose first: reliable, careful with
                their name, and easy to work with.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The roadmap"
            title="Where we are going"
            description="A steady path built on trust with customers and brands."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {roadmap.map((step) => (
              <div key={step.phase} className="relative card flex flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{step.phase}</span>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-600">
                    {step.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Core values" title="What guides every decision" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal-100 bg-charcoal-100 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-7">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-charcoal-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {value.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The Founder" />
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="card p-9">
              <p className="text-base leading-relaxed text-charcoal-600">
                Zevrian Global LLC was founded and is run by Mohammad Imran Khan,
                who manages sourcing, brand relationships and operations directly.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-600">
                The company is incorporated in Wyoming, USA, as a registered Limited
                Liability Company focused on Amazon FBA wholesale for the U.S.
                market.
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-luxe text-gold-600">
                    Wyoming LLC Filing ID
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-charcoal-900">
                    2026-001998631
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-luxe text-gold-600">
                    Registered
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-charcoal-900">
                    June 5, 2026
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal-100 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal-900 sm:text-3xl">
              See what we sell.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn btn-primary">
                Our categories
              </Link>
              <Link href="/brand" className="btn btn-secondary">
                For brands &amp; suppliers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
