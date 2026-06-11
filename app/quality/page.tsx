import type { Metadata } from 'next'
import { Search, FileCheck, ClipboardList, ShieldAlert } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { FaqAccordion, type FaqItem } from '@/components/sections/FaqAccordion'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Quality Assurance | ZEVRIAN — Premium Essentials for Modern Life',
  description: "Learn about Zevrian Global LLC's quality assurance standards — from supplier vetting and product inspection to regulatory compliance and continuous improvement.",
  path: '/quality',
})

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'qa-1',
    question: 'What product safety standards does ZEVRIAN comply with?',
    answer: 'We apply the applicable US consumer product safety frameworks when evaluating products, including guidance from the US Consumer Product Safety Commission (CPSC). We require that products comply with relevant standards for the category before we list them — this is a non-negotiable part of our sourcing process.',
  },
  {
    id: 'qa-2',
    question: 'How does Zevrian evaluate new suppliers?',
    answer: 'New suppliers go through a multi-step evaluation process covering product quality, manufacturing capacity, communication reliability, and compliance documentation. We do not work with suppliers who cannot demonstrate consistent quality across production runs.',
  },
  {
    id: 'qa-3',
    question: 'What happens if a product does not meet ZEVRIAN quality standards?',
    answer: "Products that do not meet our internal standards are not listed — regardless of price or availability. If a product that has been listed falls below our standards post-launch (based on customer data or internal review), it is removed from our range and we re-evaluate the supplier relationship.",
  },
]

const SECTIONS = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Sourcing Standards',
    content: [
      'Every product evaluated for the ZEVRIAN range is assessed against a set of non-negotiable criteria. We evaluate materials for durability and safety, construction for long-term reliability, and design for genuine functional value.',
      'We do not source products based purely on price. A product that meets our margin requirements but fails our quality assessment does not enter our range. This discipline is the foundation of the ZEVRIAN brand standard.',
      'Our focus categories — Home & Kitchen, Office & Workspace, Household Essentials, and Lifestyle Products — each have category-specific criteria developed from consumer research and product testing.',
    ],
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Supplier Vetting Process',
    content: [
      'We evaluate potential suppliers through a structured process that examines their manufacturing capability, quality control systems, communication reliability, and track record of consistent production. We require suppliers to provide documentation of their quality management approach before any commercial relationship is established.',
      'We do not form supplier relationships based on introductions or referrals alone. Every supplier must complete our evaluation process, regardless of reputation or prior relationships in the industry.',
      'Suppliers who pass initial evaluation enter a probationary sourcing period, during which their products are subject to heightened monitoring before they become part of our standard range.',
    ],
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Inspection Procedures',
    content: [
      'Pre-shipment inspection is a standard part of our procurement process. We conduct or commission inspection of goods before they are shipped to Amazon fulfillment centres to identify any production defects or non-conformances.',
      'Where defects are identified, the batch is held until the issue is resolved to our satisfaction. We maintain records of all inspection outcomes and use them to inform ongoing supplier performance evaluation.',
    ],
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'Regulatory Compliance Approach',
    content: [
      'Zevrian Global LLC applies the relevant US regulatory frameworks when evaluating product compliance, including standards administered by the Consumer Product Safety Commission (CPSC) for consumer products sold in the United States.',
      'We require suppliers to provide compliance documentation appropriate to the product category and market. We are building toward formal third-party testing and certification as our product range expands under the ZEVRIAN private label.',
      'We do not claim certifications we have not obtained. Our compliance statements reflect our current operational reality — and we update them as our practices mature.',
    ],
  },
]

export default function QualityPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Standards</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Quality Assurance
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our quality standards are not a marketing claim. They are operational commitments that shape every sourcing decision, every supplier relationship, and every product in our range.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                {section.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[--text-primary]">{section.title}</h2>
            </div>
            <div className="space-y-4 text-[--text-muted] leading-relaxed pl-0 sm:pl-14">
              {section.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Quality & Compliance — FAQ" className="mb-10" />
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  )
}
