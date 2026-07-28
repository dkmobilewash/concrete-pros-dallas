export const site = {
  name: 'Dallas Concrete Pros',
  phone: '214-466-2536',
  phoneHref: 'tel:+12144662536',
  email: 'info@dallasconcretepros.net',
  address: {
    streetAddress: '1999 Bryan St',
    city: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    postalCode: '75201',
  },
  geo: {
    latitude: 32.7767,
    longitude: -96.797,
  },
  aggregateRating: null as { ratingValue: number; reviewCount: number } | null,
  hours: {
    weekdays: 'Monday–Saturday: 8:00 AM – 6:00 PM',
    weekend: 'Sunday: Closed',
  },
  // Canonical production origin — single source of truth for canonical tags,
  // metadataBase, JSON-LD @id/url, the sitemap, and robots. Set to the ONE
  // primary domain (do not point at the duplicate domain). Overridable per
  // environment via NEXT_PUBLIC_SITE_URL.
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.concreteprosdallas.com',
  logo: '/images/concrete-driveway-installation.jpg',
  ogImage: '/images/concrete-driveway-installation.jpg',
  // Entity links for LocalBusiness `sameAs` (Google Business Profile + socials).
  sameAs: [
    'https://www.google.com/maps/place/Dallas+Concrete+Pros/',
  ],
  primaryKeywords: [
    'Dallas Concrete Contractors',
    'Concrete Contractors Dallas TX',
    'Concrete Company Dallas',
  ],
}
