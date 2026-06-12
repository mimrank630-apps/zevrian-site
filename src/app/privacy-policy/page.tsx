import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { fullAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName}, governing how we collect, use, and protect personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 1, 2026">
      <p className="text-sm leading-relaxed">
        This Privacy Policy describes how {siteConfig.legalName}
        (&ldquo;{siteConfig.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, and discloses information about you
        when you visit {siteConfig.url}, contact us, or interact with our brand.
        By using our website, you agree to the practices described here.
      </p>

      <LegalSection heading="1. Information We Collect">
        <p>
          We collect information you provide directly to us, such as your name,
          email address, and message content when you submit a contact or
          newsletter form. We also automatically collect limited technical data
          (such as browser type, device information, and pages visited) through
          standard web analytics.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Respond to your inquiries and provide customer support;</li>
          <li>Send newsletters and updates where you have opted in;</li>
          <li>Evaluate supplier and partnership inquiries;</li>
          <li>Operate, maintain, and improve our website;</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Cookies and Tracking">
        <p>
          We may use cookies and similar technologies to remember preferences
          and understand how our site is used. You can control cookies through
          your browser settings. Disabling cookies may affect site functionality.
        </p>
      </LegalSection>

      <LegalSection heading="4. Third-Party Services">
        <p>
          Our products are sold through Amazon under our {siteConfig.amazonStoreName}{" "}
          storefront. When you click through to Amazon, your activity is governed
          by Amazon&rsquo;s own privacy policy. We may also use third-party
          analytics and email providers who process data on our behalf.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Sharing">
        <p>
          We do not sell your personal information. We may share information with
          service providers who help us operate our business, or when required by
          law, regulation, or legal process.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data Security">
        <p>
          We take reasonable measures to protect your information. However, no
          method of transmission over the internet is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, or delete your personal information, or to opt out of certain
          processing. To exercise these rights, contact us at the email below.
        </p>
      </LegalSection>

      <LegalSection heading="8. Children's Privacy">
        <p>
          Our website is not directed to children under 13, and we do not
          knowingly collect personal information from them.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes are
          effective when posted to this page with a revised &ldquo;Last
          updated&rdquo; date.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact Us">
        <p>
          For privacy questions, contact {siteConfig.legalName} at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold-600 underline">
            {siteConfig.email}
          </a>{" "}
          or by mail at {fullAddress}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
