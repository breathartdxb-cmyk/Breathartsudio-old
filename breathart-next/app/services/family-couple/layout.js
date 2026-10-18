import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Family, Couple & Cake Smash Photography Dubai & Abu Dhabi | BreathART',
  description: 'Family portraits, couple shoots and first-birthday cake smash sessions in our studio or on location in Dubai and Abu Dhabi. Book with BreathART Photography Studio.',
  alternates: {
    canonical: '/services/family-couple',
  },
  openGraph: {
    title: 'Family, Couple & Cake Smash Photography Dubai & Abu Dhabi | BreathART',
    description: 'Family portraits, couple shoots and first-birthday cake smash sessions in our studio or on location in Dubai and Abu Dhabi. Book with BreathART Photography Studio.',
    url: 'https://www.breathartstudio.com/services/family-couple',
    images: [
      {
        url: '/assets/gallery/family/bk-279-suhad.webp',
        width: 1200,
        height: 630,
        alt: 'BreathArt Family & Couple Photography Dubai',
      },
    ],
  },
  twitter: {
    title: 'Family, Couple & Cake Smash Photography Dubai & Abu Dhabi | BreathART',
    description: 'Family portraits, couple shoots and first-birthday cake smash sessions in our studio or on location in Dubai and Abu Dhabi. Book with BreathART Photography Studio.',
    images: ['/assets/gallery/family/bk-279-suhad.webp'],
  },
};

export default function FamilyCoupleLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Family & Couple', url: '/services/family-couple' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Family Photography Dubai', description: 'Documenting your life\'s milestone moments and precious bonds with warm, cinematic fine-art storytelling.', url: '/services/family-couple' },
          { name: 'Couple Photography Dubai', description: 'Stunning outdoor romance portfolios and cinematic connection portraits.', url: '/services/family-couple' },
        ]}
      />
      <WebPageSchema
        name="Artistic Family & Couple Photography Dubai"
        description="Explore BreathArt's fine-art family and couple photography services in Dubai."
        url="/services/family-couple"
      />
      {children}
    </>
  );
}
