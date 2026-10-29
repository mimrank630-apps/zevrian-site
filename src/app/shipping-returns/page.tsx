import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

const description = `Shipping, returns and refunds for orders from ${siteConfig.amazonStoreName} on Amazon. All orders are fulfilled by Amazon and covered by Amazon's return policy and A-to-z Guarantee.`;

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description,
  alternates: { canonical: "/shipping-returns" },
  openGraph: {
    title: "Shipping & Returns — Zevrian",
    description,
    url: `${siteConfig.url}/shipping-returns`,
    type: "website",
  },
};

export default function ShippingReturnsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Shipping & Returns", path: "/shipping-returns" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />
      <LegalLayout title="Shipping & Returns" updated="October 29, 2026">
        <p className="text-sm leading-relaxed">
          All {siteConfig.amazonStoreName} orders are placed on Amazon and
          fulfilled by Amazon (FBA). That means Amazon handles payment, shipping,
          returns and refunds for every order.
        </p>

        <LegalSection heading="1. Shipping">
          <p>
            Orders ship from Amazon fulfillment centers in the United States.
            Delivery speed, cost and Prime eligibility are shown on each Amazon
            product page at checkout. You can track your order in your Amazon
            account under &ldquo;Your Orders&rdquo;.
          </p>
        </LegalSection>

        <LegalSection heading="2. Returns">
          <p>
            Returns follow Amazon&rsquo;s standard return policy. Most items can
            be returned within the return window shown on the product page. Start
            a return from &ldquo;Your Orders&rdquo; in your Amazon account and
            follow the instructions.
          </p>
        </LegalSection>

        <LegalSection heading="3. Refunds">
          <p>
            Refunds are issued by Amazon to your original payment method once the
            return is received and processed, according to Amazon&rsquo;s refund
            policy.
          </p>
        </LegalSection>

        <LegalSection heading="4. Damaged or incorrect items">
          <p>
            If an item arrives damaged, defective or different from its listing,
            start a return in your Amazon account. Every purchase is also
            protected by Amazon&rsquo;s A-to-z Guarantee.
          </p>
        </LegalSection>

        <LegalSection heading="5. Questions">
          <p>
            For questions about a product we sell, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold-600 underline">
              {siteConfig.email}
            </a>
            . We aim to reply within one business day. For order, payment and
            delivery issues, Amazon Customer Service can help fastest.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
