import Image from 'next/image';
import home from '../(home)/home.module.css';
import styles from './offers.module.css';
import PackageTabs from './components/PackageTabs';
import { BreadcrumbSchema } from '../schema';

const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;
const NB = '/assets/services/newborn/newborn-and-maternity/';

const included = [
  { title: 'Creative themes', text: 'Styled setups, props and backdrops designed for your shoot.' },
  { title: 'Professional editing', text: 'Every selected image is carefully hand-edited.' },
  { title: 'Studio or on location', text: 'Dubai and Abu Dhabi outlets, or we come to you.' },
  { title: 'On-time delivery', text: 'Your gallery delivered on the date we agree.' },
];

const faqs = [
  { q: 'Can I customise a package?', a: 'Yes. Tell us what you need — extra edited photos, a video reel, an album or a second location — and we will tailor the package and price.' },
  { q: 'Do you have packages for weddings and corporate shoots?', a: 'Weddings and corporate shoots are quoted individually based on hours, team size and deliverables. Message us for a quick quote.' },
  { q: 'Can I pay in instalments?', a: 'Yes — we accept Tabby and Tamara, as well as cash and card.' },
  { q: 'How do I book?', a: 'Tap “Book this package” to message us on WhatsApp. We will confirm your date and send the details.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function OffersPage() {
  return (
    <main className={home.page}>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Packages & Offers', url: '/offers' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/assets/gallery/family/photo-32.webp" alt="Family portrait by BreathART" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={home.heroEyebrow}>Packages &amp; offers</p>
          <h1 className={styles.title}>
            Premium photography, <em>honest prices</em>
          </h1>
          <p className={styles.lead}>
            Clear, affordable packages for newborn, maternity, cake smash, couple and event photography — with custom quotes for
            weddings and corporate shoots.
          </p>
        </div>
      </section>

      {/* Featured newborn */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredMedia}>
            <Image src={`${NB}lp-smile-bucket.webp`} alt="Smiling newborn in a knitted hat" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.featuredText}>
            <p className={home.heroEyebrow}>Featured</p>
            <h2>Newborn photoshoot</h2>
            <p className={styles.featuredPrice}>
              <span>from</span> AED 499
            </p>
            <p className={styles.featuredLead}>
              Safe, gentle newborn sessions with hand-made themes — in our studio or at your home anywhere in the UAE.
              Four packages from AED 499 to AED 1,800. Female photographer available as an add-on.
            </p>
            <div className={home.ctaRow}>
              <a href={wa("Hi BreathART! I'd like to book a newborn photoshoot (from AED 499).")} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
                Book newborn shoot
              </a>
              <a href="#packages" className={home.linkLight}>
                See newborn packages →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className={home.section} id="packages">
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>Our packages</p>
          <h2 className={home.h2}>Choose your session</h2>
          <p className={home.lead}>All prices in AED. Tap a package to book it on WhatsApp.</p>
        </div>
        <PackageTabs />
      </section>

      {/* Included */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>Every package includes</p>
          <h2 className={home.h2}>The BreathART standard</h2>
        </div>
        <div className={home.reasons}>
          {included.map((x, i) => (
            <div key={x.title} className={home.reason}>
              <span className={home.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom quote band */}
      <section className={home.section}>
        <div className={styles.quoteBand}>
          <div>
            <p className={home.eyebrow}>Weddings · Corporate · Commercial</p>
            <h2 className={home.h2}>Need something bigger?</h2>
            <p className={home.lead} style={{ margin: 0 }}>
              Weddings, corporate headshots, conferences and brand campaigns are quoted to your exact requirements.
            </p>
          </div>
          <a href={wa("Hi BreathART! I'd like a custom quote for a wedding / corporate shoot.")} target="_blank" rel="noopener noreferrer" className={home.btnPrimary}>
            Get a custom quote
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>FAQ</p>
          <h2 className={home.h2}>Before you book</h2>
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
          <p className={home.heroEyebrow}>Ready when you are</p>
          <h2>Reserve your date</h2>
          <p>Popular weekend slots fill quickly — message us to check availability.</p>
          <div className={home.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa("Hi BreathART! I'd like to check availability for a photoshoot.")} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
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
