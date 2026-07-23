import { site } from '@/data/site'
import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
}: {
  title: string
  description: string
  canonical: string
  ogType?: 'website' | 'article'
  ogImage?: string
}): Metadata {
  const image = ogImage || `${site.baseUrl}${site.ogImage}`
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
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  }
}
