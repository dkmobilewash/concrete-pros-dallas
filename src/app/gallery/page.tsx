import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Concrete Project Gallery",
  description:
    "Browse photos of our completed concrete projects across the DFW area — driveways, patios, pool decks, block walls, and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="A look at completed driveways, patios, pool decks, walls, and commercial pours across the DFW metroplex."
        imageSrc={siteImages.galleryHero}
        imageAlt="Collage of finished concrete projects in Dallas"
        height="sm"
      />

      <Section background="white">
        <GalleryGrid />
      </Section>

      <CTABanner />
    </>
  );
}
