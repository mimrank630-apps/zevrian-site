import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

const pageDescription =
  "How Zevrian Global LLC works with brands and authorized distributors: authentic sourcing, MAP compliance, brand protection on Amazon, and the business documents we provide.";

export const metadata: Metadata = {
  title: "For Brands & Suppliers",
  description: pageDescription,
  keywords: [
    "Zevrian Global LLC wholesale",
    "Amazon reseller for brands",
    "authorized Amazon reseller",
    "MAP compliant Amazon seller",
    "brand protection Amazon",
    "wholesale account Amazon FBA",
  ],
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "For Brands & Suppliers — Zevrian",
    description: pageDescription,
    url: `${siteConfig.url}/brand`,
    type: "website",
  },
};

const howWeSell = [
  {
    title: "Amazon FBA only",
    detail: `We sell through our ${siteConfig.amazonStoreName} storefront on Amazon. Inventory is stored, packed and shipped by Amazon's fulfillment network, so your customers get Prime delivery and Amazon's buyer protection.`,
  },
  {
    title: "Existing listings",
    detail:
      "We sell on your existing Amazon product listings. We do not create duplicate listings or change your titles, images or brand content.",
  },
  {
    title: "New and genuine",
    detail:
      "Every unit is new, in original packaging, and bought from you or your authorized distributor. We keep every purchase invoice on file.",
  },
];

const commitments = [
  "Buy only from the brand or its authorized distributors",
  "Follow your MAP and pricing policies on every listing",
  "No relabelling, repackaging or unapproved bundles",
  "No duplicate or competing listings of your products",
  "Remove a listing promptly if you ask us to",
  "Prepay every order and keep stock levels steady",
];

const documents = [
  { label: "Legal entity", value: `${siteConfig.legalName} (Wyoming LLC)` },
  { label: "Filing ID", value: siteConfig.filingId },
  { label: "Federal tax ID", value: "EIN — available on request" },
  { label: "Sales tax", value: "State Sales/Use Tax License — available on request" },
];

export default function ForBrandsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "For Brands & Suppliers", path: "/brand" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />

      <section className="bg-charcoal-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-light">For brands &amp; suppliers</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A careful reseller for your products on Amazon.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              {siteConfig.legalName} buys authentic products from brands and their
              authorized distributors and sells them to US customers through Amazon
              FBA. We protect your pricing, your listings and your reputation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Wholesale partnership")}`} className="btn btn-gold">
                Email {siteConfig.email}
              </a>
              <Link
                href="/contact"
                className="btn !border-charcoal-600 !bg-transparent !text-white hover:!border-gold"
              >
                Partnership form
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How we sell */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we sell"
            title="Simple, transparent and Amazon-only."
            description="One channel, clear rules, and no surprises for your brand."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {howWeSell.map((item) => (
              <div key={item.title} className="card p-8">
                <h3 className="text-lg font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Brand protection"
            title="Our commitments to every brand we carry."
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-charcoal-100 bg-white p-5 text-sm leading-relaxed text-charcoal-700"
              >
                <svg className="mt-0.5 h-5 w-5 flex-none text-gold-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Documents */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="eyebrow">Account setup</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                Ready for your credit and account checks.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal-500">
                We are a registered US company. Our formation documents, EIN
                confirmation and state tax registration are available to brands and
                distributors during account setup.
              </p>
            </div>
            <dl className="card divide-y divide-charcoal-100 p-2">
              {documents.map((doc) => (
                <div key={doc.label} className="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-xs font-semibold uppercase tracking-luxe text-gold-600">{doc.label}</dt>
                  <dd className="text-sm font-medium text-charcoal-900">{doc.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="border-t border-charcoal-100 bg-charcoal-950 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let&rsquo;s talk about carrying your products.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-charcoal-300">
              Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold-light hover:text-gold">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.phoneHref}`} className="text-gold-light hover:text-gold">
                {siteConfig.phone}
              </a>
              . We aim to reply within one business day.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
