import { site } from '@/data/site'

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
      name: site.name,
      telephone: site.phone,
      url: site.baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.city,
        addressRegion: site.address.stateCode,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: site.address.state,
    },
    serviceType: name,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
