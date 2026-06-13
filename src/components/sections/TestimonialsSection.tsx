import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  heading?: string;
  eyebrow?: string;
  items?: Testimonial[];
}

export function TestimonialsSection({
  heading = "What Our Customers Say",
  eyebrow = "Reviews",
  items = testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} light />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
      <Stars count={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-light/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 font-display font-semibold text-white">
        {testimonial.name}
        <span className="ml-2 font-body text-sm font-normal text-accent">
          {testimonial.city}, TX
        </span>
      </figcaption>
    </figure>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
