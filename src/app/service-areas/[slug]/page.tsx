import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) return {}
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `${site.baseUrl}/service-areas/${city.slug}`,
  })
}

function getCityFaqs(cityName: string) {
  return [
    {
      question: `What concrete services do you offer in ${cityName}?`,
      answer: `We offer a full range of concrete services in ${cityName} including driveways, patios, walkways, foundations, retaining walls, stamped concrete, and commercial concrete work. Call ${site.phone} for a free estimate.`,
    },
    {
      question: `How much does concrete work cost in ${cityName}?`,
      answer: `Concrete costs in ${cityName} vary by project type and scope. Driveways typically range from $6-15 per square foot, patios $8-18 per square foot, and walkways $6-12 per square foot. Contact us for a detailed, project-specific quote.`,
    },
    {
      question: `Do you provide free estimates in ${cityName}?`,
      answer: `Yes, we provide free on-site estimates for all concrete projects in ${cityName} and the surrounding area. Call us at ${site.phone} or fill out our online contact form to schedule.`,
    },
    {
      question: `Are you licensed and insured for work in ${cityName}?`,
      answer: `Yes, Dallas Concrete Pros is fully licensed and insured for concrete work throughout ${cityName} and the greater Dallas-Fort Worth area. We carry general liability and workers compensation coverage.`,
    },
  ]
}

export default function CityPage({
  params,
}: {
  params: { slug: string }
}) {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) notFound()

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: city.name },
  ]

  const faqs = getCityFaqs(city.name)

  return (
    <>
      <LocalBusinessSchema city={city.name} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Service Areas', url: `${site.baseUrl}/service-areas` },
          { name: city.name, url: `${site.baseUrl}/service-areas/${city.slug}` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <HeroSection headline={city.headline} subhead={city.subhead} showPhoneCta />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-brand-gray leading-relaxed mb-4">{city.intro}</p>
          <p className="text-brand-gray leading-relaxed">
            Whether you live near {city.landmarks[0]} or in the{' '}
            {city.neighborhoods[0]} area, {site.name} provides professional
            concrete services tailored to {city.name}&apos;s unique building
            conditions and local requirements. From new construction to
            replacement and repair, we deliver quality results on every project.
          </p>
        </div>
      </section>

      <section className="bg-brand-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            Concrete Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:border-brand-orange border border-transparent transition-all group"
              >
                <span className="text-brand-charcoal group-hover:text-brand-orange font-medium">
                  {s.name}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            Concrete Work in {city.name} Neighborhoods
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            We serve homeowners and businesses across {city.name}&apos;s
            neighborhoods, including {city.neighborhoods.join(', ')}. Common
            projects in these areas include driveway replacements, new patio
            installations, and walkway additions.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Each neighborhood in {city.name} has its own character and building
            considerations. Whether you need foundation work in a newer
            development or a stamped concrete patio in an established
            neighborhood, our team has the experience to deliver outstanding
            results.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} heading={`Concrete FAQs for ${city.name}`} />

      <CtaSection />
    </>
  )
}
