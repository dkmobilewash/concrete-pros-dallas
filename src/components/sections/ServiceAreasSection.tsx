import { CityCard } from '@/components/ui/CityCard'
import { cities } from '@/data/cities'

export function ServiceAreasSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">
          Serving Dallas and Surrounding Cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <CityCard
              key={city.slug}
              slug={city.slug}
              name={city.name}
              county={city.county}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
