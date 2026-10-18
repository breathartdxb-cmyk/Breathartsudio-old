import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Real Estate, Interior & Commercial Photography Dubai | BreathART',
  description: 'Property, hotel, interior and commercial photography for agents, developers and brands in Dubai and Abu Dhabi. Wide-angle, HDR and on-time delivery.',
  alternates: {
    canonical: '/services/real-estate',
  },
  openGraph: {
    title: 'Real Estate, Interior & Commercial Photography Dubai | BreathART',
    description: 'Property, hotel, interior and commercial photography for agents, developers and brands in Dubai and Abu Dhabi. Wide-angle, HDR and on-time delivery.',
    url: 'https://www.breathartstudio.com/services/real-estate',
    images: [
      {
        url: '/assets/gallery/corporate/compagnons-Uhfb85y_B-U-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: 'BreathArt Real Estate Photography Dubai',
      },
    ],
  },
  twitter: {
    title: 'Real Estate, Interior & Commercial Photography Dubai | BreathART',
    description: 'Property, hotel, interior and commercial photography for agents, developers and brands in Dubai and Abu Dhabi. Wide-angle, HDR and on-time delivery.',
    images: ['/assets/gallery/corporate/compagnons-Uhfb85y_B-U-unsplash.jpg'],
  },
};

export default function RealEstateLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Real Estate Showcase', url: '/services/real-estate' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Real Estate Photography Dubai', description: 'High-end wide-angle and HDR architectural photography for spaces and premium properties.', url: '/services/real-estate' },
        ]}
      />
      <WebPageSchema
        name="Real Estate Photography Dubai"
        description="Explore BreathArt's real estate, architectural, and spatial photography in Dubai."
        url="/services/real-estate"
      />
      {children}
    </>
  );
}
