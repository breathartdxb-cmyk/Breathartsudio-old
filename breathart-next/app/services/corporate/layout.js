import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Corporate Photography & Headshots Dubai & Abu Dhabi | BreathART',
  description: 'Executive headshots, team photos, office and brand photography and corporate event coverage for UAE businesses. On-location or in studio, with on-time delivery.',
  alternates: {
    canonical: '/services/corporate',
  },
  openGraph: {
    title: 'Corporate Photography & Headshots Dubai & Abu Dhabi | BreathART',
    description: 'Executive headshots, team photos, office and brand photography and corporate event coverage for UAE businesses. On-location or in studio, with on-time delivery.',
    url: 'https://www.breathartstudio.com/services/corporate',
    images: [
      {
        url: '/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp',
        width: 1200,
        height: 630,
        alt: 'BreathArt Corporate Photography Dubai',
      },
    ],
  },
  twitter: {
    title: 'Corporate Photography & Headshots Dubai & Abu Dhabi | BreathART',
    description: 'Executive headshots, team photos, office and brand photography and corporate event coverage for UAE businesses. On-location or in studio, with on-time delivery.',
    images: ['/assets/gallery/corporate/pexels-ono-kosuki-5648103.webp'],
  },
};

export default function CorporateLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Corporate Photography', url: '/services/corporate' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Corporate Photography Dubai', description: 'Professional documentation of company environments, branding campaigns, and executive headshots.', url: '/services/corporate' },
        ]}
      />
      <WebPageSchema
        name="Corporate Photography Dubai"
        description="Explore BreathArt's corporate headshots, branding, and event photography in Dubai."
        url="/services/corporate"
      />
      {children}
    </>
  );
}
