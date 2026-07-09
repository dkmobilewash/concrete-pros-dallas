import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { HeroSection } from '@/components/sections/HeroSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Concrete Services Dallas TX',
  description:
    'Full-service concrete contractor in Dallas, TX. Driveways, patios, foundations, stamped concrete, repair, resurfacing, retaining walls, and commercial concrete. Call 214-466-2536.',
  canonical: `${site.baseUrl}/services`,
})

const descriptions: Record<string, string> = {
  'concrete-driveways':
    'Durable, crack-resistant driveways built for Texas heat and heavy vehicles.',
  'concrete-patios':
    'Custom patios designed for outdoor living and year-round entertaining.',
  'concrete-walkways':
    'Safe, slip-resistant walkways connecting your home with style.',
  'concrete-foundations':
    'Solid foundations engineered for North Texas soil conditions.',
  'retaining-walls':
    'Engineered walls that manage soil and add curb appeal.',
  'stamped-concrete':
    'The look of natural stone or brick at a fraction of the cost.',
  'commercial-concrete':
    'Heavy-duty solutions for parking lots, docks, and commercial properties.',
  'concrete-repair':
    'Fix cracks, spalling, settling, and trip hazards without full replacement.',
  'concrete-resurfacing':
    'Renew existing concrete with a durable overlay and fresh finish.',
}

export default function ServicesIndexPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Services', url: `${site.baseUrl}/services` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <HeroSection
        headline="Concrete Services in Dallas, TX"
        subhead="From residential driveways and patios to commercial parking lots and foundations, Dallas Concrete Pros delivers professional concrete work across the Dallas-Fort Worth metroplex."
        showPhoneCta
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-4">
            Our Concrete Services
          </h2>
          <p className="text-brand-gray text-center max-w-2xl mx-auto mb-10">
            Whether you need a new concrete driveway in Dallas, a stamped patio in Plano,
            or commercial concrete work in Fort Worth, our experienced crews handle it all.
            Every project includes a free on-site estimate, quality materials, and professional
            finishing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                icon={service.icon}
                description={descriptions[service.slug] ?? service.heroSubhead}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
