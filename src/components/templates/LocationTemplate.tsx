import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { getLocation } from "@/data/locations";
import { locationHeroImages } from "@/data/images";
import { getService } from "@/data/services";
import { serviceIcons } from "@/lib/serviceIcons";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export function buildLocationMetadata(slug: string): Metadata {
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/service-areas/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
    },
  };
}

export function LocationTemplate({ slug }: { slug: string }) {
  const loc = getLocation(slug);
  if (!loc) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: loc.city, path: `/service-areas/${loc.slug}` },
        ])}
      />

      <HeroSection
        eyebrow="Service Area"
        title={`Concrete Contractors in ${loc.city}, TX`}
        subtitle={loc.heroSubtitle}
        imageSrc={locationHeroImages[loc.slug]}
        imageAlt={`Concrete work by Concrete Pros Of Dallas in ${loc.city}, Texas`}
        height="md"
        primaryCta={{ text: "Get a Free Estimate", href: "/contact" }}
      />

      {/* Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            as="h2"
            align="left"
            eyebrow={loc.county}
            title={`Your Local Concrete Contractor in ${loc.city}`}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mid">
            {loc.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Services for this city */}
      <Section background="light">
        <SectionHeading
          eyebrow="What We Offer"
          title={`Concrete Services We Offer in ${loc.city}`}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loc.services.map((s) => {
            const service = getService(s);
            if (!service) return null;
            const Icon = serviceIcons[s] ?? MapPin;
            return (
              <Link
                key={s}
                href={`/services/${s}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-semibold text-dark">
                    {service.name}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Neighborhoods + testimonial */}
      <Section background="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-light p-8">
            <h3 className="font-display text-2xl font-semibold text-dark">
              Neighborhoods We Serve in {loc.city}
            </h3>
            <p className="mt-2 text-mid">
              We work throughout {loc.city} and the surrounding {loc.county} area,
              including:
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {loc.neighborhoods.map((n) => (
                <li key={n} className="flex items-center gap-2 text-mid">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <figure className="flex flex-col justify-center rounded-lg bg-primary p-8 text-white">
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-light/90">
              “{loc.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 font-display font-semibold">
              {loc.testimonial.name}
              <span className="ml-2 font-body text-sm font-normal text-accent">
                {loc.testimonial.city}, TX
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Nearby areas note */}
        <p className="mt-10 text-center text-mid">
          We also serve{" "}
          {loc.nearbyAreas.map((area, i) => (
            <span key={area} className="font-medium text-primary">
              {area}
              {i < loc.nearbyAreas.length - 1 ? ", " : ""}
            </span>
          ))}
          , and more communities across the DFW metroplex.
        </p>
      </Section>

      {/* Contact form, city pre-selected */}
      <Section background="light">
        <SectionHeading
          eyebrow="Free Estimate"
          title={`Request Your Free ${loc.city} Estimate`}
          subtitle="Fill out the form below and we'll be in touch within one business day."
        />
        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-white p-6 shadow-md sm:p-8">
          <ContactForm defaultCity={loc.city} />
        </div>
      </Section>

      <CTABanner title={`Ready to Start Your ${loc.city} Concrete Project?`} />
    </>
  );
}
