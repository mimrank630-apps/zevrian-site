import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zevrian.com'

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: 'ZEVRIAN',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string
  description: string
  path: string
  ogImage?: string
}): Metadata {
  const url = `${siteUrl}${path}`
  const image = ogImage ?? `/og${path === '/' ? '/home' : path}.png`
  return {
    ...baseMetadata,
    title,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: url,
    },
  }
}
