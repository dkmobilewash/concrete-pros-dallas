import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Service } from "@/types";

interface ServicesGridProps {
  /** Optionally limit which services show (by slug). Defaults to all. */
  items?: Service[];
}

export function ServicesGrid({ items = services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.heroImage}
          alt={`${service.name} project in the Dallas area`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-dark md:text-2xl">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mid">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-medium uppercase tracking-wide text-accent">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
