import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { ContactForm } from './ContactForm'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us for a Free Concrete Estimate',
  description: `Get a free concrete estimate in Dallas, TX. Call ${site.phone} or fill out our form. Driveways, patios, foundations, and more.`,
  canonical: `${site.baseUrl}/contact`,
})

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      <section className="bg-brand-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get a Free Concrete Estimate in Dallas
          </h1>
          <p className="text-lg text-brand-gray-mid mt-4">
            Tell us about your project and we will get back to you within one
            business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-brand-charcoal mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-brand-gray hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-orange" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-brand-gray hover:text-brand-orange transition-colors"
                >
                  <Mail className="w-5 h-5 text-brand-orange" />
                  {site.email}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-charcoal mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-orange" />
                Business Hours
              </h3>
              <p className="text-brand-gray">{site.hours.weekdays}</p>
              <p className="text-brand-gray">{site.hours.weekend}</p>
            </div>

            <div className="bg-brand-gray-light rounded-lg p-6">
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                Why Choose Us?
              </h3>
              <ul className="text-brand-gray space-y-2 text-sm">
                <li>Free, no-obligation estimates</li>
                <li>Licensed and insured</li>
                <li>Professional, experienced crews</li>
                <li>Serving Dallas and surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
