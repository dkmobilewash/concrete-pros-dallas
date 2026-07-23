export const site = {
  name: 'Dallas Concrete Pros',
  phone: '214-466-2536',
  phoneHref: 'tel:+12144662536',
  email: 'info@dallasconcretepros.net',
  address: {
    city: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
  },
  // Geo coordinates for LocalBusiness schema (central Dallas, TX).
  geo: {
    latitude: 32.7767,
    longitude: -96.797,
  },
  // AggregateRating for schema. Leave null until REAL review counts exist —
  // fabricating ratings violates Google's structured-data policy. When you have
  // verified totals, set e.g. { ratingValue: 4.9, reviewCount: 87 }.
  aggregateRating: null as { ratingValue: number; reviewCount: number } | null,
  hours: {
    weekdays: 'Monday–Saturday: 8:00 AM – 6:00 PM',
    weekend: 'Sunday: Closed',
  },
  baseUrl: 'https://dallasconcretepros.net',
  primaryKeywords: [
    'Dallas Concrete Contractors',
    'Concrete Contractors Dallas TX',
    'Concrete Company Dallas',
  ],
}
