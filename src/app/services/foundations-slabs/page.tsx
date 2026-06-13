import { ServiceTemplate, buildServiceMetadata } from "@/components/templates/ServiceTemplate";

const SLUG = "foundations-slabs";

export const metadata = buildServiceMetadata(SLUG);

export default function Page() {
  return <ServiceTemplate slug={SLUG} />;
}
