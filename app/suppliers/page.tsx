import type { Metadata } from 'next'
import { Factory, Handshake, Globe } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { SupplierForm } from '@/components/forms/SupplierForm'
import { PartnershipForm } from '@/components/forms/PartnershipForm'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Suppliers & Partners | ZEVRIAN — Premium Essentials for Modern Life',
  description: 'Partner with Zevrian Global LLC as a supplier, wholesale distributor, or strategic partner. Submit a formal inquiry to our procurement team.',
  path: '/suppliers',
})

export default function SuppliersPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Work With Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Suppliers & Partnerships
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are actively building our network of quality manufacturers, wholesale partners, and strategic distributors. If you share our commitment to quality and long-term value creation, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Three Model Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="Engagement Models" subtitle="We work with partners across three distinct models — each designed to create long-term, mutually beneficial relationships." className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-xl border border-border bg-surface-light dark:bg-charcoal-50 p-8">
            <Factory className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-bold text-[--text-primary] text-lg mb-3">Supplier Inquiry</h3>
            <p className="text-sm text-[--text-muted] leading-relaxed">
              Are you a manufacturer or product developer with quality consumer goods in one of our focus categories? We evaluate new suppliers on a rolling basis, with a focus on consistent quality, compliance, and capacity. Submit a formal inquiry below to begin the conversation.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-light dark:bg-charcoal-50 p-8">
            <Handshake className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-bold text-[--text-primary] text-lg mb-3">Wholesale Partnership</h3>
            <p className="text-sm text-[--text-muted] leading-relaxed">
              If you are a wholesale buyer or distributor interested in carrying ZEVRIAN products in your network, we are open to discussing wholesale arrangements that meet our brand standards and minimum order requirements.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-light dark:bg-charcoal-50 p-8">
            <Globe className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-bold text-[--text-primary] text-lg mb-3">Distribution Opportunities</h3>
            <p className="text-sm text-[--text-muted] leading-relaxed">
              As Zevrian Global LLC scales internationally, we are looking for regional distribution partners who understand local markets and can represent the ZEVRIAN standard across new geographies. Long-term, relationship-first partnerships only.
            </p>
          </div>
        </div>

        {/* PDF Download */}
        <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <div>
            <h3 className="font-semibold text-[--text-primary] mb-1">Company Profile</h3>
            <p className="text-sm text-[--text-muted]">Download our company profile to learn more about Zevrian Global LLC before reaching out.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a href="/Zevrian-Global-Company-Profile.pdf" download="Zevrian-Global-Company-Profile.pdf" target="_blank" rel="noopener noreferrer">
              Download Company Profile
            </a>
          </Button>
        </div>

        {/* Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-[--text-primary] mb-6 flex items-center gap-2">
              <Factory className="w-5 h-5 text-gold" /> Supplier Inquiry
            </h2>
            <SupplierForm />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[--text-primary] mb-6 flex items-center gap-2">
              <Handshake className="w-5 h-5 text-gold" /> Partnership Interest
            </h2>
            <PartnershipForm />
          </div>
        </div>
      </section>
    </div>
  )
}
