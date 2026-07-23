'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-brand-charcoal text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-16">
        <span className="text-xl font-bold">{site.name}</span>
        <button onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
        {/* Services */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-mid mb-3">
            Services
          </h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="block text-brand-gray-mid hover:text-white transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-mid mb-3">
            Service Areas
          </h3>
          <ul className="space-y-2">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  onClick={onClose}
                  className="block text-brand-gray-mid hover:text-white transition"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Page links */}
        <div className="mb-6 space-y-2">
          <Link
            href="/about"
            onClick={onClose}
            className="block text-brand-gray-mid hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="block text-brand-gray-mid hover:text-white transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-brand-gray-mid hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <a
          href={site.phoneHref}
          onClick={onClose}
          className="block w-full text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Call {site.phone}
        </a>
      </div>
    </div>
  )
}
