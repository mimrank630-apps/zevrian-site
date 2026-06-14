import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { fullAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.legalName}, governing the use of ${siteConfig.url}.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 14, 2026">
      <p className="text-sm leading-relaxed">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of {siteConfig.url}, operated by {siteConfig.legalName}
        (&ldquo;{siteConfig.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). By accessing or using our website, you agree to be
        bound by these Terms.
      </p>

      <LegalSection heading="1. Agreement to Terms">
        <p>
          If you do not agree to these Terms, do not use our website. We may
          revise these Terms at any time; continued use of the site constitutes
          acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="2. Use of the Website">
        <p>
          You agree to use our website only for lawful purposes. You may not use
          the site in any way that could damage, disable, or impair it, or
          interfere with any other party&rsquo;s use of the site.
        </p>
      </LegalSection>

      <LegalSection heading="3. Products and Purchases">
        <p>
          {siteConfig.name} operates an Amazon FBA wholesale business.
          Product purchases are fulfilled through our {siteConfig.amazonStoreName}{" "}
          storefront on Amazon and are subject to Amazon&rsquo;s terms,
          policies, pricing, and availability. Product information on this site
          is provided for reference and may not reflect real-time pricing or
          stock.
        </p>
      </LegalSection>

      <LegalSection heading="4. Intellectual Property">
        <p>
          All content on this website — including the Zevrian name, logo, text,
          graphics, and design — is the property of {siteConfig.legalName} or its
          licensors and is protected by applicable intellectual property laws.
          You may not reproduce or use this content without our written
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="5. Third-Party Links">
        <p>
          Our website may contain links to third-party sites, including Amazon.
          We are not responsible for the content, policies, or practices of any
          third-party websites.
        </p>
      </LegalSection>

      <LegalSection heading="6. Disclaimer of Warranties">
        <p>
          The website is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or
          implied, including merchantability, fitness for a particular purpose,
          and non-infringement.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {siteConfig.legalName} shall
          not be liable for any indirect, incidental, special, or consequential
          damages arising from your use of, or inability to use, the website.
        </p>
      </LegalSection>

      <LegalSection heading="8. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the State of {siteConfig.address.stateLong}, without regard to its
          conflict of law provisions. Any disputes shall be subject to the
          exclusive jurisdiction of the state and federal courts located in{" "}
          {siteConfig.address.stateLong}.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>
          Questions about these Terms may be directed to {siteConfig.legalName}{" "}
          at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold-600 underline">
            {siteConfig.email}
          </a>{" "}
          or by mail at {fullAddress}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
