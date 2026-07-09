import type { ServiceCityContent } from './types'
import { concreteDrivewaysContent } from './concrete-driveways'
import { concretePatiosContent } from './concrete-patios'
import { concreteWalkwaysContent } from './concrete-walkways'
import { concreteFoundationsContent } from './concrete-foundations'
import { retainingWallsContent } from './retaining-walls'
import { stampedConcreteContent } from './stamped-concrete'
import { commercialConcreteContent } from './commercial-concrete'
import { concreteRepairContent } from './concrete-repair'
import { concreteResurfacingContent } from './concrete-resurfacing'

export type { ServiceCityContent }

export const serviceCityContent: Record<string, ServiceCityContent> = {
  ...concreteDrivewaysContent,
  ...concretePatiosContent,
  ...concreteWalkwaysContent,
  ...concreteFoundationsContent,
  ...retainingWallsContent,
  ...stampedConcreteContent,
  ...commercialConcreteContent,
  ...concreteRepairContent,
  ...concreteResurfacingContent,
}
