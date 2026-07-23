import { site } from '@/data/site'
import { cities } from '@/data/cities'

interface ServiceSchemaProps {
  name: string
  description: string
}

export function ServiceSchema({ name, description }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${site.baseUrl}/#organization`,
      name: site.name,
      telephone: site.phone,
      url: site.baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.city,
        addressRegion: site.address.stateCode,
        postalCode: site.address.postalCode,
        addressCountry: 'US',
      },
    },
    areaServed: cities.map(c => ({
      '@type': 'City',
      name: `${c.name}, TX`,
    })),
    serviceType: name,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
