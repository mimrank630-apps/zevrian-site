import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Layers, Tag, ArrowRight, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Future Vision | ZEVRIAN — Premium Essentials for Modern Life',
  description: "Explore Zevrian Global LLC's long-term vision: a global expansion roadmap, multi-brand consumer goods ecosystem, and private label scaling strategy.",
  path: '/vision',
})

const ROADMAP_MILESTONES = [
  {
    label: 'Phase 1 — Amazon Market Presence',
    status: 'Current',
    statusColor: 'bg-gold/20 text-gold',
    description: 'Establishing brand credibility and operational efficiency through Amazon FBA. Building the supplier network, quality systems, and customer data that will underpin future growth.',
  },
  {
    label: 'Phase 2 — Private Label Launch',
    status: 'Targeted: 2025–2026',
    statusColor: 'bg-blue-500/20 text-blue-400',
    description: 'Launching proprietary ZEVRIAN-branded products developed in partnership with vetted manufacturers. Private label gives us direct control over quality, pricing, and brand equity.',
  },
  {
    label: 'Phase 3 — Multi-Channel Expansion',
    status: 'Projected: 2026–2027',
    statusColor: 'bg-white/10 text-gray-400',
    description: 'Expanding distribution beyond Amazon to include direct-to-consumer channels, retail partnerships, and international marketplace presence in key consumer markets.',
  },
  {
    label: 'Phase 4 — Multi-Brand Portfolio',
    status: 'Planned: 2027+',
    statusColor: 'bg-white/10 text-gray-400',
    description: 'Developing additional consumer brands under the Zevrian Global LLC parent entity, each targeting distinct market segments while sharing operational and procurement infrastructure.',
  },
  {
    label: 'Phase 5 — Global Distribution',
    status: 'Long-Term Vision',
    statusColor: 'bg-white/5 text-gray-500',
    description: 'Scaling into international markets across Europe, Asia-Pacific, and beyond — with a diversified brand portfolio capable of serving consumers across geographies and income levels.',
  },
]

export default function VisionPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Where We Are Going</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Future Vision
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Zevrian Global LLC is building toward a long-term position as a global consumer goods holding company. Here is what that journey looks like — honestly, and without overpromising.
          </p>
        </div>
      </section>

      {/* Global Expansion Roadmap */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Globe className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-[--text-primary]">Global Expansion Roadmap</h2>
        </div>
        <p className="text-[--text-muted] leading-relaxed mb-10">
          The milestones below represent our planned trajectory. They are forward-looking projections — clearly aspirational — and reflect our current strategic intent, not confirmed achievements. We will update this roadmap as our circumstances evolve.
        </p>
        <div className="space-y-0">
          {ROADMAP_MILESTONES.map((milestone, i) => (
            <div key={milestone.label} className="flex gap-6 relative">
              {/* Vertical line */}
              {i < ROADMAP_MILESTONES.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-border" />
              )}
              <div className="w-8 h-8 rounded-full bg-charcoal-50 border border-border flex items-center justify-center shrink-0 mt-1 relative z-10">
                <TrendingUp className="w-3.5 h-3.5 text-gold" />
              </div>
              <div className="pb-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-[--text-primary]">{milestone.label}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${milestone.statusColor}`}>
                    {milestone.status}
                  </span>
                </div>
                <p className="text-sm text-[--text-muted] leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Brand Ecosystem */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-gold" />
            <h2 className="text-2xl font-bold text-[--text-primary]">Multi-Brand Ecosystem</h2>
          </div>
          <div className="space-y-5 text-[--text-muted] leading-relaxed">
            <p>
              ZEVRIAN is the first brand in what we plan to build into a multi-brand consumer goods portfolio. The parent entity — Zevrian Global LLC — will eventually house several distinct consumer brands, each positioned differently but all sharing common operational infrastructure, supplier relationships, and quality standards.
            </p>
            <p>
              This parent-brand architecture is modelled on how durable consumer goods companies are built at scale. A centralised parent enables economies of scale in procurement and operations, while individual brands can develop their own identities, tone of voice, and target consumers without compromise.
            </p>
            <p>
              The additional brands under development at Zevrian Global LLC are not yet public. They will be announced when they are ready — which means when they meet the ZEVRIAN standard. We are building them with the same discipline that guides everything else we do.
            </p>
          </div>
        </div>
      </section>

      {/* Private Label Scaling */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Tag className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-[--text-primary]">Private Label Scaling</h2>
        </div>
        <div className="space-y-5 text-[--text-muted] leading-relaxed">
          <p>
            The transition from Amazon wholesale reseller to private label brand owner is the most significant step in Zevrian Global LLC&apos;s near-term roadmap. Private label means developing products under the ZEVRIAN name, with our own specifications, our own packaging, and our own manufacturing relationships — rather than reselling third-party branded goods.
          </p>
          <p>
            This transition gives us direct control over product quality at every stage, from material specification to finished goods inspection. It also enables us to build brand equity that is ours — not borrowed from the manufacturers we currently source from.
          </p>
          <p>
            We are approaching private label development deliberately and without shortcuts. Products will only carry the ZEVRIAN name when they have passed our full quality process. We are targeting our first private label products for 2025–2026, with the exact timeline subject to supplier development and quality validation.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link href="/suppliers">
              Become a Supply Partner <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
