import { ServiceCard } from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

const descriptions: Record<string, string> = {
  'concrete-driveways':
    'Durable, crack-resistant driveways built for Texas heat and heavy vehicles.',
  'concrete-patios':
    'Custom patios designed for outdoor living and year-round entertaining.',
  'concrete-walkways':
    'Safe, slip-resistant walkways connecting your home with style.',
  'concrete-foundations':
    'Solid foundations engineered for North Texas soil conditions.',
  'retaining-walls':
    'Engineered walls that manage soil and add curb appeal.',
  'stamped-concrete':
    'The look of natural stone or brick at a fraction of the cost.',
  'commercial-concrete':
    'Heavy-duty solutions for parking lots, docks, and commercial properties.',
}

export function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center">
          Our Concrete Services
        </h2>
        <p className="text-brand-gray text-center mt-3 mb-10">
          From driveways to commercial projects, we handle it all.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              name={service.name}
              icon={service.icon}
              description={descriptions[service.slug] ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
