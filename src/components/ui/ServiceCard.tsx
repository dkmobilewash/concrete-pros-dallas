import Link from 'next/link'
import { Car, Sofa, Footprints, Building2, Layers, Palette, Warehouse, Wrench, Paintbrush, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Car,
  Sofa,
  Footprints,
  Building2,
  Layers,
  Palette,
  Warehouse,
  Wrench,
  Paintbrush,
}

interface ServiceCardProps {
  slug: string
  name: string
  icon: string
  description: string
}

export function ServiceCard({ slug, name, icon, description }: ServiceCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <Link
      href={`/services/${slug}`}
      className="block bg-white rounded-lg shadow p-6 hover:shadow-lg hover:border-b-2 hover:border-brand-orange transition-all border-b-2 border-transparent"
    >
      {IconComponent && (
        <IconComponent size={24} className="text-brand-orange mb-4" />
      )}
      <h3 className="text-lg font-semibold text-brand-charcoal mb-2">{name}</h3>
      <p className="text-brand-gray text-sm mb-4">{description}</p>
      <span className="text-brand-orange font-semibold text-sm">
        Learn More &rarr;
      </span>
    </Link>
  )
}
