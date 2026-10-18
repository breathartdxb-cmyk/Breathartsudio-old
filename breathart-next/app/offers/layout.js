import { BreadcrumbSchema, WebPageSchema, OfferCatalogSchema } from '../schema';

export const metadata = {
  title: 'Photography Packages & Offers Dubai & Abu Dhabi | BreathART',
  description: 'Current BreathART photography packages and offers — newborn, maternity, cake smash, family, couple and event photography at affordable prices in the UAE.',
  alternates: {
    canonical: '/offers',
  },
  openGraph: {
    title: 'Photography Packages & Offers Dubai & Abu Dhabi | BreathART',
    description: 'Current BreathART photography packages and offers — newborn, maternity, cake smash, family, couple and event photography at affordable prices in the UAE.',
    url: 'https://www.breathartstudio.com/offers',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Packages & Offers',
      },
    ],
  },
  twitter: {
    title: 'Photography Packages & Offers Dubai & Abu Dhabi | BreathART',
    description: 'Current BreathART photography packages and offers — newborn, maternity, cake smash, family, couple and event photography at affordable prices in the UAE.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function OffersLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Offers', url: '/offers' },
        ]}
      />
      <OfferCatalogSchema />
      <WebPageSchema
        name="Photography Packages & Special Offers"
        description="Explore exclusive photography and videography packages with special pricing at BreathArt Studio Dubai."
        url="/offers"
      />
      {children}
    </>
  );
}
