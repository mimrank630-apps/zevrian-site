import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | ZEVRIAN — Premium Essentials for Modern Life',
  description: 'Read the Zevrian Global LLC Privacy Policy — how we collect, use, and protect your personal data across the ZEVRIAN website and services.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16">
      <section className="bg-charcoal py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last revised: 2025-06-11</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how Zevrian Global LLC (&ldquo;Zevrian&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company incorporated in Wyoming, USA, collects, uses, and protects personal data when you visit the ZEVRIAN website (the &ldquo;Site&rdquo;). We are the data controller for personal data collected through this Site.
        </p>
        <p>
          By using the Site, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site.
        </p>

        <h2>2. Data Collection</h2>
        <p>We may collect the following categories of personal data:</p>
        <ul>
          <li><strong>Contact data:</strong> Name, email address, company name, country, and message content submitted through our contact and inquiry forms.</li>
          <li><strong>Newsletter data:</strong> Email addresses submitted to our newsletter subscription form.</li>
          <li><strong>Technical data:</strong> IP address, browser type, device type, pages visited, and timestamps, collected automatically via server logs and analytics tools (subject to your cookie consent).</li>
        </ul>
        <p>We do not collect payment information. All product purchases are processed by Amazon through the Zevrian Direct store.</p>

        <h2>3. Use of Data</h2>
        <p>We use personal data to:</p>
        <ul>
          <li>Respond to contact, supplier, and partnership inquiries submitted through Site forms.</li>
          <li>Send newsletter communications to subscribers who have opted in.</li>
          <li>Analyse Site usage to improve content and user experience (subject to cookie consent).</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          The Site uses cookies to improve your browsing experience. Essential cookies are required for the Site to function. Non-essential analytics cookies are only set after you have provided explicit consent through our cookie consent banner. You may withdraw consent at any time by clearing your browser&apos;s local storage for this domain.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We use the following third-party services to process personal data on our behalf:
        </p>
        <ul>
          <li><strong>Resend:</strong> Used to transmit form submissions by email and to manage our newsletter audience list. Resend acts as a data processor under a data processing agreement with Zevrian Global LLC.</li>
          <li><strong>Amazon:</strong> The Zevrian Direct store on Amazon operates under Amazon&apos;s own privacy policy and data practices. Purchases made on Amazon are subject to Amazon&apos;s terms, not this policy.</li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>
          We retain form submission data for as long as is necessary to respond to your inquiry, and for a reasonable period thereafter for record-keeping purposes. Newsletter subscriber data is retained until you unsubscribe. You may request deletion of your data at any time.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Subject to applicable law, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, please contact us at the address below. We will respond to requests within 30 days.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          For privacy-related inquiries, please contact:<br />
          Zevrian Global LLC<br />
          Sheridan, Wyoming, USA<br />
          Email: <a href="mailto:hello@zevriangloba.com">hello@zevriangloba.com</a>
        </p>
      </section>
    </div>
  )
}
