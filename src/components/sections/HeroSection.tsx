import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'

interface HeroSectionProps {
  headline: string
  subhead: string
  ctaText?: string
  ctaHref?: string
  showPhoneCta?: boolean
}

export function HeroSection({
  headline,
  subhead,
  ctaText = 'Get Free Estimate',
  ctaHref = '/contact',
  showPhoneCta = false,
}: HeroSectionProps) {
  return (
    <section className="bg-brand-charcoal text-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">{headline}</h1>
        <p className="text-lg text-brand-gray-mid mt-4">{subhead}</p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button href={ctaHref}>{ctaText}</Button>
          {showPhoneCta && (
            <Button variant="secondary" href={site.phoneHref}>
              Call {site.phone}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
