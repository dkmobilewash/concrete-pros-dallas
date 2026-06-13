import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-2 inline-block font-display text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "font-display font-semibold tracking-tight",
          as === "h1"
            ? "text-4xl md:text-6xl"
            : "text-3xl md:text-4xl",
          light ? "text-white" : "text-dark",
        )}
      >
        {title}
      </Tag>
      {/* Accent underline */}
      <span
        className={cn(
          "mt-4 block h-1 w-16 rounded-full bg-accent",
          align === "center" && "mx-auto",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-light/90" : "text-mid",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
