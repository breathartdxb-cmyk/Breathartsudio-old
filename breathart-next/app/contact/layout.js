import { BreadcrumbSchema, ContactPageSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'Contact BreathART Photography Studio | Dubai & Abu Dhabi',
  description: 'Book your shoot with BreathART. Call or WhatsApp +971 52 640 0679, email info@breathartstudio.com, or visit our studio at 12 22A Street, Al Qusais, Dubai.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact BreathART Photography Studio | Dubai & Abu Dhabi',
    description: 'Book your shoot with BreathART. Call or WhatsApp +971 52 640 0679, email info@breathartstudio.com, or visit our studio at 12 22A Street, Al Qusais, Dubai.',
    url: 'https://www.breathartstudio.com/contact',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'Contact BreathArt Photography Studio Dubai',
      },
    ],
  },
  twitter: {
    title: 'Contact BreathART Photography Studio | Dubai & Abu Dhabi',
    description: 'Book your shoot with BreathART. Call or WhatsApp +971 52 640 0679, email info@breathartstudio.com, or visit our studio at 12 22A Street, Al Qusais, Dubai.',
    images: ['/assets/hero/hero_nature.png'],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <ContactPageSchema />
      <WebPageSchema
        name="Contact BreathArt Photography Studio"
        description="Book your photography session or inquire about services. Located in Dubai, UAE."
        url="/contact"
      />
      {children}
    </>
  );
}
