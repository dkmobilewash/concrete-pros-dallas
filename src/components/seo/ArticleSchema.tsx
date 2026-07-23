import { site } from '@/data/site'

interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  slug: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  slug,
}: ArticleSchemaProps) {
  const url = `${site.baseUrl}/blog/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    image: `${site.baseUrl}/opengraph-image`,
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
