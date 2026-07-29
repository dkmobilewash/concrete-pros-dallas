export interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  metaTitle: string
  metaDescription: string
  heroSubhead: string
  icon: string
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'concrete-driveways',
    name: 'Concrete Driveways',
    shortName: 'Driveways',
    headline: 'Concrete Driveways in Dallas, TX',
    metaTitle: 'Concrete Driveway Installation Dallas TX',
    metaDescription:
      'Professional concrete driveway installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Durable, crack-resistant driveways built to handle Texas heat and heavy use.',
    icon: 'Car',
    relatedSlugs: ['concrete-patios', 'concrete-walkways', 'stamped-concrete'],
  },
  {
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    shortName: 'Patios',
    headline: 'Concrete Patios in Dallas, TX',
    metaTitle: 'Concrete Patio Installation Dallas TX',
    metaDescription:
      'Custom concrete patio installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Create the perfect outdoor living space with a professionally poured concrete patio.',
    icon: 'Sofa',
    relatedSlugs: [
      'concrete-driveways',
      'stamped-concrete',
      'concrete-walkways',
    ],
  },
  {
    slug: 'concrete-walkways',
    name: 'Concrete Walkways',
    shortName: 'Walkways',
    headline: 'Concrete Walkways in Dallas, TX',
    metaTitle: 'Concrete Walkway Installation Dallas TX',
    metaDescription:
      'Professional concrete walkway installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Safe, slip-resistant walkways that connect your home with style and function.',
    icon: 'Footprints',
    relatedSlugs: [
      'concrete-driveways',
      'concrete-patios',
      'stamped-concrete',
    ],
  },
  {
    slug: 'concrete-foundations',
    name: 'Concrete Foundations',
    shortName: 'Foundations',
    headline: 'Concrete Foundations in Dallas, TX',
    metaTitle: 'Concrete Foundation Installation Dallas TX',
    metaDescription:
      'Reliable concrete foundation installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Solid foundations engineered for North Texas soil conditions and building codes.',
    icon: 'Building2',
    relatedSlugs: [
      'commercial-concrete',
      'concrete-driveways',
      'retaining-walls',
    ],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    shortName: 'Retaining Walls',
    headline: 'Retaining Walls in Dallas, TX',
    metaTitle: 'Retaining Wall Installation Dallas TX',
    metaDescription:
      'Professional retaining wall installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Engineered retaining walls that manage soil, prevent erosion, and add curb appeal.',
    icon: 'Layers',
    relatedSlugs: [
      'concrete-foundations',
      'concrete-patios',
      'commercial-concrete',
    ],
  },
  {
    slug: 'stamped-concrete',
    name: 'Stamped Concrete',
    shortName: 'Stamped Concrete',
    headline: 'Stamped Concrete in Dallas, TX',
    metaTitle: 'Stamped Concrete Installation Dallas TX',
    metaDescription:
      'Beautiful stamped concrete installation in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Achieve the look of natural stone, brick, or tile at a fraction of the cost.',
    icon: 'Palette',
    relatedSlugs: [
      'concrete-patios',
      'concrete-driveways',
      'concrete-walkways',
    ],
  },
  {
    slug: 'commercial-concrete',
    name: 'Commercial Concrete',
    shortName: 'Commercial',
    headline: 'Commercial Concrete in Dallas, TX',
    metaTitle: 'Commercial Concrete Services Dallas TX',
    metaDescription:
      'Commercial concrete services in Dallas, TX — call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Heavy-duty concrete solutions for parking lots, loading docks, and commercial properties.',
    icon: 'Warehouse',
    relatedSlugs: [
      'concrete-foundations',
      'concrete-driveways',
      'retaining-walls',
    ],
  },
  {
    slug: 'concrete-repair',
    name: 'Concrete Repair',
    shortName: 'Repair',
    headline: 'Concrete Repair & Resurfacing in Dallas, TX',
    metaTitle: 'Concrete Repair & Resurfacing Dallas TX',
    metaDescription: 'Expert concrete repair and resurfacing services in Dallas, TX — fix cracks, spalling, and settling. Call 214-466-2536 for a free estimate.',
    heroSubhead: 'Restore cracked, spalled, or settling concrete to like-new condition without a full replacement.',
    icon: 'Wrench',
    relatedSlugs: ['concrete-resurfacing', 'concrete-driveways', 'concrete-patios'],
  },
  {
    slug: 'concrete-resurfacing',
    name: 'Concrete Resurfacing',
    shortName: 'Resurfacing',
    headline: 'Concrete Resurfacing in Dallas, TX',
    metaTitle: 'Concrete Resurfacing Dallas TX',
    metaDescription: 'Professional concrete resurfacing and sealing in Dallas, TX — renew driveways, patios, and pool decks. Call 214-466-2536 for a free estimate.',
    heroSubhead: 'Give your existing concrete a fresh, durable surface with professional resurfacing and sealing.',
    icon: 'Paintbrush',
    relatedSlugs: ['concrete-repair', 'stamped-concrete', 'concrete-patios'],
  },
  {
    slug: 'concrete-leveling',
    name: 'Concrete Leveling',
    shortName: 'Leveling',
    headline: 'Concrete Leveling & Slab Lifting in Dallas, TX',
    metaTitle: 'Concrete Leveling Dallas TX | Slab Lifting',
    metaDescription:
      'Concrete leveling and slab lifting in Dallas, TX — fix sunken driveways, patios, and walkways caused by clay soil movement. Call 214-466-2536 for a free estimate.',
    heroSubhead:
      'Raise sunken, uneven slabs back to grade without the cost of a full tear-out and replacement.',
    icon: 'MoveVertical',
    relatedSlugs: ['concrete-repair', 'concrete-resurfacing', 'concrete-driveways'],
  },
]
