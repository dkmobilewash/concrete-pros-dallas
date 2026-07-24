import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date('2025-07-20')
  const serviceUrls = services.map((s) => ({
    url: `${site.baseUrl}/services/${s.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const cityUrls = cities.map((c) => ({
    url: `${site.baseUrl}/service-areas/${c.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const serviceCityUrls: MetadataRoute.Sitemap = []
  for (const s of services) {
    for (const c of cities) {
      serviceCityUrls.push({
        url: `${site.baseUrl}/${s.slug}/${c.slug}`,
        lastModified: siteLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }
  const blogUrls = getAllPosts().map((post) => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  return [
    { url: site.baseUrl, lastModified: siteLastModified, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${site.baseUrl}/services`, lastModified: siteLastModified, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${site.baseUrl}/service-areas`, lastModified: siteLastModified, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${site.baseUrl}/about`, lastModified: siteLastModified, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${site.baseUrl}/contact`, lastModified: siteLastModified, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${site.baseUrl}/blog`, lastModified: siteLastModified, priority: 0.5, changeFrequency: 'weekly' },
    ...serviceUrls,
    ...cityUrls,
    ...serviceCityUrls,
    ...blogUrls,
  ]
}
