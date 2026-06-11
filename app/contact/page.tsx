import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ContactForm } from '@/components/forms/ContactForm'
import { SupplierForm } from '@/components/forms/SupplierForm'
import { PartnershipForm } from '@/components/forms/PartnershipForm'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact | ZEVRIAN — Premium Essentials for Modern Life',
  description: 'Get in touch with Zevrian Global LLC for business inquiries, supplier contacts, or partnership requests. We respond to all serious inquiries within 2 business days.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Get in Touch</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We respond to all serious inquiries within 2 business days. Choose the form that best describes your reason for reaching out.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 border-b border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-8 justify-center">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gold shrink-0" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[--text-muted] mb-0.5">Registered Location</p>
              <p className="text-sm font-medium text-[--text-primary]">Sheridan, Wyoming, USA</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gold shrink-0" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[--text-muted] mb-0.5">Email</p>
              <a href="mailto:hello@zevriangloba.com" className="text-sm font-medium text-gold hover:text-gold-hover transition-colors">
                hello@zevriangloba.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-20">
          {/* General Business Inquiry */}
          <div>
            <SectionHeading title="General Business Inquiry" align="left" className="mb-8" />
            <div className="max-w-2xl">
              <ContactForm />
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Supplier Contact */}
          <div>
            <SectionHeading title="Supplier Contact" align="left" className="mb-2" />
            <p className="text-[--text-muted] text-sm mb-8 max-w-xl">
              If you are a manufacturer or product developer interested in supplying to the ZEVRIAN range, use this form to introduce your company and products.
            </p>
            <div className="max-w-2xl">
              <SupplierForm />
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Partnership Request */}
          <div>
            <SectionHeading title="Partnership Request" align="left" className="mb-2" />
            <p className="text-[--text-muted] text-sm mb-8 max-w-xl">
              For wholesale, distribution, co-branding, or other strategic partnership enquiries, use this form to describe your organisation and the nature of the opportunity.
            </p>
            <div className="max-w-2xl">
              <PartnershipForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
