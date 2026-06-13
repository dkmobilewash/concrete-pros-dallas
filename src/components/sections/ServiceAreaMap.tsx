import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

/**
 * "Proudly Serving the DFW Metroplex" — intro copy plus a responsive set of
 * pill links to each city service-area page.
 */
export function ServiceAreaMap() {
  return (
    <div className="text-center">
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-mid">
        From the heart of Dallas out across the suburbs, Concrete Pros Of Dallas
        serves homeowners and businesses throughout the Dallas–Fort Worth
        metroplex. Find your city below or contact us for service anywhere in DFW.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {locations.map((l) => (
          <Link
            key={l.slug}
            href={`/service-areas/${l.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 font-display text-sm font-medium text-primary shadow-sm transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {l.city}
          </Link>
        ))}
      </div>
    </div>
  );
}
