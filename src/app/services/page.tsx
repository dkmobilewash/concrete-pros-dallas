import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Concrete Services in Dallas TX | Concrete Pros Of Dallas",
  description:
    "Explore our full range of concrete services including driveways, patios, pool decks, block walls, foundations, and commercial concrete work in Dallas, TX.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Dallas"
        subtitle="Residential and commercial concrete, poured right the first time — across the entire DFW metroplex."
        imageSrc="https://picsum.photos/seed/cpd-services-hero/1920/900"
        imageAlt="Concrete crew finishing a freshly poured slab in Dallas"
        height="md"
        primaryCta={{ text: "Get a Free Estimate", href: "/contact" }}
      />

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-mid">
            Concrete Pros Of Dallas handles every kind of concrete work a North
            Texas home or business needs — from a single driveway to a full
            commercial parking lot. Every project is engineered for our region&apos;s
            heat and expansive clay soil, reinforced and drained correctly, and
            finished to last. Browse our services below, then reach out for a
            free, no-obligation estimate.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Section>

      <Section background="light">
        <SectionHeading eyebrow="Why Us" title="Built on Quality and Trust" />
        <div className="mt-12">
          <WhyChooseUs />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
