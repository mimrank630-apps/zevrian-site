import type { Metadata } from 'next'
import Link from 'next/link'
import { Home as HomeIcon, Briefcase, Package, Sparkles, ArrowRight, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CategoryCard } from '@/components/sections/CategoryCard'
import { CardGrid } from '@/components/sections/CardGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/metadata'
import { AMAZON_STORE_URL, hasAmazonStore } from '@/lib/amazon'

export const metadata: Metadata = buildPageMetadata({
  title: 'Products | ZEVRIAN — Premium Essentials for Modern Life',
  description:
    'Explore ZEVRIAN product categories — Home & Kitchen, Office & Workspace, Household Essentials, and Lifestyle Products. Shop the full range on Amazon through Zevrian Direct.',
  path: '/products',
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ZEVRIAN Product Categories',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home & Kitchen' },
    { '@type': 'ListItem', position: 2, name: 'Office & Workspace' },
    { '@type': 'ListItem', position: 3, name: 'Household Essentials' },
    { '@type': 'ListItem', position: 4, name: 'Lifestyle Products' },
  ],
}

const CATEGORIES = [
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
      'Premium desk accessories and workspace essentials that elevate productivity and bring order to your environment.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    name: 'Household Essentials',
    description:
      'Reliable, practical products for daily household needs — chosen for quality, durability, and genuine usefulness.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    name: 'Lifestyle Products',
    description:
      'Curated accessories that complement how modern people live, work, and move through the world.',
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <JsonLd schema={itemListSchema} />

      {/* Hero */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            {hasAmazonStore ? 'Zevrian Direct' : 'Coming Soon'}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Product Categories
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {hasAmazonStore
              ? 'Browse our product categories and shop the full ZEVRIAN range on Amazon through Zevrian Direct.'
              : 'ZEVRIAN products are launching on Amazon soon. Explore our product categories below.'}
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Shop by Category"
          subtitle={
            hasAmazonStore
              ? 'All ZEVRIAN products are available through the Zevrian Direct store on Amazon.'
              : 'ZEVRIAN products across four categories — launching on Amazon soon.'
          }
          className="mb-12"
        />
        <CardGrid cols={4}>
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.name}
              icon={cat.icon}
              name={cat.name}
              description={cat.description}
              amazonUrl={AMAZON_STORE_URL}
            />
          ))}
        </CardGrid>
      </section>

      {/* Amazon CTA */}
      <section className="py-20 bg-surface-light dark:bg-charcoal-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {hasAmazonStore ? (
            <>
              <SectionHeading
                title="Fulfilled by Amazon"
                subtitle="ZEVRIAN products ship through Amazon's world-class FBA network — ensuring fast, reliable delivery and a premium post-purchase experience on every order."
                className="mb-8"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <a href={AMAZON_STORE_URL!} target="_blank" rel="noopener noreferrer">
                    Visit Zevrian Direct on Amazon
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/amazon-excellence">
                    How FBA Works <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <SectionHeading
                title="Launching on Amazon Soon"
                subtitle="ZEVRIAN products will be available through Amazon FBA — fast, reliable delivery backed by world-class fulfillment infrastructure."
                className="mb-8"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="/amazon-excellence">
                    Learn About Our FBA Model <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Get Notified at Launch
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
