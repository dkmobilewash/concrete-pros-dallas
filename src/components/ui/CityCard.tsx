import Link from 'next/link'

interface CityCardProps {
  slug: string
  name: string
  county: string
}

export function CityCard({ slug, name, county }: CityCardProps) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-lg hover:border-brand-orange border border-transparent transition-all"
    >
      <h3 className="text-lg font-semibold text-brand-charcoal mb-1">{name}</h3>
      <p className="text-brand-gray text-sm mb-4">{county}</p>
      <span className="text-brand-orange font-semibold text-sm">
        View Services &rarr;
      </span>
    </Link>
  )
}
