// TODO: Replace with verified Google/Yelp reviews before launch

interface TestimonialCardProps {
  quote: string
  attribution: string
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="bg-brand-gray-light rounded-lg p-6">
      <p className="text-brand-charcoal italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-brand-gray text-sm font-medium">
        &mdash; {attribution}
      </p>
    </div>
  )
}
