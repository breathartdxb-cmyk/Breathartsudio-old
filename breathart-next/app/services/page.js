import Link from 'next/link';
import Image from 'next/image';
import home from '../(home)/home.module.css';
import styles from './services.module.css';
import { BreadcrumbSchema, ServiceSchema } from '../schema';

const SITE = 'https://www.breathartstudio.com';
const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;
const NB = '/assets/services/newborn/newborn-and-maternity/';
const W = '/assets/gallery/wedding/';
const C = '/assets/gallery/corporate/';
const DESC =
  'All BreathART services in one place: family, newborn, maternity, cake smash, wedding, corporate, commercial and real estate photography, videography, events and photo printing in Dubai, Abu Dhabi and across the UAE.';

export const metadata = {
  title: 'Photography & Videography Services in Dubai & Abu Dhabi | BreathART',
  description: DESC,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Photography & Videography Services in Dubai & Abu Dhabi | BreathART',
    description: DESC,
    url: `${SITE}/services`,
    images: [{ url: `${W}pexels-ahmetcotur-29560843.webp`, alt: 'BreathART photography services' }],
  },
};

const services = [
  {
    id: 'service-newborn',
    label: 'Newborn & Maternity',
    title: 'Newborn & maternity photography',
    text: 'Safe, gentle newborn sessions with hand-made themes, and elegant maternity portraits in studio, outdoors or at your home.',
    points: ['Newborn sessions from AED 499', 'Studio or at-home sessions', 'Themed setups & props included', 'Lady photographer on request'],
    main: { src: `${NB}NB-406 SOPHIE (72) copy.jpg`, alt: 'Newborn baby sleeping in a soft white setup' },
    side: [
      { src: '/assets/services/maternity.jpeg', alt: 'Maternity portrait in a flowing white gown' },
      { src: `${NB}lp-moon-bowl.webp`, alt: 'Newborn in a moon-themed setup' },
    ],
    href: '/newborn-photography-dubai',
    linkLabel: 'See themes & prices',
    msg: "Hi BreathART! I'd like to book a newborn / maternity photoshoot.",
  },
  {
    id: 'service-family',
    label: 'Family & Cake Smash',
    title: 'Family, couple & cake smash sessions',
    text: 'Relaxed family portraits, couple shoots and joyful first-birthday cake smash sessions with custom themes and colours.',
    points: ['Family & generations portraits', 'Cake smash with custom themes', 'Couple & anniversary shoots', 'Studio or outdoor locations'],
    main: { src: '/assets/gallery/family/IMG_9601.webp', alt: 'Family portrait with a baby' },
    side: [
      { src: '/assets/gallery/family/photo-32.webp', alt: 'Black and white family portrait' },
      { src: '/assets/gallery/family/nb-360-kat.webp', alt: 'Parents hands around baby feet' },
    ],
    href: '/services/family-couple',
    linkLabel: 'View family services',
    msg: "Hi BreathART! I'd like to book a family / cake smash photoshoot.",
    reverse: true,
  },
  {
    id: 'service-wedding',
    label: 'Weddings',
    title: 'Wedding photography & films',
    text: 'From the nikah to the last dance — calm, discreet coverage of your wedding day, engagement and pre-wedding shoots across the UAE.',
    points: ['Full wedding day & nikah coverage', 'Engagement & pre-wedding shoots', 'Cinematic wedding films', 'Photo + video packages'],
    main: { src: `${W}pexels-dilara-dogar-713705919-30439697.webp`, alt: 'Bride and groom portrait' },
    side: [
      { src: `${W}pexels-abdallah-naser-2156661580-34317944.webp`, alt: 'Couple on palace steps' },
      { src: `${W}pexels-sumeyye-acar-1402897839-32954759.webp`, alt: 'Bridal bouquet detail' },
    ],
    href: '/services/wedding',
    linkLabel: 'View wedding services',
    msg: "Hi BreathART! I'd like to enquire about wedding photography.",
    dark: true,
  },
  {
    id: 'service-corporate',
    label: 'Corporate',
    title: 'Corporate photography & headshots',
    text: 'Professional imagery for UAE businesses — planned around your schedule, at your office or in our studio, with on-time delivery.',
    points: ['Executive & team headshots', 'Office & culture photography', 'Conferences & corporate events', 'LinkedIn & website portraits'],
    main: { src: `${C}pexels-pexels-user-766999688-18794228.webp`, alt: 'Executive portrait' },
    side: [
      { src: `${C}pexels-silverkblack-36733421.webp`, alt: 'Business headshot' },
      { src: `${C}pexels-pavel-danilyuk-7654168.webp`, alt: 'Team working in an office' },
    ],
    href: '/services/corporate',
    linkLabel: 'View corporate services',
    msg: "Hi BreathART! I'd like a quote for corporate photography.",
    reverse: true,
  },
  {
    id: 'service-commercial',
    label: 'Commercial & Real Estate',
    title: 'Commercial, product & real estate',
    text: 'Product, brand and lifestyle imagery for campaigns and e-commerce, plus property, hotel and interior photography for agents and developers.',
    points: ['Product & e-commerce photos', 'Brand & social media content', 'Real estate & interiors', 'Hotels, restaurants & retail'],
    main: { src: '/assets/gallery/real-estate/0014.webp', alt: 'Luxury interior photography' },
    side: [
      { src: '/assets/gallery/commercial/olena-bohovyk-GOVTETevRm8-unsplash.jpg.jpeg', alt: 'Product still life' },
      { src: '/assets/gallery/real-estate/0011.webp', alt: 'Modern kitchen interior' },
    ],
    href: '/services/real-estate',
    linkLabel: 'View commercial services',
    msg: "Hi BreathART! I'd like a quote for commercial / real estate photography.",
  },
  {
    id: 'service-video',
    label: 'Videography',
    title: 'Videography & reels',
    text: 'Wedding films, brand and corporate videos, social media reels and event highlights — planned, shot and edited by our video team.',
    points: ['Wedding films & highlights', 'Corporate & brand videos', 'Instagram & TikTok reels', 'Event highlight videos'],
    main: { src: '/assets/gallery/event/pexels-cherubs-22669860.webp', alt: 'Conference event filmed by BreathART' },
    side: [
      { src: `${W}pexels-ahmetcotur-29560843.webp`, alt: 'Couple dancing at their wedding' },
      { src: '/assets/hero/3_optimized.webp', alt: 'Wedding ring exchange' },
    ],
    href: '/services/videography',
    linkLabel: 'View videography',
    msg: "Hi BreathART! I'd like to enquire about videography.",
    dark: true,
    reverse: true,
  },
  {
    id: 'service-event',
    label: 'Events & Printing',
    title: 'Events & photo printing',
    text: 'Coverage for birthdays, baby showers, corporate events and private celebrations — plus professional photo printing so your memories live beyond the screen.',
    points: ['Birthdays & baby showers', 'Corporate & brand events', 'Professional photo printing', 'Frames & prints for your home'],
    main: { src: '/assets/gallery/event/pexels-panditwiguna-2788487.webp', alt: 'Elegant event table setup' },
    side: [
      { src: '/assets/gallery/event/pexels-miriam-salgado-157461221-10733602_1.webp', alt: 'Celebration event' },
      { src: '/assets/gallery/event/WhatsApp_Image_2026-06-25_at_17.28.30.webp', alt: 'Event atmosphere' },
    ],
    href: '/services/events',
    linkLabel: 'View event services',
    msg: "Hi BreathART! I'd like to enquire about event photography / printing.",
  },
];

const steps = [
  { title: 'Tell us your plan', text: 'Message us on WhatsApp with the type of shoot, date and location.' },
  { title: 'Get a clear quote', text: 'We suggest the right package and confirm the price — no surprises.' },
  { title: 'Shoot day', text: 'Our dedicated team arrives prepared with themes, lights and props.' },
  { title: 'On-time delivery', text: 'Hand-edited photos and films delivered on the agreed date.' },
];

const faqs = [
  { q: 'Which areas do you cover?', a: 'We have outlets in Dubai and Abu Dhabi and shoot on location across the UAE, including Sharjah.' },
  { q: 'Do you offer photoshoots at home?', a: 'Yes — newborn, maternity, family and cake smash sessions can be done at your home. We bring the setup to you.' },
  { q: 'How do I get a price?', a: 'Newborn sessions start from AED 499. For other services, message us on WhatsApp with your requirements for a quick quote.' },
  { q: 'Do you offer both photo and video?', a: 'Yes. Weddings, corporate and events can be booked as photo, video or combined packages.' },
  { q: 'Do you print photos?', a: 'Yes, we offer professional photo printing and framing so you can enjoy your photos at home or in the office.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

function Block({ s, i }) {
  return (
    <section id={s.id} className={`${home.feature} ${s.dark ? home.featureDark : ''} ${s.reverse ? home.featureReverse : ''}`}>
      <div className={home.featureInner}>
        <div className={home.featureMedia}>
          <div className={home.featureMain}>
            <Image src={s.main.src} alt={s.main.alt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={home.featureSide}>
            {s.side.map((x) => (
              <div key={x.src} className={home.featureSideImg}>
                <Image src={x.src} alt={x.alt} fill sizes="(max-width: 900px) 50vw, 16vw" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={home.featureNum}>
            <span>{String(i + 1).padStart(2, '0')}</span> {s.label}
          </p>
          <h2 className={home.featureTitle}>{s.title}</h2>
          <p className={home.featureLead}>{s.text}</p>
          <ul className={home.points}>
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className={home.ctaRow}>
            <a href={wa(s.msg)} target="_blank" rel="noopener noreferrer" className={s.dark ? home.btnGold : home.btnPrimary}>
              Get a quote
            </a>
            <Link href={s.href} className={s.dark ? home.linkLight : home.linkDark}>
              {s.linkLabel} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className={home.page}>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      <ServiceSchema
        services={services.map((s) => ({ name: `${s.label} Photography — BreathART`, description: s.text, url: s.href }))}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={`${W}pexels-ahmetcotur-29560843.webp`}
          alt="Wedding couple dancing, photographed by BreathART"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={home.heroEyebrow}>Our services · Dubai &amp; Abu Dhabi</p>
          <h1 className={styles.title}>
            Photography &amp; film for <em>every</em> chapter
          </h1>
          <p className={styles.lead}>
            From family photography to weddings, newborn to cake smash, corporate to commercial — each handled by a
            dedicated BreathART team.
          </p>
          <nav className={styles.chips} aria-label="Jump to a service">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Stats */}
      <section className={home.stats}>
        <div className={home.stat}>
          <strong>8</strong>
          <span>Specialist services</span>
        </div>
        <div className={home.stat}>
          <strong>100+</strong>
          <span>Creators in our network</span>
        </div>
        <div className={home.stat}>
          <strong>4.7★</strong>
          <span>48 Google reviews</span>
        </div>
        <div className={home.stat}>
          <strong>On time</strong>
          <span>Delivery we promise</span>
        </div>
      </section>

      {services.map((s, i) => (
        <Block key={s.id} s={s} i={i} />
      ))}

      {/* Process */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>How it works</p>
          <h2 className={home.h2}>From first message to final gallery</h2>
        </div>
        <div className={home.reasons}>
          {steps.map((s, i) => (
            <div key={s.title} className={home.reason}>
              <span className={home.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={home.section}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>FAQ</p>
          <h2 className={home.h2}>Good to know</h2>
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

      {/* CTA */}
      <section className={home.cta}>
        <div className={home.ctaInner}>
          <p className={home.heroEyebrow}>Not sure which package?</p>
          <h2>Tell us about your shoot</h2>
          <p>Send us the type of shoot and your date — we&apos;ll recommend the right package and share a quote.</p>
          <div className={home.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa("Hi BreathART! I'd like help choosing a photography package.")} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
              Chat on WhatsApp
            </a>
            <a href="tel:+971526400679" className={home.btnGlass}>
              Call +971 52 640 0679
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
