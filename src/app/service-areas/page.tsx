import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { cities } from '@/data/cities'
import { HeroSection } from '@/components/sections/HeroSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { CityCard } from '@/components/ui/CityCard'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas — Concrete Contractor Dallas-Fort Worth',
  description:
    'Dallas Concrete Pros serves Dallas, Fort Worth, Plano, Frisco, McKinney, and 15+ cities across the DFW metroplex. Call 214-466-2536 for a free estimate.',
  canonical: `${site.baseUrl}/service-areas`,
})

export default function ServiceAreasIndexPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas' },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Service Areas', url: `${site.baseUrl}/service-areas` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <HeroSection
        headline="Concrete Contractors Serving Dallas-Fort Worth"
        subhead="We provide professional concrete services to homeowners and businesses across the DFW metroplex. Find your city below to learn more about our work in your area."
        showPhoneCta
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <CityCard
                key={city.slug}
                slug={city.slug}
                name={city.name}
                county={city.county}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-gray">
            Don&apos;t see your city listed? We serve the entire Dallas-Fort Worth
            metroplex.{' '}
            <Link href="/contact" className="text-brand-orange hover:underline font-medium">
              Contact us
            </Link>{' '}
            to discuss your project — we likely serve your area.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
