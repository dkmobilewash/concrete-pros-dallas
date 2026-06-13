import { ServiceTemplate, buildServiceMetadata } from "@/components/templates/ServiceTemplate";

const SLUG = "driveways";

export const metadata = buildServiceMetadata(SLUG);

export default function Page() {
  return <ServiceTemplate slug={SLUG} />;
}
