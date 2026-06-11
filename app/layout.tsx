import type { Metadata } from 'next'
import { inter } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ZEVRIAN — Premium Essentials for Modern Life',
    template: '%s | ZEVRIAN — Premium Essentials for Modern Life',
  },
  description:
    'Zevrian Global LLC is a premium consumer goods company delivering quality essentials for modern living through Amazon FBA and private label expansion.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zevrian.com'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="zevrian_theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
