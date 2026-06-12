import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SupplierForm } from "@/components/forms/SupplierForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zevrian Global LLC. Customer support for product questions, and a dedicated intake for suppliers and manufacturing partners.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal-950 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-light">Contact</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              We&rsquo;d love to hear from you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              Whether you&rsquo;re a customer with a question or a manufacturer
              who&rsquo;d like to work with us, use the right form below and our
              team will respond promptly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Customer Support */}
            <div className="card p-8 sm:p-10">
              <span className="eyebrow">For customers</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal-900">
                Customer Support
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                Product questions, feedback, and customer care. We typically
                reply within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Supplier / Partner */}
            <div className="card p-8 sm:p-10">
              <span className="eyebrow">For suppliers</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal-900">
                Supplier &amp; Partner Inquiries
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                A dedicated intake for global manufacturers and supply chain
                partners. Tell us what you make and how you work.
              </p>
              <div className="mt-8">
                <SupplierForm />
              </div>
            </div>
          </div>

          {/* Corporate details */}
          <div className="mt-12 grid gap-6 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-8 sm:grid-cols-3 sm:p-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-luxe text-gold-600">
                Registered office
              </h3>
              <address className="mt-3 text-sm not-italic leading-relaxed text-charcoal-600">
                <span className="font-medium text-charcoal-900">
                  {siteConfig.legalName}
                </span>
                <br />
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
                <br />
                {siteConfig.address.country}
              </address>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-luxe text-gold-600">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-sm text-charcoal-600 transition-colors hover:text-gold-600"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-luxe text-gold-600">
                Shop
              </h3>
              <a
                href={siteConfig.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-charcoal-600 transition-colors hover:text-gold-600"
              >
                {siteConfig.amazonStoreName} on Amazon
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
