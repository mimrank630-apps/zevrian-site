'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/brand', label: 'Brand' },
  { href: '/amazon-excellence', label: 'Amazon Excellence' },
  { href: '/quality', label: 'Quality Assurance' },
  { href: '/vision', label: 'Future Vision' },
]

const PRIMARY_LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/contact', label: 'Contact' },
]

const ALL_LINKS = [
  { href: '/', label: 'Home' },
  ...PRIMARY_LINKS,
  ...COMPANY_LINKS,
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMegaMenuOpen(false)
  }, [pathname])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-b border-gold-muted shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-[0.12em] text-charcoal dark:text-white hover:text-gold transition-colors"
            aria-label="ZEVRIAN — Home"
          >
            ZEVRIAN
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold',
                  isActive(link.href)
                    ? 'text-gold font-semibold'
                    : 'text-[--text-muted]'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Our Company mega menu trigger */}
            <div className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold',
                  COMPANY_LINKS.some((l) => isActive(l.href))
                    ? 'text-gold font-semibold'
                    : 'text-[--text-muted]'
                )}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
                onClick={() => setMegaMenuOpen((v) => !v)}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                aria-label="Our Company menu"
              >
                Our Company
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform',
                    megaMenuOpen && 'rotate-180'
                  )}
                />
              </button>

              {megaMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl backdrop-blur-md bg-white/95 dark:bg-charcoal-50/95 border border-gold-muted shadow-xl py-2"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  {COMPANY_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'block px-4 py-2.5 text-sm transition-colors hover:text-gold hover:bg-gold/5',
                        isActive(link.href)
                          ? 'text-gold font-semibold'
                          : 'text-[--text-primary]'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={
                  resolvedTheme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                className="p-2 rounded-lg text-[--text-muted] hover:text-gold hover:bg-gold/10 transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Hamburger (mobile only) */}
            <button
              className="lg:hidden p-2 rounded-lg text-[--text-muted] hover:text-gold hover:bg-gold/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        className={cn(
          'fixed top-16 right-0 bottom-0 z-40 w-72 backdrop-blur-md bg-white/95 dark:bg-charcoal/95 border-l border-gold-muted lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col p-6 gap-1">
          {ALL_LINKS.slice(0, -2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:text-gold hover:bg-gold/10',
                isActive(link.href)
                  ? 'text-gold font-semibold bg-gold/5'
                  : 'text-[--text-primary]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            {ALL_LINKS.slice(-2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs text-[--text-muted] hover:text-gold transition-colors block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
