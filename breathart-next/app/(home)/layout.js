import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: { absolute: 'BreathART Photography Studio | Dubai & Abu Dhabi' },
  description: 'Premium photography at affordable prices — family, newborn, cake smash, wedding, corporate and commercial. Outlets in Dubai & Abu Dhabi. Rated 4.7 on Google. Part of BreathART Group.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BreathART Photography Studio | Dubai & Abu Dhabi',
    description: 'Premium photography at affordable prices — family, newborn, wedding, corporate and commercial. Outlets in Dubai & Abu Dhabi.',
    url: 'https://www.breathartstudio.com/',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Studio Dubai',
      },
    ],
  },
};

export default function HomeLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <WebPageSchema
        name="BreathArt Studio Dubai — Home"
        description="Photography studio in Al Qusais, Dubai for newborn, maternity, cake smash, family, wedding and corporate photography."
        url="/"
      />
      {children}
    </>
  );
}
