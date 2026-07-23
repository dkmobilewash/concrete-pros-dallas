import { site } from '@/data/site'
import type { Metadata } from 'next'

// Single source of truth for per-page metadata. Structured data (JSON-LD) is
// intentionally handled by dedicated <*Schema> components rather than passed
// here, so pages compose exactly the schema types they need.
export function buildMetadata({
  title,
  description,
  canonical,
  image,
  noindex = false,
}: {
  title: string
  description: string
  canonical: string
  /** Absolute or root-relative OG/Twitter image. Falls back to the site-wide
   *  opengraph-image/twitter-image route conventions when omitted. */
  image?: string
  noindex?: boolean
}): Metadata {
  // Default to the site-wide generated OG image so every page has og:image +
  // twitter:image (explicit images are required because a child route's
  // openGraph overrides the inherited opengraph-image file convention).
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
      type: 'website',
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
