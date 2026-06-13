import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

interface CTABannerProps {
  title?: string;
  subtext?: string;
}

export function CTABanner({
  title = "Ready to Start Your Concrete Project?",
  subtext = "Get a free estimate today — no obligation.",
}: CTABannerProps) {
  return (
    <section className="clip-diagonal-both relative overflow-hidden bg-accent py-20 text-white">
      <div
        className="concrete-texture absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtext}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-display font-medium uppercase tracking-wide text-accent transition-colors hover:bg-light"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <Button href="/contact" variant="secondary" size="lg">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
