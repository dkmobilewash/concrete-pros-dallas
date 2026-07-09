import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'

export function CtaSection() {
  return (
    <section className="bg-brand-orange py-16 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Concrete Project?
        </h2>
        <p className="text-lg mb-8">
          Get a free estimate today. We serve Dallas and the surrounding areas.
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
  )
}
