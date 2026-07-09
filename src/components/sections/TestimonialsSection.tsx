import { TestimonialCard } from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    quote:
      'They poured our new driveway in two days and the finish is flawless. The crew was professional and cleaned up everything before they left.',
    attribution: 'Homeowner in Dallas',
  },
  {
    quote:
      'We got quotes from five companies and Dallas Concrete Pros gave us the best combination of price and quality. Our patio turned out beautiful.',
    attribution: 'Homeowner in Frisco',
  },
  {
    quote:
      'From the estimate to the final walkthrough, communication was excellent. They explained every step and delivered exactly what they promised.',
    attribution: 'Homeowner in Plano',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-brand-charcoal text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              attribution={testimonial.attribution}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
