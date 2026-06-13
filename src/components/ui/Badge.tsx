import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ icon: Icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-wide text-primary",
        className,
      )}
    >
      {Icon && <Icon className="h-5 w-5 text-accent" aria-hidden="true" />}
      {children}
    </span>
  );
}
