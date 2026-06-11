import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'About | ZEVRIAN — Premium Essentials for Modern Life',
  description:
    'Learn about Zevrian Global LLC — our founding story, mission, core values, and the roadmap from Amazon FBA wholesale to a multi-brand global consumer goods company.',
  path: '/about',
})

const CORE_VALUES = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Quality Without Compromise',
    body: 'We set high standards for every product we source. Quality is not a differentiator for us — it is the baseline.',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Long-Term Thinking',
    body: 'We build for decades, not quarters. Every partnership, product decision, and operational investment is made with a long-term perspective.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Customer Centricity',
    body: 'The modern consumer is discerning. We exist to serve their needs with products that genuinely add value to their daily lives.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Operational Excellence',
    body: 'Efficient, reliable, and scalable operations are the foundation of everything we build — from supplier relationships to last-mile fulfillment.',
  },
]

const ROADMAP_STEPS = [
  {
    step: '01',
    label: 'Amazon FBA Wholesale',
    status: 'current',
    description: 'Building operational expertise and brand awareness through the Amazon marketplace.',
  },
  {
    step: '02',
    label: 'Private Label Launch',
    status: 'next',
    description: 'Developing proprietary ZEVRIAN-branded products with owned manufacturing relationships.',
  },
  {
    step: '03',
    label: 'Multi-Brand Expansion',
    status: 'planned',
    description: 'Launching additional consumer brands under the Zevrian Global LLC parent entity.',
  },
  {
    step: '04',
    label: 'Global Distribution',
    status: 'vision',
    description: 'Scaling distribution across international markets with a diversified brand portfolio.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Our Company</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Building for the Long Term
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Zevrian Global LLC was founded on the belief that there is always room for a consumer goods company
            that prioritises quality, integrity, and long-term brand equity over short-term margins.
          </p>
        </div>
      </section>

      {/* Company Origin Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Our Story" align="left" className="mb-8" />
        <div className="space-y-5 text-[--text-muted] leading-relaxed">
          <p>
            Zevrian Global LLC began as an Amazon reseller, learning the fundamentals of the e-commerce supply
            chain from the ground up. From day one, we made a commitment to source only products that met our
            internal quality standards — not simply the ones with the best margins.
          </p>
          <p>
            Operating as Zevrian Direct on Amazon, we have built an understanding of what modern consumers
            genuinely want: products that are well-made, reliable, and worth the investment. That insight now
            shapes every business decision we make.
          </p>
          <p>
            As we move into the next phase of our growth, Zevrian Global LLC is transitioning from a wholesale
            model into a private label operation — developing products under the ZEVRIAN brand with manufacturing
            partners who share our commitment to quality.
          </p>
          <p>
            The ultimate vision is a multi-brand consumer goods holding company, built with the patience and
            discipline that lasting brands require. We are early in that journey, and we are building it the
            right way.
          </p>
        </div>
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button asChild>
            <a
              href="/Zevrian-Global-Company-Profile.pdf"
              download="Zevrian-Global-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Company Profile
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white dark:bg-charcoal border border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-gold" />
              <h2 className="text-lg font-bold text-[--text-primary]">Our Vision</h2>
            </div>
            <p className="text-[--text-muted] leading-relaxed">
              To become a globally recognised consumer goods holding company, known for building premium brands
              that stand the test of time — trusted by consumers, respected by partners, and operated with
              integrity.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-charcoal border border-border p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-gold" />
              <h2 className="text-lg font-bold text-[--text-primary]">Our Mission</h2>
            </div>
            <p className="text-[--text-muted] leading-relaxed">
              To source, develop, and scale quality consumer products that genuinely improve everyday life —
              starting with Amazon FBA essentials, building toward a diversified portfolio of owned consumer
              brands.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Core Values"
          subtitle="The principles that guide every decision we make."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="flex gap-4 p-6 rounded-xl border border-border bg-surface-light dark:bg-charcoal-50"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                {val.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[--text-primary] mb-1">{val.title}</h3>
                <p className="text-sm text-[--text-muted] leading-relaxed">{val.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-charcoal px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Leadership Philosophy</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Discipline Over Speed</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We believe that great companies are built through disciplined execution, not aggressive shortcuts. Our
            leadership approach favours long-term relationship building over transactional gains, operational
            excellence over scale-at-any-cost, and quality over volume.
          </p>
          <p className="text-gray-400 leading-relaxed">
            These principles guide how we engage with suppliers, partners, and the market — and they will remain
            constant as Zevrian Global LLC grows.
          </p>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          title="Growth Roadmap"
          subtitle="Our path from Amazon reseller to global consumer goods company."
          className="mb-12"
        />
        <div className="flex flex-col lg:flex-row gap-0">
          {ROADMAP_STEPS.map((step, i) => (
            <div key={step.step} className="flex-1 relative">
              <div className="flex lg:flex-col gap-4 lg:gap-2 p-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    step.status === 'current'
                      ? 'bg-gold text-charcoal'
                      : 'bg-charcoal-50 dark:bg-charcoal border border-border text-[--text-muted]'
                  }`}
                >
                  {step.step}
                </div>
                <div className="lg:mt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-[--text-primary]">{step.label}</p>
                    {step.status === 'current' && (
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Current</span>
                    )}
                    {step.status === 'next' && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Next</span>
                    )}
                    {step.status === 'planned' && (
                      <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">Planned</span>
                    )}
                    {step.status === 'vision' && (
                      <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">Vision</span>
                    )}
                  </div>
                  <p className="text-xs text-[--text-muted] leading-relaxed">{step.description}</p>
                </div>
              </div>
              {i < ROADMAP_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[calc(50%+20px)] right-0 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
