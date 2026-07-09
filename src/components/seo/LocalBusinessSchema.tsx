import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

interface LocalBusinessSchemaProps {
  city?: string
}

export function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: site.baseUrl,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || site.address.city,
      addressRegion: site.address.stateCode,
      addressCountry: 'US',
    },
    areaServed: cities.map(c => ({
      '@type': 'City',
      name: `${c.name}, TX`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.metaDescription,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
