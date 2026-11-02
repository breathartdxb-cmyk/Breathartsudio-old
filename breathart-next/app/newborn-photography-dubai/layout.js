import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from '../schema';

const TITLE = 'Newborn Photography Dubai from AED 499 | Home Sessions UAE';
const DESCRIPTION =
  'Newborn photoshoot in Dubai from AED 499. Studio or home sessions across the UAE, trained newborn photographers, lady photographer on request. Rated 4.7.';
const OG_IMAGE = '/assets/services/newborn/newborn-and-maternity/8th.jpeg';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/newborn-photography-dubai' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/newborn-photography-dubai',
    images: [{ url: OG_IMAGE, width: 1600, height: 1066, alt: 'Newborn photography in Dubai by BreathArt' }],
  },
  twitter: { title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

export default function NewbornLandingLayout({ children }) {
  return (
    <>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Newborn Photography Dubai', url: '/newborn-photography-dubai' },
        ]}
      />
      <ServiceSchema
        services={[
          {
            name: 'Newborn Photography Dubai',
            description: 'Gentle, baby-safe newborn photoshoots in our Dubai studio or at your home, with props and outfits included.',
            url: '/newborn-photography-dubai',
          },
        ]}
      />
      <WebPageSchema name="Newborn Photography in Dubai" description={DESCRIPTION} url="/newborn-photography-dubai" />
      {children}
    </>
  );
}
