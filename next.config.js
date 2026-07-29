/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

// Permanent 301s recovering URLs from the earlier build whose slugs/cities
// changed (GSC "Not found (404)" + "Duplicate" buckets). Targets all exist.
// NOTE: dropped suburbs (coppell, addison, etc.) currently redirect to the
// service-areas hub. To RECOVER a suburb as its own page, remove its redirect
// here and add it to cities.ts WITH full service×city content (the combo route
// 404s on any missing content entry).
const legacyRedirects = [
  // Renamed service pages
  { source: '/services/driveways', destination: '/services/concrete-driveways' },
  { source: '/services/patios', destination: '/services/concrete-patios' },
  { source: '/services/pool-decks', destination: '/services/concrete-patios' },
  { source: '/services/block-walls', destination: '/services/retaining-walls' },
  { source: '/services/foundations-slabs', destination: '/services/concrete-foundations' },
  // Suburbs dropped from the current service-area list
  { source: '/service-areas/addison', destination: '/service-areas' },
  { source: '/service-areas/arlington', destination: '/service-areas' },
  { source: '/service-areas/university-park', destination: '/service-areas' },
  { source: '/service-areas/grand-prairie', destination: '/service-areas' },
  // Removed page
  { source: '/gallery', destination: '/' },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }))
  },
}

module.exports = nextConfig
