import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Truck, Star, ArrowRight, Package, Home as HomeIcon, Briefcase, Sparkles } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CardGrid } from '@/components/sections/CardGrid'
import { NewsletterCapture } from '@/components/sections/NewsletterCapture'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Home | ZEVRIAN — Premium Essentials for Modern Life',
  description:
    'Zevrian Global LLC delivers premium consumer essentials through Amazon FBA, with a vision to become a multi-brand global consumer goods company headquartered in Wyoming.',
  path: '/',
})

const AMAZON_STORE_URL = process.env.AMAZON_STORE_URL ?? 'https://www.amazon.com/stores/ZEVRIAN'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zevrian.com'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zevrian Global LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/og/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@zevrian.com',
  },
  sameAs: [AMAZON_STORE_URL],
}

const TRUST_PILLARS = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Quality Sourcing',
    body: 'Every product in our range is evaluated against strict material, safety, and durability criteria before it reaches our customers.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Amazon FBA Fulfillment',
    body: "Zevrian Direct ships through Amazon's fulfillment network — reliable, fast, and backed by world-class logistics infrastructure.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Customer-First Approach',
    body: 'We design our product selection and operations around the needs of the modern consumer, prioritising value, reliability, and experience.',
  },
]

const PRODUCT_CATEGORIES = [
  {
    icon: <HomeIcon className="w-6 h-6" />,
    name: 'Home & Kitchen',
    description:
      'Thoughtfully designed essentials for every room — from organisation solutions to everyday kitchen tools built to last.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    name: 'Office & Workspace',
    description:
      'Premium desk accessories and workspace essentials that elevate productivity and bring a sense of order to your environment.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    name: 'Household Essentials',
    description:
      'Reliable, practical products for daily household needs — chosen for quality, durability, and genuine everyday usefulness.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    name: 'Lifestyle Products',
    description:
      'Curated lifestyle accessories that complement how modern people live, work, and move through the world.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />

      {/* Hero */}
      <Hero
        headline="Premium Essentials for Modern Life"
        subheading="Zevrian Global LLC is building a portfolio of premium consumer goods brands, starting with quality everyday essentials delivered through Amazon FBA."
        cta={{ label: 'Explore Products', href: '/products' }}
        secondaryCta={{ label: 'Partner With Us', href: '/suppliers' }}
      />

      {/* Brand Introduction */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="A Different Kind of Consumer Goods Company"
              align="left"
            />
            <p className="mt-6 text-[--text-muted] leading-relaxed">
              Zevrian Global LLC was founded with a clear mission: to build quality consumer brands that stand the
              test of time. We operate in the Amazon marketplace today, with a long-term vision that extends well
              beyond it.
            </p>
            <p className="mt-4 text-[--text-muted] leading-relaxed">
              From our base in Sheridan, Wyoming, we are building the infrastructure, supplier relationships, and
              brand equity needed to scale into a multi-brand global consumer goods company.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/about">
                  Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-charcoal-50 border border-border p-10 text-center">
            <p className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent mb-4">
              ZEVRIAN
            </p>
            <p className="text-sm text-[--text-muted] uppercase tracking-widest">
              Premium Essentials for Modern Life
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal dark:bg-charcoal-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">Our Mission</p>
          <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            &ldquo;To source, develop, and scale quality consumer products that improve everyday life — starting with
            essentials, building toward a global brand portfolio.&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-400 text-sm">
            Zevrian Global LLC &mdash; Sheridan, Wyoming, USA
          </p>
        </div>
      </section>

      {/* Product Focus Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Product Focus Areas"
          subtitle="We focus on four key consumer categories where quality, design, and reliability are most valued by modern buyers."
          className="mb-12"
        />
        <CardGrid cols={4}>
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-border bg-surface-light dark:bg-charcoal-50 p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-[--text-primary]">{cat.name}</h3>
              <p className="text-sm text-[--text-muted] leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </CardGrid>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/products">View All Categories</Link>
          </Button>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-charcoal-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Zevrian" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.title} className="text-center px-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-[--text-primary] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[--text-muted] leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Excellence Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <SectionHeading
          title="Powered by Amazon FBA"
          subtitle="Zevrian Direct operates on Amazon's world-class fulfillment infrastructure — ensuring fast, reliable delivery and a premium customer experience on every order."
          className="mb-10"
        />
        <Button asChild size="lg">
          <Link href="/amazon-excellence">
            Discover Zevrian Direct <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-gray-400 text-sm mb-8">
            Get updates on new product launches, brand news, and partnership opportunities from Zevrian Global LLC.
          </p>
          <NewsletterCapture className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" />
        </div>
      </section>
    </>
  )
}
