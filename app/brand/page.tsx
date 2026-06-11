import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Brand | ZEVRIAN — Premium Essentials for Modern Life',
  description:
    'Discover the ZEVRIAN brand — its philosophy, design principles, and long-term vision as the flagship brand of a growing multi-brand consumer goods portfolio.',
  path: '/brand',
})

export default function BrandPage() {
  return (
    <div className="pt-16">
      {/* Brand Showcase Hero */}
      <section className="bg-charcoal min-h-[70vh] flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-8">The Brand</p>
        <h1
          className="font-extrabold tracking-[0.08em] bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: '1.05' }}
        >
          ZEVRIAN
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
          Premium Essentials for Modern Life
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-widest text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            Gold Accent #C6A43F
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            Pure White #FFFFFF
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-charcoal-50 border border-white/20" />
            Deep Charcoal #0F0F0F
          </span>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Brand Philosophy" align="left" className="mb-10" />
        <div className="space-y-6 text-[--text-muted] leading-relaxed text-base">
          <p>
            ZEVRIAN exists because the modern consumer deserves better. Too often, the products that fill our
            homes, desks, and daily routines are made to a price point — not to a standard. We believe that
            thoughtful design, honest materials, and functional quality should not be luxuries. They should be
            the baseline.
          </p>
          <p>
            Every product that carries the ZEVRIAN name is evaluated against a single question: would we use
            this ourselves? If the answer is not an unqualified yes, it does not make the range. This simple
            discipline shapes how we source, how we evaluate suppliers, and how we think about product
            development.
          </p>
          <p>
            As we move into private label, the ZEVRIAN brand will evolve — but its core promise will not.
            Premium essentials, honestly priced, built to endure. That is what ZEVRIAN stands for today and
            what it will stand for at every stage of its growth.
          </p>
        </div>
      </section>

      {/* Color & Identity */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Visual Identity"
            subtitle="A design language built on clarity, confidence, and premium restraint."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-32 bg-charcoal" />
              <div className="p-4 bg-white dark:bg-charcoal">
                <p className="font-semibold text-[--text-primary] text-sm">Deep Charcoal</p>
                <p className="text-xs text-[--text-muted]">#0F0F0F — Primary Dark</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-32 bg-gold" />
              <div className="p-4 bg-white dark:bg-charcoal">
                <p className="font-semibold text-[--text-primary] text-sm">Gold Accent</p>
                <p className="text-xs text-[--text-muted]">#C6A43F — Brand Accent</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="h-32 bg-surface-light border-b border-border" />
              <div className="p-4 bg-white dark:bg-charcoal">
                <p className="font-semibold text-[--text-primary] text-sm">Surface Gray</p>
                <p className="text-xs text-[--text-muted]">#F5F5F5 — Surface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Brand Future */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="A Multi-Brand Future" align="left" className="mb-8" />
        <div className="space-y-5 text-[--text-muted] leading-relaxed">
          <p>
            ZEVRIAN is the first brand in what Zevrian Global LLC intends to build into a diversified consumer
            goods portfolio. As the company grows, additional brands will be developed under the parent entity
            — each with its own identity, positioning, and target consumer, but all sharing the same commitment
            to quality that defines ZEVRIAN.
          </p>
          <p>
            This multi-brand architecture gives Zevrian Global LLC the flexibility to address different consumer
            segments, price points, and product categories — while maintaining the operational and procurement
            advantages that come with a centralised parent company.
          </p>
          <p>
            The timeline and structure of future brand launches will be guided by market opportunity, consumer
            demand, and our capacity to maintain the standards that the ZEVRIAN name represents. We will grow
            deliberately.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link href="/vision">
              Our Future Vision <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
