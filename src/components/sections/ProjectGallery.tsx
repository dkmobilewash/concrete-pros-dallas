import Image from 'next/image'
import { homepageGallery } from '@/data/images'

export function ProjectGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-3">
          Our Recent Work
        </h2>
        <p className="text-brand-gray text-center mb-10">
          Real projects completed by our crew across the Dallas-Fort Worth area.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {homepageGallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
