import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { ProjectGallery } from '@/components/sections/ProjectGallery'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { heroImage } from '@/data/images'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'

const meta = buildMetadata({
  title: 'Concrete Contractors Dallas TX | Dallas Concrete Pros',
  description:
    'Dallas Concrete Pros — trusted concrete contractors in Dallas, TX. Driveways, patios, foundations, stamped concrete, repair, and commercial concrete across the DFW metroplex. Call 214-466-2536 for a free estimate.',
  canonical: site.baseUrl,
})

export const metadata: Metadata = {
  ...meta,
  title: {
    absolute: 'Concrete Contractors Dallas TX | Dallas Concrete Pros',
  },
}

const homeFaqs = [
  {
    question: 'How much does a concrete driveway cost in Dallas?',
    answer:
      'Concrete driveway costs in Dallas typically range from $6 to $15 per square foot depending on size, thickness, finish, and site preparation. A standard two-car driveway usually runs between $2,400 and $9,000. Contact us for a free, no-obligation estimate tailored to your property.',
  },
  {
    question: 'How long does concrete take to cure in Texas heat?',
    answer:
      'In the Dallas heat, concrete typically reaches initial set within 24–48 hours and full cure strength in about 28 days. We take precautions during hot-weather pours — including proper curing compounds and timing — to prevent rapid moisture loss and surface cracking.',
  },
  {
    question: 'Do you offer free estimates for concrete work in Dallas?',
    answer:
      'Yes, we provide free on-site estimates for all residential and commercial concrete projects throughout the Dallas-Fort Worth area. Call us at 214-466-2536 or submit our online form to schedule yours.',
  },
  {
    question: 'What cities do you serve in the Dallas-Fort Worth area?',
    answer:
      'We serve Dallas, Fort Worth, Frisco, McKinney, Plano, Allen, Prosper, Southlake, Flower Mound, Celina, Rockwall, Irving, Garland, Mesquite, Lewisville, Richardson, Carrollton, Denton, and the surrounding communities throughout the DFW metroplex.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, Dallas Concrete Pros is fully licensed and insured. We carry general liability and workers compensation insurance to protect our clients and crew on every project.',
  },
  {
    question: 'What types of concrete services do you offer?',
    answer:
      'We provide concrete driveways, patios, walkways, foundations, retaining walls, stamped concrete, concrete repair, concrete resurfacing and sealing, and full commercial concrete services including parking lots, loading docks, and ADA-compliant flatwork.',
  },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection
        headline="Concrete Contractors in Dallas, TX"
        subhead="Dallas Concrete Pros delivers professional concrete installation, repair, and resurfacing for residential and commercial properties across the Dallas-Fort Worth metroplex. From driveways and patios to foundations and commercial flatwork — get a free estimate today."
        showPhoneCta
        backgroundImage={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-6">
            Dallas&apos;s Trusted Concrete Company
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            Looking for reliable concrete contractors in Dallas, TX? Dallas Concrete Pros
            is a full-service concrete company serving homeowners and businesses throughout
            the Dallas-Fort Worth metroplex. Whether you need a new concrete driveway, a
            custom patio, a slab foundation, or commercial concrete work, our experienced
            crews deliver quality results on every project.
          </p>
          <p className="text-brand-gray leading-relaxed mb-4">
            As one of the top-rated concrete companies in Dallas, we handle everything from
            small residential walkway installations to large-scale commercial pours. Our
            services include concrete paving, stamped concrete, retaining walls, concrete
            repair, and resurfacing — all backed by honest pricing and clear communication
            from estimate to completion.
          </p>
          <p className="text-brand-gray leading-relaxed">
            We serve Dallas and surrounding cities including{' '}
            <Link href="/service-areas/fort-worth" className="text-brand-orange hover:underline">Fort Worth</Link>,{' '}
            <Link href="/service-areas/plano" className="text-brand-orange hover:underline">Plano</Link>,{' '}
            <Link href="/service-areas/frisco" className="text-brand-orange hover:underline">Frisco</Link>,{' '}
            <Link href="/service-areas/mckinney" className="text-brand-orange hover:underline">McKinney</Link>,{' '}
            and{' '}
            <Link href="/service-areas" className="text-brand-orange hover:underline">18+ cities across the DFW area</Link>.
            Call <a href={site.phoneHref} className="text-brand-orange hover:underline font-medium">{site.phone}</a> for
            a free estimate on your next concrete project.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <ServiceAreasSection />
      <ProjectGallery />
      <TestimonialsSection />
      <FaqSection faqs={homeFaqs} />
      <CtaSection />
    </>
  )
}
