import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'

interface HeroSectionProps {
  headline: string
  subhead: string
  ctaText?: string
  ctaHref?: string
  showPhoneCta?: boolean
  backgroundImage?: { src: string; alt: string }
}

export function HeroSection({
  headline,
  subhead,
  ctaText = 'Get Free Estimate',
  ctaHref = '/contact',
  showPhoneCta = false,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative bg-brand-charcoal text-white py-20 md:py-28 overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-charcoal/75" />
        </>
      )}
      <div className="relative max-w-5xl mx-auto px-4">
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
