import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

interface LocalBusinessSchemaProps {
  city?: string
}

export function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: site.baseUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || site.address.city,
      addressRegion: site.address.stateCode,
      addressCountry: 'US',
    },
    areaServed: cities.map(c => ({
      '@type': 'Place',
      name: c.name,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Services',
      itemListElement: services.slice(0, 5).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
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
