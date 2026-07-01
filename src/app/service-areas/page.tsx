import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Concrete Service Areas Across DFW",
  description:
    "Concrete Pros Of Dallas serves Plano, Allen, Richardson, Garland, Arlington, Coppell, and communities across the DFW metroplex. Find your city.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <HeroSection
        title="Serving the DFW Metroplex"
        subtitle="Local concrete contractors trusted by homeowners and businesses across Dallas–Fort Worth."
        imageSrc={siteImages.serviceAreasHero}
        imageAlt="Map view of the Dallas–Fort Worth metroplex"
        height="sm"
      />

      <Section background="white">
        <SectionHeading
          eyebrow="Where We Work"
          title="Find Your City"
          subtitle="We bring the same quality, fair pricing, and dependable scheduling to every community we serve."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/service-areas/${l.slug}`}
              className="group rounded-lg border border-border bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-dark">
                    {l.city}, TX
                  </h3>
                  <p className="text-sm text-mid">{l.county}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mid">
                {l.heroSubtitle}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-medium uppercase tracking-wide text-accent">
                View {l.city}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
