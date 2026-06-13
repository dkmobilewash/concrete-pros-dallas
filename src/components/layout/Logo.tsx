import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export function Logo({ light = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label="Concrete Pros Of Dallas — home"
    >
      <span
        className={cn(
          "font-display text-2xl font-bold tracking-tight",
          light ? "text-white" : "text-primary",
        )}
      >
        Concrete Pros
      </span>
      <span className="font-display text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Of Dallas
      </span>
    </Link>
  );
}
