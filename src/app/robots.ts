import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

// Derived from site.baseUrl so the sitemap/host reference always matches the
// canonical domain (never hardcode a domain here).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl,
  }
}
