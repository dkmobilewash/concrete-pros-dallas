import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { serviceCityContent } from '@/data/service-city-content'
import { serviceImages } from '@/data/images'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FaqSchema } from '@/components/seo/FaqSchema'
import { Button } from '@/components/ui/Button'

export const dynamicParams = false

export function generateStaticParams() {
  const params: { serviceSlug: string; citySlug: string }[] = []
  for (const service of services) {
    for (const city of cities) {
      params.push({ serviceSlug: service.slug, citySlug: city.slug })
    }
  }
  return params
}

export function generateMetadata({
  params,
}: {
  params: { serviceSlug: string; citySlug: string }
}): Metadata {
  const content = serviceCityContent[`${params.serviceSlug}/${params.citySlug}`]
  if (!content) return {}
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: `${site.baseUrl}/${params.serviceSlug}/${params.citySlug}`,
  })
}

export default function ServiceCityPage({
  params,
}: {
  params: { serviceSlug: string; citySlug: string }
}) {
  const service = services.find((s) => s.slug === params.serviceSlug)
  const city = cities.find((c) => c.slug === params.citySlug)
  if (!service || !city) notFound()

  const content = serviceCityContent[`${params.serviceSlug}/${params.citySlug}`]
  if (!content) notFound()

  const images = serviceImages[service.slug]

  const breadcrumbItems = [
    { name: site.name, url: site.baseUrl },
    { name: service.name, url: `${site.baseUrl}/services/${service.slug}` },
    { name: `${service.name} in ${city.name}`, url: `${site.baseUrl}/${service.slug}/${city.slug}` },
  ]

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}, TX`,
    description: content.metaDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      telephone: site.phone,
      url: site.baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.city,
        addressRegion: site.address.stateCode,
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${city.name}, TX`,
    },
    serviceType: service.name,
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FaqSchema faqs={content.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-white">{service.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {content.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            {content.heroSubhead}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact">Get Free Estimate</Button>
            <Button variant="ghost" href={site.phoneHref}>
              <Phone className="w-4 h-4 mr-2" />
              {site.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {images && (
        <section className="bg-white pt-12 pb-0">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={images.hero}
                alt={`${service.name} in ${city.name}, TX by Dallas Concrete Pros`}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {content.intro.map((paragraph, i) => (
            <p key={i} className="text-brand-gray leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            Why Choose Dallas Concrete Pros for {service.name} in {city.name}?
          </h2>
          <p className="text-brand-gray leading-relaxed mb-8">
            {content.whyUs}
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {content.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-brand-charcoal">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            Our {service.name} Process in {city.name}
          </h2>
          <div className="space-y-6">
            {content.process.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal text-lg mb-1">
                    {item.step}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            {service.name} Across {city.name} Neighborhoods
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            {content.neighborhoodNote}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {city.neighborhoods.map((n) => (
              <span
                key={n}
                className="bg-white px-3 py-1.5 rounded-full text-sm text-brand-charcoal border border-brand-gray-mid"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            {service.name} Cost in {city.name}, TX
          </h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            {content.pricingNote}
          </p>
          <div className="bg-brand-gray-light rounded-lg p-6 border border-brand-gray-mid">
            <p className="text-brand-charcoal font-medium mb-2">
              Get an accurate quote for your project
            </p>
            <p className="text-brand-gray text-sm mb-4">
              Every property is different. Contact us for a free on-site estimate tailored to your {city.name} property.
            </p>
            <Button href="/contact">
              Request Free Estimate <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">
            {service.name} in {city.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {content.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-brand-gray-mid">
                <h3 className="font-semibold text-brand-charcoal mb-2">{faq.question}</h3>
                <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                {service.name} in Other Cities
              </h3>
              <ul className="space-y-2">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${service.slug}/${c.slug}`}
                      className="text-brand-orange hover:underline flex items-center gap-1"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {service.name} in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                Other Services in {city.name}
              </h3>
              <ul className="space-y-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}/${city.slug}`}
                      className="text-brand-orange hover:underline flex items-center gap-1"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {s.name} in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready for {service.name} in {city.name}?
          </h2>
          <p className="text-lg mb-8">
            Get a free, no-obligation estimate for your {city.name} property today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="secondary"
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-brand-orange"
            >
              Get Free Estimate
            </Button>
            <Button variant="ghost" href={site.phoneHref}>
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
