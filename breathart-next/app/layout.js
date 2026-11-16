import './globals.css';
import { Inter, Outfit, Playfair_Display, Great_Vibes } from 'next/font/google';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundLayers from '@/components/BackgroundLayers';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Tracking from '@/components/Tracking';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from './schema';

// Lazy-load non-critical layout components (code-split into separate chunks)
const PopupForm = dynamic(() => import('@/components/PopupForm'));
const ScrollTopButton = dynamic(() => import('@/components/ScrollTopButton'));
const PaymentFloat = dynamic(() => import('@/components/PaymentFloat'));

// Self-hosted Google Fonts via next/font — eliminates render-blocking external CSS
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-outfit',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-great-vibes',
});

export const viewport = {
  themeColor: '#0d1b2e',
};

export const metadata = {
  metadataBase: new URL('https://www.breathartstudio.com'),
  title: {
    default: 'BreathART Photography Studio Dubai | Newborn & Family',
    template: '%s',
  },
  description: 'Photography studio in Al Qusais, Dubai: newborn, maternity, family, wedding and corporate shoots, with home sessions across the UAE. Rated 4.7 on Google.',
  keywords: ['photography studio Dubai', 'newborn photography Dubai', 'maternity photography Dubai', 'cake smash photoshoot Dubai', 'family photographer Dubai', 'wedding photography Dubai', 'corporate photography UAE', 'BreathArt Studio'],
  applicationName: 'BreathArt Studio',
  authors: [{ name: 'BreathArt Photography Studio' }],
  creator: 'BreathArt Photography Studio',
  publisher: 'BreathArt Photography Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BreathART Photography Studio Dubai | Newborn & Family',
    description: 'Photography studio in Al Qusais, Dubai: newborn, maternity, family, wedding and corporate shoots, with home sessions across the UAE. Rated 4.7 on Google.',
    siteName: 'BreathART Photography Studio',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'BreathArt Photography Studio Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BreathART Photography Studio Dubai | Newborn & Family',
    description: 'Photography studio in Al Qusais, Dubai — newborn, maternity, cake smash, family, wedding and corporate shoots.',
    images: ['/assets/hero/hero_nature.png'],
  },
  verification: {
    google: '6aDKn65egxmkQVXrF4P7RBf-S6vlIN3LXdA2h-NmJb0',
    other: {
      'p:domain_verify': '938f33cbf4b86a690523ea5a85b7a397',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logo/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/logo/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/assets/logo/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#0d1b2e',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfairDisplay.variable} ${greatVibes.variable}`}>
      <head>
        {/* Font Awesome — deferred async loading on idle, zero render-blocking impact */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function l(){var el=document.createElement('link');el.rel='stylesheet';el.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';el.crossOrigin='anonymous';document.head.appendChild(el)}if(window.requestIdleCallback){window.requestIdleCallback(l)}else if(document.readyState==='complete'){l()}else{window.addEventListener('load',l)}})();`,
          }}
        />
        {/* Global Structured Data */}
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />

      </head>
      <body className="fade-in active">
        <BackgroundLayers />
        <Navbar />
        {children}
        <Footer />
        <PopupForm repeatDelay={90000} />
        <WhatsAppFloat />
        <Tracking />
        <PaymentFloat />
        <ScrollTopButton />
      </body>
    </html>
  );
}
