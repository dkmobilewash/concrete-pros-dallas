import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-brand-orange font-bold text-sm tracking-wide">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mt-2">
          This page could not be found
        </h1>
        <p className="text-brand-gray mt-4">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            Back to Home
          </Link>
          <a
            href={site.phoneHref}
            className="border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            Call {site.phone}
          </a>
        </div>

        <div className="mt-12 text-left">
          <h2 className="text-lg font-bold text-brand-charcoal mb-4 text-center">
            Popular Concrete Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-brand-orange hover:underline font-medium"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
