import Link from 'next/link'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">{site.name}</h3>
            <div className="space-y-2 text-sm text-brand-gray-mid">
              <p>{site.hours.weekdays}</p>
              <p>{site.hours.weekend}</p>
              <p className="mt-3">
                <a
                  href={site.phoneHref}
                  className="text-brand-gray-mid hover:text-white transition"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand-gray-mid hover:text-white transition"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-gray-mid hover:text-white transition"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-brand-gray-mid hover:text-white transition"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-brand-gray-mid">
              <p>
                <a
                  href={site.phoneHref}
                  className="text-brand-gray-mid hover:text-white transition"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand-gray-mid hover:text-white transition"
                >
                  {site.email}
                </a>
              </p>
              <p className="mt-3">{site.hours.weekdays}</p>
              <p>{site.hours.weekend}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gray-mid/20 mt-8 pt-8 flex justify-between flex-wrap gap-4 text-sm text-brand-gray-mid">
          <p>&copy; {currentYear} Dallas Concrete Pros. All rights reserved.</p>
          <p>Licensed &amp; Insured Concrete Contractor in Dallas, TX</p>
        </div>
      </div>
    </footer>
  )
}
