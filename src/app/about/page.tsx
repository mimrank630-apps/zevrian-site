import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and roadmap behind Zevrian Global LLC — a focused private-label brand building premium everyday essentials.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Restraint",
    detail:
      "We make fewer things and make them better. A focused catalog means every product earns its place.",
  },
  {
    title: "Materials first",
    detail:
      "We specify materials we'd want in our own homes and hold our partners to that standard.",
  },
  {
    title: "Honest value",
    detail:
      "Premium doesn't have to mean inflated. We price fairly for the quality we deliver.",
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
    title: "Amazon FBA foundation",
    detail:
      "Launch a curated catalog through our Zevrian Direct storefront, leaning on Amazon's world-class fulfillment and customer trust.",
    status: "Current",
  },
  {
    phase: "Phase 02",
    title: "Private label expansion",
    detail:
      "Deepen each collection with thoughtfully engineered additions, building brand recognition and loyal repeat customers.",
    status: "In progress",
  },
  {
    phase: "Phase 03",
    title: "Global lifestyle brand",
    detail:
      "Grow Zevrian into a destination brand with direct retail, international availability, and a community around considered living.",
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
              We build fewer things, better.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              {siteConfig.legalName} is an independent lifestyle company creating
              premium private-label essentials for the kitchen, home, and travel.
              We exist to bring intention and quality back to the objects people
              use every day.
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
                To design and deliver premium everyday essentials that feel
                considered in the hand and earn their place in the home.
              </p>
            </div>
            <div className="card p-9">
              <span className="eyebrow">Vision</span>
              <p className="mt-4 text-xl font-medium leading-relaxed text-charcoal-800">
                To grow Zevrian from a trusted Amazon brand into a global name
                synonymous with quiet, durable, design-led living.
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
            title="From Amazon to a global brand"
            description="A deliberate path: establish trust through fulfillment, deepen the catalog, then build the brand."
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

      {/* CTA */}
      <section className="border-t border-charcoal-100 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal-900 sm:text-3xl">
              Explore what we&rsquo;ve built so far.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn btn-primary">
                Browse the catalog
              </Link>
              <Link href="/brand" className="btn btn-secondary">
                See our brand identity
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
