import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../../schema';

const title = 'Photography Gift Vouchers, Prints & Corporate Gifts Dubai | BreathART';
const description = 'Newborn and maternity photoshoot gift vouchers from AED 499, photo printing, frames, gift hampers and corporate gifts in Dubai and across the UAE.';
const image = '/assets/services/newborn/newborn-and-maternity/lp-hero-sleeping.webp';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/services/gifts' },
  openGraph: {
    title,
    description,
    url: 'https://www.breathartstudio.com/services/gifts',
    images: [{ url: image, width: 1200, height: 630, alt: 'BreathART photography gifts Dubai' }],
  },
  twitter: { title, description, images: [image] },
};

export default function GiftsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'BreathART Gifts', url: '/services/gifts' },
        ]}
      />
      <ServiceSchema
        services={[
          { name: 'Photography Gift Vouchers Dubai', description: 'Newborn and maternity photoshoot gift vouchers, photo printing, frames, hampers and corporate gifts.', url: '/services/gifts' },
        ]}
      />
      <WebPageSchema
        name="BreathART Gifts"
        description="Photoshoot gift vouchers, prints and corporate gifts from BreathART Photography in Dubai."
        url="/services/gifts"
      />
      {children}
    </>
  );
}
