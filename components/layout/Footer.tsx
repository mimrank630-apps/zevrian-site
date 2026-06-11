import Link from 'next/link'
import { NewsletterCapture } from '@/components/sections/NewsletterCapture'

const NAV_GROUPS = [
  {
    label: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/brand', label: 'Brand' },
      { href: '/amazon-excellence', label: 'Amazon Excellence' },
      { href: '/quality', label: 'Quality Assurance' },
      { href: '/vision', label: 'Future Vision' },
    ],
  },
  {
    label: 'Work With Us',
    links: [
      { href: '/suppliers', label: 'Suppliers & Partners' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Shop',
    links: [
      { href: '/products', label: 'Product Categories' },
      {
        href: process.env.AMAZON_STORE_URL ?? 'https://www.amazon.com/stores/ZEVRIAN',
        label: 'Zevrian Direct on Amazon',
        external: true,
      },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-extrabold tracking-[0.12em] text-gold mb-4 block" aria-label="ZEVRIAN — Home">
              ZEVRIAN
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Premium Essentials for Modern Life. A global consumer goods company building quality brands for the modern world.
            </p>
            <NewsletterCapture compact />
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {group.label}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {year} Zevrian Global LLC. All rights reserved.</span>
            <span className="hidden sm:block">·</span>
            <span>Sheridan, Wyoming, USA</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <a
              href="mailto:info@zevrian.com"
              className="hover:text-gold transition-colors"
            >
              info@zevrian.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
