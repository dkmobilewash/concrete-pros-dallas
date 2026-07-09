import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = buildMetadata({
  title: 'About Dallas Concrete Pros',
  description:
    'Learn about Dallas Concrete Pros — professional concrete contractors serving Dallas, TX and surrounding areas. Licensed, insured, and committed to quality.',
  canonical: `${site.baseUrl}/about`,
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About {site.name}
          </h1>
          <p className="text-lg text-brand-gray-mid mt-4">
            Professional concrete contractors serving Dallas and the
            surrounding communities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              Who We Are
            </h2>
            {/* [PLACEHOLDER] Replace with actual company story and background */}
            <p className="text-brand-gray leading-relaxed">
              {site.name} is a full-service concrete contracting company based
              in Dallas, Texas. We specialize in residential and commercial
              concrete work, from driveways and patios to foundations and
              retaining walls. Our professional crews bring years of hands-on
              experience to every project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              What We Stand For
            </h2>
            <p className="text-brand-gray leading-relaxed">
              We believe in doing the job right the first time. That means
              proper site preparation, quality materials, precision finishing,
              and thorough cleanup. We communicate clearly throughout the
              process so you always know what to expect and when.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              Licensed & Insured
            </h2>
            <p className="text-brand-gray leading-relaxed">
              {site.name} carries full general liability and workers
              compensation insurance. We are committed to safe work practices
              and protecting our clients and crew on every job site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              Our Service Area
            </h2>
            {/* [PLACEHOLDER] Replace with more specific service area details */}
            <p className="text-brand-gray leading-relaxed">
              We serve homeowners and businesses throughout the Dallas–Fort
              Worth metroplex, including Frisco, McKinney, Plano, Allen,
              Prosper, Southlake, Flower Mound, Celina, Rockwall, and the
              surrounding communities. No matter where you are in the DFW area,
              we are ready to help with your next concrete project.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
