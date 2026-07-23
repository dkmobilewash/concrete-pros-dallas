'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import MobileNav from './MobileNav'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-brand-charcoal text-white ${
          scrolled ? 'border-b border-brand-gray-mid/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-brand-orange transition">
                Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                <div className="bg-brand-charcoal border border-brand-gray-mid/20 rounded-md shadow-lg py-2 min-w-[220px]">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-brand-gray-mid hover:text-white hover:bg-brand-gray-mid/20 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Areas dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-brand-orange transition">
                Service Areas
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                <div className="bg-brand-charcoal border border-brand-gray-mid/20 rounded-md shadow-lg py-2 min-w-[200px] max-h-[400px] overflow-y-auto">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="block px-4 py-2 text-sm text-brand-gray-mid hover:text-white hover:bg-brand-gray-mid/20 transition"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm font-medium hover:text-brand-orange transition"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-brand-orange transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-brand-orange transition"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <a
            href={site.phoneHref}
            className="hidden lg:flex bg-brand-orange hover:bg-brand-orange-dark px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            Call {site.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
