import type { Metadata } from "next";
import { ShieldCheck, FileCheck2, MapPin, Star } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Concrete Pros Of Dallas | Driveways, Patios & More",
  description:
    "Dallas's trusted concrete contractors. We pour driveways, patios, pool decks, and more across the DFW metroplex. Get a free estimate today.",
  alternates: { canonical: "/" },
};

const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: FileCheck2, label: "Free Estimates" },
  { icon: MapPin, label: "Serving DFW Since 2003" },
  { icon: Star, label: "5-Star Google Rated" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSection
        title="Dallas's Concrete Experts"
        subtitle="From driveways to commercial slabs — quality work, fair prices, and a finish that lasts."
        imageSrc="https://picsum.photos/seed/cpd-hero-home/1920/1080"
        imageAlt="Freshly poured concrete driveway in front of a Dallas home"
        primaryCta={{ text: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{ text: "See Our Work", href: "/gallery" }}
        height="full"
        showScrollChevron
      />

      {/* Trust bar */}
      <div className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center justify-center">
              <Badge icon={b.icon}>{b.label}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section background="white">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Concrete Services"
          subtitle="Residential and commercial concrete done right — built for North Texas heat, clay soil, and the way you actually use your space."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Section>

      {/* Why choose us */}
      <Section background="light">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Dallas Homeowners Choose Us"
        />
        <div className="mt-12">
          <WhyChooseUs />
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Service areas preview */}
      <Section background="white">
        <SectionHeading
          eyebrow="Where We Work"
          title="Proudly Serving the DFW Metroplex"
        />
        <div className="mt-10">
          <ServiceAreaMap />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
