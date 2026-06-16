import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export const faqs = [
  {
    q: "Where can I buy Zevrian products?",
    a: `Zevrian products are sold through our ${siteConfig.amazonStoreName} storefront on Amazon. Each product page links directly to its Amazon listing, where checkout, shipping, and returns are handled by Amazon.`,
  },
  {
    q: "Is Zevrian a real company?",
    a: `Yes. Zevrian is operated by ${siteConfig.legalName}, a US-registered company based at ${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.stateLong}, ${siteConfig.address.country}.`,
  },
  {
    q: "Does Zevrian ship internationally?",
    a: "Shipping availability varies by country. Please check your specific Amazon listing to confirm delivery options in your area.",
  },
  {
    q: "What is your return policy?",
    a: "Returns and refunds are handled through Amazon's standard return policy and A-to-z Guarantee, so every purchase is protected.",
  },
  {
    q: "Are you a wholesaler or distributor?",
    a: "Zevrian currently operates as an Amazon FBA wholesale business, with plans to expand into private label in the future. Manufacturers and supply-chain partners are welcome to reach us through the supplier form on our contact page.",
  },
  {
    q: "How can I contact Zevrian?",
    a: `You can email us at info@zevrian.com or use the contact form on our contact page. We reply within one business day.`,
  },
];

export function FaqSection() {
  return (
    <section className="border-t border-charcoal-100 bg-charcoal-50 py-20 sm:py-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
      />
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything you need to know about buying from a new, honest brand."
        />
        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-charcoal-200">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <dt className="text-lg font-semibold text-charcoal-900">{faq.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
