import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

export const metadata = {
  title: 'Events by BreathART — Event Management & Production UAE',
  description: 'Events by BreathART plans and produces corporate events, brand activations, stage shows and private celebrations in Dubai and across the UAE. Part of BreathART Group.',
  alternates: {
    canonical: '/services/events-by-breathart',
  },
  openGraph: {
    title: 'Events by BreathART — Event Management & Production UAE',
    description: 'Events by BreathART plans and produces corporate events, brand activations, stage shows and private celebrations in Dubai and across the UAE. Part of BreathART Group.',
    url: 'https://www.breathartstudio.com/services/events-by-breathart',
    images: [
      {
        url: '/assets/gallery/event/pexels-panditwiguna-2788487.webp',
        width: 1200,
        height: 630,
        alt: 'Events By BreathArt — Event Management Dubai',
      },
    ],
  },
  twitter: {
    title: 'Events by BreathART — Event Management & Production UAE',
    description: 'Events by BreathART plans and produces corporate events, brand activations, stage shows and private celebrations in Dubai and across the UAE. Part of BreathART Group.',
    images: ['/assets/gallery/event/pexels-panditwiguna-2788487.webp'],
  },
};

export default function EventsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Events By BreathArt', url: '/services/events-by-breathart' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Stage Shows & Productions Dubai', description: 'Grand set designs, high-end acoustics, lighting production, and theatrical stage management.', url: '/services/events-by-breathart' },
          { name: 'Corporate Events Dubai', description: 'High-impact business conferences, seminars, annual meetings, and award galas.', url: '/services/events-by-breathart' },
          { name: 'Brand Activations Dubai', description: 'Creative experiential marketing, immersive pop-ups, and interactive product launches.', url: '/services/events-by-breathart' },
          { name: 'Celebrity Event Management Dubai', description: 'Managing high-profile talent, VIP guest lists, and premium entertainment programs.', url: '/services/events-by-breathart' },
        ]}
      />
      <WebPageSchema
        name="Events By BreathArt — Event Management Dubai"
        description="UAE's premier event management company. Stage shows, celebrity collaborations, corporate events, brand activations, and entertainment programs."
        url="/services/events-by-breathart"
      />
      {children}
    </>
  );
}
