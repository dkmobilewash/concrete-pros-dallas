import Link from 'next/link'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-brand-charcoal mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-gray mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button href="/">Back to Home</Button>
          <Button variant="secondary" href="/contact">Contact Us</Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-brand-charcoal mb-2">Our Services</h3>
            <p className="text-brand-gray text-sm mb-2">Driveways, patios, foundations, and more.</p>
            <Link href="/services" className="text-brand-orange hover:underline text-sm">
              View all services
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-brand-charcoal mb-2">Service Areas</h3>
            <p className="text-brand-gray text-sm mb-2">Serving Dallas and 18+ DFW cities.</p>
            <Link href="/service-areas" className="text-brand-orange hover:underline text-sm">
              View service areas
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-brand-charcoal mb-2">Get an Estimate</h3>
            <p className="text-brand-gray text-sm mb-2">Free quotes for any concrete project.</p>
            <a href={site.phoneHref} className="text-brand-orange hover:underline text-sm">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
