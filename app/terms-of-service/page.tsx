import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service | ZEVRIAN — Premium Essentials for Modern Life',
  description: 'Read the Zevrian Global LLC Terms of Service governing use of the ZEVRIAN website, intellectual property rights, and our relationship with the Amazon Zevrian Direct store.',
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <div className="pt-16">
      <section className="bg-charcoal py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last revised: 2025-06-11</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the ZEVRIAN website (the &ldquo;Site&rdquo;), operated by Zevrian Global LLC (&ldquo;Zevrian&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Site.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos, brand names, design elements, and code — is the property of Zevrian Global LLC or its content licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any Site content without our prior written consent.
        </p>
        <p>
          The ZEVRIAN name, wordmark, and brand identity are proprietary to Zevrian Global LLC. Unauthorised use of these marks is prohibited.
        </p>

        <h2>3. Limitation of Liability</h2>
        <p>
          The Site and its content are provided on an &ldquo;as is&rdquo; basis without warranties of any kind, express or implied. To the fullest extent permitted by law, Zevrian Global LLC shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the Site or reliance on its content.
        </p>

        <h2>4. External Links — Amazon Zevrian Direct</h2>
        <p>
          The Site contains links to the Zevrian Direct store on Amazon. Zevrian Global LLC is not responsible for the content, policies, pricing, or operations of the Amazon platform. All purchases made through the Zevrian Direct Amazon store are subject to Amazon&apos;s own terms of service, return policy, and buyer protection standards — not these Terms of Service.
        </p>
        <p>
          Links to other third-party websites are provided for convenience only. We do not endorse or assume responsibility for the content of any linked site.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of the State of Wyoming, USA, without regard to conflict of law principles. Any disputes arising out of or relating to these Terms shall be resolved in the courts of Sheridan County, Wyoming.
        </p>

        <h2>6. Contact Information</h2>
        <p>
          For questions about these Terms, please contact:<br />
          Zevrian Global LLC<br />
          Sheridan, Wyoming, USA<br />
          Email: <a href="mailto:hello@zevriangloba.com">hello@zevriangloba.com</a>
        </p>
      </section>
    </div>
  )
}
