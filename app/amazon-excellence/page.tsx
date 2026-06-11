import type { Metadata } from 'next'
import { CheckCircle, Truck, Shield, Users, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { FaqAccordion, type FaqItem } from '@/components/sections/FaqAccordion'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Amazon Excellence | ZEVRIAN — Premium Essentials for Modern Life',
  description: 'Discover how Zevrian Direct leverages Amazon FBA to deliver premium consumer essentials with fast shipping, quality control, and a world-class fulfillment infrastructure.',
  path: '/amazon-excellence',
})

const AMAZON_STORE_URL = process.env.AMAZON_STORE_URL ?? 'https://www.amazon.com/stores/ZEVRIAN'

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where can I purchase ZEVRIAN products?',
    answer: 'All ZEVRIAN products are available exclusively through the Zevrian Direct store on Amazon. You can browse and purchase by visiting our Amazon storefront directly.',
  },
  {
    id: 'faq-2',
    question: 'How fast is shipping on ZEVRIAN products?',
    answer: 'ZEVRIAN products are fulfilled through Amazon FBA (Fulfillment by Amazon), which means most orders qualify for Amazon Prime fast shipping — typically 1–2 business days for Prime members in eligible regions.',
  },
  {
    id: 'faq-3',
    question: 'What is Amazon FBA and why does Zevrian use it?',
    answer: "Amazon FBA (Fulfillment by Amazon) means ZEVRIAN products are stored in Amazon's fulfillment centres and shipped directly by Amazon. We chose FBA because it gives our customers access to Amazon's world-class logistics, reliable delivery speeds, and Amazon's buyer protection standards.",
  },
  {
    id: 'faq-4',
    question: 'How are ZEVRIAN products quality-checked before sale?',
    answer: 'Before any product enters our range, it is evaluated against our internal sourcing standards covering materials, safety, and durability. Products that do not meet the ZEVRIAN quality threshold are not listed — regardless of price or availability.',
  },
  {
    id: 'faq-5',
    question: 'What if I have an issue with a ZEVRIAN order?',
    answer: "As an Amazon seller, all orders placed through Zevrian Direct on Amazon are protected by Amazon's standard buyer guarantee. You can raise any issue directly through the Amazon order management system, or contact us at hello@zevriangloba.com for assistance.",
  },
]

const BENEFITS = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Fast, Reliable Delivery',
    description: "Amazon's FBA network provides Prime-eligible shipping, reaching customers across the US in 1–2 business days in most cases.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality Control Pipeline',
    description: 'Before entering our Amazon inventory, every product passes our internal quality review — ensuring what arrives matches the ZEVRIAN standard.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Amazon Buyer Protection',
    description: "All Zevrian Direct purchases are covered by Amazon's standard buyer guarantee — giving customers confidence and a straightforward resolution process.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Experience Focus',
    description: 'We monitor customer feedback and product performance data actively. When issues arise, we address them at the root — through sourcing decisions, not just support tickets.',
  },
]

export default function AmazonExcellencePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Zevrian Direct</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Amazon Excellence
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Zevrian Direct is our official Amazon store — powered by Amazon FBA to deliver a premium purchase experience for every customer, every time.
          </p>
          <Button asChild size="lg">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer">
              Visit Zevrian Direct on Amazon
            </a>
          </Button>
        </div>
      </section>

      {/* Zevrian Direct Model */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading title="The Zevrian Direct Model" align="left" className="mb-8" />
        <div className="space-y-5 text-[--text-muted] leading-relaxed">
          <p>
            Zevrian Direct is our branded Amazon storefront — the primary channel through which consumers can access the ZEVRIAN range today. We operate through Amazon&apos;s platform because it provides the distribution infrastructure, customer trust, and operational tools that allow us to focus on what matters most: product quality.
          </p>
          <p>
            As an Amazon FBA seller, our inventory is stored, picked, packed, and shipped by Amazon directly. This model ensures that delivery speed, packaging quality, and post-purchase experience are all maintained at Amazon&apos;s own standards — not dependent on our own logistics setup.
          </p>
          <p>
            We treat the Amazon channel not as a marketplace shortcut, but as the foundation of a customer relationship that we intend to build over the long term. Every product listed under the Zevrian Direct brand represents our commitment to that relationship.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Why FBA Works for Our Customers" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl border border-border bg-white dark:bg-charcoal">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[--text-primary] mb-1">{b.title}</h3>
                  <p className="text-sm text-[--text-muted] leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <SectionHeading title="Frequently Asked Questions" className="mb-10" />
        <FaqAccordion items={FAQ_ITEMS} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-gray-400 text-sm mb-8">
            Browse the full ZEVRIAN range on Amazon and experience premium essentials delivered through the world&apos;s most trusted fulfillment network.
          </p>
          <Button asChild size="lg">
            <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer">
              Shop Zevrian Direct on Amazon <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
