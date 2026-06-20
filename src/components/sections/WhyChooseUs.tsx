import {
  Shield,
  Users,
  Building,
  MessageSquare,
  Sun,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'

interface Reason {
  title: string
  description: string
  Icon: LucideIcon
}

const reasons: Reason[] = [
  {
    title: 'Quality Workmanship',
    description:
      'Every pour is precision-leveled, properly reinforced, and finished to last.',
    Icon: Shield,
  },
  {
    title: 'Experienced Crews',
    description:
      'Our professional teams bring skill and efficiency to every project.',
    Icon: Users,
  },
  {
    title: 'Residential & Commercial',
    description:
      'From home patios to commercial parking lots, we handle projects of any scale.',
    Icon: Building,
  },
  {
    title: 'Clear Communication',
    description:
      'Honest timelines, transparent pricing, and responsive project updates.',
    Icon: MessageSquare,
  },
  {
    title: 'Built for Texas',
    description:
      'Durable installs engineered to withstand North Texas heat, soil, and weather.',
    Icon: Sun,
  },
  {
    title: 'Detail & Cleanup',
    description:
      'We take pride in clean edges, smooth finishes, and a spotless job site.',
    Icon: CheckCircle,
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-brand-gray-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-10">
          Why Choose Dallas Concrete Pros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <reason.Icon
                size={36}
                className="text-brand-orange mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                {reason.title}
              </h3>
              <p className="text-brand-gray text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
