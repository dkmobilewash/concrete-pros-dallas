import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: HeroAction;
  secondaryCta?: HeroAction;
  height?: "full" | "lg" | "md" | "sm";
  align?: "left" | "center";
  showScrollChevron?: boolean;
  /** Render the title as the page h1 (default true). */
  asH1?: boolean;
  eyebrow?: string;
}

const heightClasses: Record<NonNullable<HeroSectionProps["height"]>, string> = {
  full: "min-h-screen",
  lg: "min-h-[600px]",
  md: "min-h-[400px]",
  sm: "min-h-[300px]",
};

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  height = "lg",
  align = "center",
  showScrollChevron = false,
  asH1 = true,
  eyebrow,
}: HeroSectionProps) {
  const Heading = asH1 ? "h1" : "h2";
  return (
    <section
      className={cn(
        "relative flex w-full items-center overflow-hidden bg-dark",
        heightClasses[height],
        height === "full" || height === "lg" ? "clip-diagonal-bottom" : "",
      )}
    >
      {/* Background photo */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" aria-hidden="true" />
      {/* Signature concrete texture */}
      <div
        className="concrete-texture absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-3xl",
            align === "center"
              ? "mx-auto text-center"
              : "text-center md:text-left",
          )}
        >
          {eyebrow && (
            <span className="mb-4 inline-block font-display text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </span>
          )}
          <Heading className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title}
          </Heading>
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-light/90 md:text-xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-8 flex flex-col gap-4 sm:flex-row",
                align === "center" ? "sm:justify-center" : "sm:justify-start",
              )}
            >
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline-white"
                  size="lg"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {showScrollChevron && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/70">
          <ChevronDown className="h-8 w-8 animate-bounce-slow" aria-hidden="true" />
        </div>
      )}
    </section>
  );
}
