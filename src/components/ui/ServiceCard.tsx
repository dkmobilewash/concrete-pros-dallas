import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  slug: string
  name: string
  icon: string
  description: string
  image?: string
}

export function ServiceCard({ slug, name, description, image }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg hover:border-b-2 hover:border-brand-orange transition-all border-b-2 border-transparent"
    >
      {image && (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image}
            alt={`${name} by Dallas Concrete Pros`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-brand-charcoal mb-2">{name}</h3>
        <p className="text-brand-gray text-sm mb-4">{description}</p>
        <span className="text-brand-orange font-semibold text-sm">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  )
}
