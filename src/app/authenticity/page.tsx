import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

const description = `How ${siteConfig.legalName} guarantees authentic products: sourcing only from brands and authorized distributors, MAP compliance, invoice records and brand protection on Amazon.`;

export const metadata: Metadata = {
  title: "Authenticity & Brand Protection Policy",
  description,
  alternates: { canonical: "/authenticity" },
  openGraph: {
    title: "Authenticity & Brand Protection Policy — Zevrian",
    description,
    url: `${siteConfig.url}/authenticity`,
    type: "website",
  },
};

export default function AuthenticityPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Authenticity Policy", path: "/authenticity" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />
      <LegalLayout title="Authenticity & Brand Protection Policy" updated="October 29, 2026">
        <p className="text-sm leading-relaxed">
          {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;) sells only new,
          genuine branded products. This policy explains how we source, store and
          sell every product, and what brands and customers can expect from us.
        </p>

        <LegalSection heading="1. Where our products come from">
          <p>
            We buy only from the brand owner or from distributors the brand has
            authorized. We do not buy from liquidators, closeout sellers, retail
            arbitrage, or any source we cannot verify.
          </p>
        </LegalSection>

        <LegalSection heading="2. Records we keep">
          <p>
            We keep the purchase invoice for every unit we sell, showing the
            supplier, product and quantity. These records are available to a brand
            or to Amazon on request.
          </p>
        </LegalSection>

        <LegalSection heading="3. Condition of products">
          <ul className="ml-5 list-disc space-y-1">
            <li>Every unit is sold new, in its original manufacturer packaging.</li>
            <li>We do not relabel, repackage or alter products.</li>
            <li>We do not create bundles that a brand has not approved.</li>
            <li>Inventory is stored, packed and shipped by Amazon&rsquo;s fulfillment network.</li>
          </ul>
        </LegalSection>

        <LegalSection heading="4. Listings and pricing">
          <ul className="ml-5 list-disc space-y-1">
            <li>We sell on a brand&rsquo;s existing Amazon listings and do not create duplicates.</li>
            <li>We do not change titles, images or brand content.</li>
            <li>We follow each brand&rsquo;s Minimum Advertised Price (MAP) and pricing policies.</li>
          </ul>
        </LegalSection>

        <LegalSection heading="5. Working with brand owners">
          <p>
            If a brand owner has a concern about any listing, we will respond
            within one business day and, where requested, remove the listing
            while we resolve it. Contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold-600 underline">
              {siteConfig.email}
            </a>{" "}
            or see our <Link href="/brand" className="text-gold-600 underline">For Brands</Link> page.
          </p>
        </LegalSection>

        <LegalSection heading="6. Trademarks">
          <p>
            Product and brand names mentioned on this site or in our listings are
            trademarks of their respective owners. Their use identifies the
            genuine products we resell and does not imply endorsement or
            affiliation unless stated.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
