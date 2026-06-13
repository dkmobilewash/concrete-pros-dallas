import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "primary" | "dark";
  containerClassName?: string;
  id?: string;
}

const bg: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  light: "bg-light",
  primary: "bg-primary text-white",
  dark: "bg-dark text-white",
};

export function Section({
  children,
  className,
  background = "white",
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", bg[background], className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
