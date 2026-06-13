import { ShieldCheck, FileCheck2, CalendarClock, Star } from "lucide-react";
import { SITE } from "@/lib/utils";

const points = [
  {
    icon: ShieldCheck,
    label: "Licensed & Fully Insured",
    description:
      "Every project is covered. We carry full liability insurance and the proper licensing for your peace of mind.",
  },
  {
    icon: FileCheck2,
    label: "Free Estimates",
    description:
      "Clear, itemized, no-obligation quotes so you know exactly what your project costs before we start.",
  },
  {
    icon: CalendarClock,
    label: "20+ Years Serving DFW",
    description: `Pouring quality concrete across the Dallas–Fort Worth metroplex since ${SITE.foundedYear}.`,
  },
  {
    icon: Star,
    label: "5-Star Rated on Google",
    description:
      "Our reputation is built on honest work and finishes that last. Read what DFW homeowners say.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {points.map(({ icon: Icon, label, description }) => (
        <div key={label} className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-dark">
            {label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mid">{description}</p>
        </div>
      ))}
    </div>
  );
}
