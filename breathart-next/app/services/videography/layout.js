import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Videography Services Dubai & Abu Dhabi — Wedding, Corporate & Reels | BreathART',
  description: 'Cinematic wedding films, corporate and brand videos, social media reels, event coverage and drone filming by BreathART in Dubai, Abu Dhabi and across the UAE.',
  alternates: {
    canonical: '/services/videography',
  },
  openGraph: {
    title: 'Videography Services Dubai & Abu Dhabi — Wedding, Corporate & Reels | BreathART',
    description: 'Cinematic wedding films, corporate and brand videos, social media reels, event coverage and drone filming by BreathART in Dubai, Abu Dhabi and across the UAE.',
    url: 'https://www.breathartstudio.com/services/videography',
    images: [
      {
        url: '/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp',
        width: 1200,
        height: 630,
        alt: 'BreathArt Cinematic Videography Services Dubai',
      },
    ],
  },
  twitter: {
    title: 'Videography Services Dubai & Abu Dhabi — Wedding, Corporate & Reels | BreathART',
    description: 'Cinematic wedding films, corporate and brand videos, social media reels, event coverage and drone filming by BreathART in Dubai, Abu Dhabi and across the UAE.',
    images: ['/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp'],
  },
};

export default function VideographyLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Videography', url: '/services/videography' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Cinematic Wedding Films Dubai', description: 'Full-day wedding coverage edited into stunning high-definition cinematic visual narratives.', url: '/services/videography' },
          { name: 'Corporate Video Production Dubai', description: 'High-impact promotional and advertisement video content for branding and digital channels.', url: '/services/videography' },
          { name: 'Aerial Drone Cinematography Dubai', description: 'Ultra-high definition drone and aerial cinematography capturing grand landscapes and event venues.', url: '/services/videography' },
        ]}
      />
      <WebPageSchema
        name="Cinematic Videography Services Dubai"
        description="Premium videography services: wedding films, corporate promos, social reels, event coverage, and aerial drone cinematography."
        url="/services/videography"
      />
      {children}
    </>
  );
}
