import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';
import WorkGallery from './components/WorkGallery';

const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;
const NB = '/assets/services/newborn/newborn-and-maternity/';
const W = '/assets/gallery/wedding/';
const C = '/assets/gallery/corporate/';

const heroPanels = [
  { label: 'Newborn & Family', img: '/assets/gallery/family/bk-279-suhad.webp', href: '/newborn-photography-dubai', alt: 'Parents with their newborn baby' },
  { label: 'Weddings', img: `${W}pexels-ahmetcotur-29560843.webp`, href: '/services/wedding', alt: 'Bride and groom dancing at their wedding' },
  { label: 'Corporate', img: `${C}pexels-itay-verchik-1150587-16970452.webp`, href: '/services/corporate', alt: 'Professional corporate headshot' },
];

const stats = [
  { big: '12+', small: 'Years of experience' },
  { big: '4.7★', small: '48 Google reviews' },
  { big: '100+', small: 'Creators in our network' },
  { big: 'Dubai', small: '& Abu Dhabi outlets' },
];

const features = [
  {
    key: 'wedding',
    num: '01',
    eyebrow: 'Weddings & Couples',
    title: 'Your wedding, told like a film',
    text: 'From the nikah to the last dance, we capture the emotion, the details and the people who make your day — with a calm, discreet team that blends into the celebration.',
    points: [
      'Full wedding day & nikah coverage',
      'Engagement & pre-wedding shoots',
      'Cinematic wedding films & highlights',
      'Photo + video packages',
    ],
    main: { src: `${W}pexels-dilara-dogar-713705919-30439697.webp`, alt: 'Bride and groom portrait in Dubai' },
    side: [
      { src: `${W}pexels-habib-hosseini-3673463.webp`, alt: 'Bride behind her veil' },
      { src: `${W}pexels-sumeyye-acar-1402897839-32954759.webp`, alt: 'Bridal bouquet detail' },
    ],
    cta: { label: 'Plan your wedding', href: wa("Hi BreathArt! I'd like to enquire about wedding photography.") },
    link: { label: 'View wedding services', href: '/services/wedding' },
    dark: true,
  },
  {
    key: 'corporate',
    num: '02',
    eyebrow: 'Corporate & Brands',
    title: 'Imagery that makes your business look its best',
    text: 'Headshots, team photos and event coverage for companies across the UAE — planned around your schedule, at your office or in our studio, with fast turnaround.',
    points: [
      'Executive & team headshots',
      'Office, team & culture photography',
      'Conferences, launches & corporate events',
      'Brand campaigns & social media content',
    ],
    main: { src: `${C}pexels-pexels-user-766999688-18794228.webp`, alt: 'Executive portrait in a pink suit' },
    side: [
      { src: `${C}pexels-pavel-danilyuk-7654168.webp`, alt: 'Team working together in an office' },
      { src: '/assets/hero/hero_event.png', alt: 'Corporate conference event' },
    ],
    cta: { label: 'Request a corporate quote', href: wa("Hi BreathArt! I'd like a quote for corporate photography.") },
    link: { label: 'View corporate services', href: '/services/corporate' },
    reverse: true,
  },
  {
    key: 'newborn',
    num: '03',
    eyebrow: 'Newborn, Maternity & Family',
    title: 'The first days, beautifully kept',
    text: 'Safe, gentle newborn sessions with hand-made themes, plus maternity, cake smash and family portraits — in our Al Qusais studio or at your home.',
    points: [
      'Newborn sessions from AED 499',
      'Studio or at-home sessions',
      'Lady photographer on request',
      'Maternity, cake smash & family shoots',
    ],
    main: { src: `${NB}lp-moon-bowl.webp`, alt: 'Newborn baby in a moon-themed setup' },
    side: [
      { src: `${NB}lp-smile-bucket.webp`, alt: 'Smiling newborn in a knitted hat' },
      { src: '/assets/gallery/family/IMG_9601.webp', alt: 'Family portrait with a baby' },
    ],
    cta: { label: 'Book a newborn session', href: wa("Hi BreathArt! I'd like to book a newborn photoshoot.") },
    link: { label: 'See newborn themes & prices', href: '/newborn-photography-dubai' },
  },
];

const moreServices = [
  { title: 'Events & Printing', text: 'Event coverage plus professional photo printing.', img: '/assets/gallery/event/pexels-panditwiguna-2788487.webp', href: '/services/events' },
  { title: 'Videography', text: 'Brand films, reels and event highlights.', img: `${W}pexels-mlkbnl-11379041.webp`, href: '/services/videography' },
  { title: 'Commercial & Real Estate', text: 'Product, interior and property photography.', img: '/assets/gallery/real-estate/0014.webp', href: '/services/real-estate' },
];

const reasons = [
  { title: 'Talented teams, 100+ creators', text: 'A dedicated team for every service, backed by a network of more than 100 creators.' },
  { title: 'Dubai & Abu Dhabi', text: 'Visit our outlets, or we come to your home, venue or office anywhere in the UAE.' },
  { title: 'Lady photographer on request', text: 'Prefer a female photographer? Just let us know when you book.' },
  { title: 'On time, best quality', text: 'Premium, hand-edited results at affordable prices — delivered when we promise.' },
];

const reviews = [
  {
    text: 'Great service and professional staff! Prajith and Gladson were great with the baby and calmed her down to settle for the photoshoot. I would highly recommend them!',
    author: 'Arsalan A.',
  },
  {
    text: 'Did a newborn photoshoot, mobile service. What an amazing and highly professional team…',
    author: 'Anisah A.',
  },
  {
    text: 'Best experience with the team. Prajith & Gladson were very patient and co-operative. We highly recommend them. Thank you team.',
    author: 'Neha J.',
  },
];

function Feature({ f }) {
  return (
    <section
      id={f.key}
      className={`${styles.feature} ${f.dark ? styles.featureDark : ''} ${f.reverse ? styles.featureReverse : ''}`}
    >
      <div className={styles.featureInner}>
        <div className={styles.featureMedia}>
          <div className={styles.featureMain}>
            <Image src={f.main.src} alt={f.main.alt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.featureSide}>
            {f.side.map((s) => (
              <div key={s.src} className={styles.featureSideImg}>
                <Image src={s.src} alt={s.alt} fill sizes="(max-width: 900px) 50vw, 16vw" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.featureText}>
          <p className={styles.featureNum}>
            <span>{f.num}</span> {f.eyebrow}
          </p>
          <h2 className={styles.featureTitle}>{f.title}</h2>
          <p className={styles.featureLead}>{f.text}</p>
          <ul className={styles.points}>
            {f.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className={styles.ctaRow}>
            <a href={f.cta.href} target="_blank" rel="noopener noreferrer" className={f.dark ? styles.btnGold : styles.btnPrimary}>
              {f.cta.label}
            </a>
            <Link href={f.link.href} className={f.dark ? styles.linkLight : styles.linkDark}>
              {f.link.label} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* ---------- Hero: triptych ---------- */}
      <section className={styles.hero}>
        <div className={styles.triptych}>
          {heroPanels.map((p, i) => (
            <Link key={p.label} href={p.href} className={styles.panel}>
              <Image
                src={p.img}
                alt={p.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 900px) 34vw, 34vw"
                style={{ objectFit: 'cover' }}
              />
              <span className={styles.panelLabel}>{p.label}</span>
            </Link>
          ))}
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>BreathART Photography Studio · Dubai &amp; Abu Dhabi</p>
          <h1 className={styles.heroTitle}>
            Photography for life&apos;s <em>finest</em> moments
          </h1>
          <p className={styles.heroLead}>Weddings · Corporate · Newborn &amp; Family — premium quality at affordable prices</p>
          <div className={styles.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa("Hi BreathArt! I'd like to book a photoshoot.")} target="_blank" rel="noopener noreferrer" className={styles.btnGold}>
              Book on WhatsApp
            </a>
            <a href="#wedding" className={styles.btnGlass}>
              Explore our work
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className={styles.stats}>
        {stats.map((s) => (
          <div key={s.big} className={styles.stat}>
            <strong>{s.big}</strong>
            <span>{s.small}</span>
          </div>
        ))}
      </section>

      {/* ---------- Signature services ---------- */}
      {features.map((f) => (
        <Feature key={f.key} f={f} />
      ))}

      {/* ---------- More services ---------- */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Also by BreathArt</p>
          <h2 className={styles.h2}>More ways we can help</h2>
        </div>
        <div className={styles.moreGrid}>
          {moreServices.map((s) => (
            <Link key={s.title} href={s.href} className={styles.moreCard}>
              <Image src={s.img} alt={`${s.title} in Dubai`} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className={styles.moreBody}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className={`${styles.section} ${styles.tinted}`} id="work">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h2 className={styles.h2}>Selected work</h2>
        </div>
        <WorkGallery />
      </section>

      {/* ---------- Why us ---------- */}
      <section className={styles.section} id="why-us">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Why BreathArt</p>
          <h2 className={styles.h2}>Calm, professional and detail-obsessed</h2>
        </div>
        <div className={styles.reasons}>
          {reasons.map((r, i) => (
            <div key={r.title} className={styles.reason}>
              <span className={styles.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section className={`${styles.section} ${styles.tinted}`} id="reviews">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Kind words</p>
          <h2 className={styles.h2}>Rated 4.7 out of 5 on Google</h2>
          <p className={styles.lead}>
            <span className={styles.stars}>★★★★★</span> from 48 reviews
          </p>
        </div>
        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <blockquote key={r.author} className={styles.review}>
              <span className={styles.quoteMark}>“</span>
              <p>{r.text}</p>
              <footer>
                <strong>{r.author}</strong> · Google review
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <p className={styles.heroEyebrow}>Let&apos;s create something beautiful</p>
          <h2>Tell us about your shoot</h2>
          <p>Wedding, corporate or family — message us with your date and we&apos;ll reply with availability and options.</p>
          <div className={styles.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa("Hi BreathArt! I'd like to book a photoshoot.")} target="_blank" rel="noopener noreferrer" className={styles.btnGold}>
              Book on WhatsApp
            </a>
            <a href="tel:+971526400679" className={styles.btnGlass}>
              Call +971 52 640 0679
            </a>
          </div>
          <div className={styles.contactRow}>
            <span>12 22A Street, Al Qusais, Dubai</span>
            <span>info@breathartstudio.com</span>
            <Link href="/contact">More contact options →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
