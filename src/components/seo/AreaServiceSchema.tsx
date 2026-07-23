import { site } from '@/data/site'

interface AreaServiceSchemaProps {
  city: string
  slug: string
  description: string
}

/**
 * ProfessionalService schema for a service-area/city hub page, with areaServed
 * scoped to that specific city (not a generic DFW/State value).
 */
export function AreaServiceSchema({
  city,
  slug,
  description,
}: AreaServiceSchemaProps) {
  const url = `${site.baseUrl}/service-areas/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': url,
    url,
    name: `${site.name} — ${city}, TX`,
    description,
    telephone: site.phone,
    email: site.email,
    priceRange: '$$',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': site.baseUrl,
      name: site.name,
      url: site.baseUrl,
    },
    areaServed: {
      '@type': 'City',
      name: `${city}, TX`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
