import ServiceLanding from '@/components/ServiceLanding';
import { pages } from '@/data/servicePages';

export default function Page() {
  return <ServiceLanding data={pages.realEstate} />;
}
