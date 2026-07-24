import { site } from '@/data/site'
import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  canonical,
  image,
  ogType = 'website',
  noindex = false,
}: {
  title: string
  description: string
  canonical: string
  image?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
}): Metadata {
  const ogImage = image ?? '/opengraph-image'
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: 'en_US',
      type: ogType,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
