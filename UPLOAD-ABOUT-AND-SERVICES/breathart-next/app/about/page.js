import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';
import { BreadcrumbSchema } from '../schema';

const SITE = 'https://www.breathartstudio.com';
const WA = `https://wa.me/971526400679?text=${encodeURIComponent("Hi BreathART! I'd like to know more about your photography services.")}`;

export const metadata = {
  title: 'About BreathART Group & BreathART Photography Studio | UAE & India',
  description:
    'BreathART Group is a UAE-headquartered group of companies operating in the UAE and India — photography, AI-powered business consultancy, trade licence services and AI education — now expanding to the GCC and Europe.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About BreathART Group | UAE & India',
    description:
      'A UAE-headquartered group of companies in photography, AI consultancy, trade licensing and AI education. Operating in the UAE and India, expanding to the GCC and Europe.',
    url: `${SITE}/about`,
    images: [{ url: '/assets/hero/hero_event.png', alt: 'BreathART Group' }],
  },
};

const stats = [
  { big: '12+', small: 'Years of experience' },
  { big: '100+', small: 'Creators in our network' },
  { big: '4.7★', small: '48 Google reviews' },
  { big: '2', small: 'Outlets · Dubai & Abu Dhabi' },
];

const services = [
  { title: 'Family & Couples', text: 'Family portraits, couple shoots and milestone sessions.', href: '/services/family-couple' },
  { title: 'Newborn & Maternity', text: 'Safe newborn posing, themed setups and maternity portraits.', href: '/newborn-photography-dubai' },
  { title: 'Cake Smash', text: 'Joyful first-birthday sessions with custom themes.', href: '/services/family-couple' },
  { title: 'Weddings', text: 'Nikah, wedding day, engagement and pre-wedding coverage.', href: '/services/wedding' },
  { title: 'Corporate', text: 'Headshots, team photos, office and corporate events.', href: '/services/corporate' },
  { title: 'Commercial & Real Estate', text: 'Product, brand, interior and property photography.', href: '/services/real-estate' },
  { title: 'Videography', text: 'Wedding films, brand videos, reels and event highlights.', href: '/services/videography' },
  { title: 'Events & Printing', text: 'Event coverage plus professional photo printing in the UAE.', href: '/services/events' },
];

const values = [
  { title: 'Premium, yet affordable', text: 'High-end results without luxury-only prices — packages for every family and business.' },
  { title: 'A dedicated team for every service', text: 'Newborn, wedding, corporate and commercial each have their own specialists, supported by 100+ creators.' },
  { title: 'Creativity in every frame', text: 'Fresh themes, styling and ideas so your photos feel personal — never copy-paste.' },
  { title: 'On time, every time', text: 'The best quality, delivered when we promise. Reliability is part of our craft.' },
];

const group = [
  {
    name: 'BreathART Photography',
    text: 'Family, newborn, cake smash, wedding, corporate and commercial photography, videography, events and photo printing across the UAE.',
    href: '/',
    link: 'breathartstudio.com',
  },
  {
    name: 'Forventures',
    text: 'Consultancy and services for corporates, using AI technology to strengthen marketing, operations, human resources and accounts.',
  },
  {
    name: 'TradeLicenceDXB',
    text: 'Helping entrepreneurs get the right trade licence and legal documentation to start and grow a business in the UAE.',
    href: 'https://tradelicencedxb.com',
    link: 'tradelicencedxb.com',
  },
  {
    name: 'BICT',
    text: 'An AI and creative technology institution in India, now expanding to the UAE.',
    href: 'https://www.breathartinstitute.in/',
    link: 'breathartinstitute.in',
  },
];

const footprint = [
  { label: 'Head office', value: 'United Arab Emirates' },
  { label: 'Operating in', value: 'UAE · India' },
  { label: 'Expanding to', value: 'GCC · Europe' },
];

const faqs = [
  {
    q: 'Where is BreathART Photography Studio located?',
    a: 'Our Dubai studio is at 12 22A Street, Al Qusais, Dubai, and we also have an outlet in Abu Dhabi. We shoot on location across the UAE, including Sharjah.',
  },
  {
    q: 'What types of photography does BreathART offer?',
    a: 'Family, couple, newborn, maternity, cake smash, wedding, corporate, commercial and real estate photography, plus videography, event coverage and photo printing.',
  },
  {
    q: 'Do you offer photoshoots at home or on location?',
    a: 'Yes. Newborn, family and maternity sessions can be done at your home, and we cover weddings, offices, venues and events anywhere in the UAE.',
  },
  {
    q: 'How much does a photoshoot cost?',
    a: 'Newborn sessions start from AED 499. Other packages depend on the type of shoot, duration and location — message us on WhatsApp for a quick quote.',
  },
  {
    q: 'Can I request a female photographer?',
    a: 'Yes. A lady photographer is available on request — just mention it when you book.',
  },
  {
    q: 'What is BreathART Group?',
    a: 'BreathART Group is a group of companies headquartered in the UAE and operating in the UAE and India. It includes BreathART Photography, Forventures (AI-powered business consultancy), TradeLicenceDXB (trade licence and legal documentation) and BICT (AI and creative technology education). Expansion to other GCC countries and Europe is in progress.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About BreathART Group & BreathART Photography Studio',
  url: `${SITE}/about`,
  description: 'BreathART Group is a UAE-headquartered group of companies operating in the UAE and India, expanding to the GCC and Europe.',
  mainEntity: {
    '@type': 'Organization',
    name: 'BreathART Group',
    location: { '@type': 'Place', name: 'United Arab Emirates' },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'India' },
    ],
    subOrganization: [
      { '@type': 'Organization', name: 'BreathART Photography Studio', url: SITE },
      { '@type': 'Organization', name: 'Forventures' },
      { '@type': 'Organization', name: 'TradeLicenceDXB', url: 'https://tradelicencedxb.com' },
      { '@type': 'EducationalOrganization', name: 'BICT', url: 'https://www.breathartinstitute.in/' },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <Image
          src="/assets/hero/hero_event.png"
          alt="Corporate conference covered by BreathART"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>About us · UAE &amp; India</p>
          <h1 className={styles.heroTitle}>
            We are <em>BreathART Group</em>
          </h1>
          <p className={styles.heroLead}>
            A group of companies in photography, AI-powered business services and education — headquartered in the
            UAE, operating in the UAE and India, and growing across the GCC and Europe.
          </p>
        </div>
      </section>

      {/* ---------- Group (top) ---------- */}
      <section className={styles.groupSection}>
        <div className={styles.groupInner}>
          <div className={styles.head}>
            <p className={styles.heroEyebrow}>BreathART Group</p>
            <h2 className={styles.h2Light}>One group. Many ways to help you grow.</h2>
            <p className={styles.leadLight}>
              BreathART Group brings together specialist companies that serve families, creators, entrepreneurs and
              corporates — from capturing life&apos;s moments to setting up and growing a business with the help of AI.
              With our head office in the UAE and operations in the UAE and India, we are now expanding to other GCC
              countries and Europe.
            </p>
          </div>
          <div className={styles.footprint}>
            {footprint.map((f) => (
              <div key={f.label} className={styles.footItem}>
                <span>{f.label}</span>
                <strong>{f.value}</strong>
              </div>
            ))}
          </div>
          <div className={styles.groupGrid}>
            {group.map((g) => (
              <div key={g.name} className={styles.groupCard}>
                <h3>{g.name}</h3>
                <p>{g.text}</p>
                {g.href && (
                  <a href={g.href} target={g.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {g.link} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Story ---------- */}
      <section className={styles.section}>
        <div className={styles.story}>
          <div className={styles.storyMedia}>
            <div className={styles.storyMain}>
              <Image src="/assets/gallery/corporate/pexels-pexels-user-766999688-18794228.webp" alt="Executive portrait by BreathART Photography" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.storySmall}>
              <Image src="/assets/gallery/corporate/pexels-pavel-danilyuk-7654168.webp" alt="Corporate team photography in an office" fill sizes="(max-width: 900px) 45vw, 18vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <p className={styles.eyebrow}>BreathART Photography Studio</p>
            <h2 className={styles.h2}>Our flagship: photography that feels personal, polished and timeless</h2>
            <p className={styles.body}>
              <strong>BreathART Photography Studio</strong> is a premium photography studio with outlets in{' '}
              <strong>Dubai and Abu Dhabi</strong>. For more than 12 years we have photographed the moments that
              matter — from a baby&apos;s first days and a first-birthday cake smash, to weddings, corporate headshots and
              commercial campaigns.
            </p>
            <p className={styles.body}>
              Each type of shoot is handled by its own talented team, supported by a network of more than 100
              creators. That means fresh ideas, specialist skills and a calm, professional experience — whether
              you visit our studio or we come to your home, venue or office.
            </p>
            <p className={styles.body}>
              Our promise is simple: <strong>premium quality at an affordable price, delivered on time.</strong>
            </p>
            <blockquote className={styles.pull}>“Every picture tells a story of love.”</blockquote>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className={styles.stats}>
        {stats.map((s) => (
          <div key={s.small} className={styles.stat}>
            <strong>{s.big}</strong>
            <span>{s.small}</span>
          </div>
        ))}
      </section>

      {/* ---------- What we do ---------- */}
      <section className={styles.section}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 className={styles.h2}>From family photography to weddings, newborn to cake smash, corporate to commercial</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((s, i) => (
            <Link key={s.title} href={s.href} className={styles.serviceItem}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.valuesWrap}>
          <div className={styles.valuesIntro}>
            <p className={styles.eyebrow}>Our approach</p>
            <h2 className={styles.h2}>What makes BreathART different</h2>
            <div className={styles.valuesImg}>
              <Image src="/assets/gallery/wedding/pexels-dilara-dogar-713705919-30439697.webp" alt="Wedding couple portrait" fill sizes="(max-width: 900px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.values}>
            {values.map((v, i) => (
              <div key={v.title} className={styles.value}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Locations ---------- */}
      <section className={styles.section}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>Visit us</p>
          <h2 className={styles.h2}>Our outlets</h2>
        </div>
        <div className={styles.locations}>
          <div className={styles.location}>
            <h3>Dubai</h3>
            <p>12 22A Street, Al Qusais, Dubai</p>
            <p>
              <a href="tel:+971526400679">+971 52 640 0679</a> · <a href="tel:+971522150837">+971 52 215 0837</a>
            </p>
            <a className={styles.textLink} href="https://www.google.com/maps/search/?api=1&query=BreathART+Photography+Studio+Al+Qusais+Dubai" target="_blank" rel="noopener noreferrer">
              Get directions →
            </a>
          </div>
          <div className={styles.location}>
            <h3>Abu Dhabi</h3>
            <p>Studio sessions and on-location shoots across Abu Dhabi.</p>
            <p>
              <a href="tel:+971526400679">+971 52 640 0679</a>
            </p>
            <a className={styles.textLink} href={WA} target="_blank" rel="noopener noreferrer">
              Ask for the location →
            </a>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 className={styles.h2}>Questions people ask us</h2>
        </div>
        <div className={styles.faqs}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faq}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta}>
        <p className={styles.heroEyebrow}>Let&apos;s create something beautiful</p>
        <h2>Tell us about your shoot</h2>
        <p>Message us with your date and the type of shoot — we&apos;ll reply with availability and options.</p>
        <div className={styles.ctaRow}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnGold}>
            Chat on WhatsApp
          </a>
          <Link href="/contact" className={styles.btnGlass}>
            Contact page
          </Link>
        </div>
      </section>
    </main>
  );
}
