import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { FaqSchema } from '@/components/seo/FaqSchema'

interface FaqSectionProps {
  faqs: { question: string; answer: string }[]
  heading?: string
}

export function FaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
}: FaqSectionProps) {
  return (
    <section className="bg-brand-gray-light py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">
          {heading}
        </h2>
        <FaqAccordion faqs={faqs} />
        <FaqSchema faqs={faqs} />
      </div>
    </section>
  )
}
