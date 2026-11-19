import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: { absolute: 'BreathART Photography | Newborn & Family, Dubai & Abu Dhabi' },
  description: 'Photography studio in Al Qusais, Dubai: newborn, maternity, family, wedding and corporate shoots, with home sessions across the UAE. Rated 4.8 on Google.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BreathART Photography | Newborn & Family, Dubai & Abu Dhabi',
    description: 'Photography studio in Al Qusais, Dubai: newborn, maternity, family, wedding and corporate shoots, with home sessions across the UAE. Rated 4.8 on Google.',
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
