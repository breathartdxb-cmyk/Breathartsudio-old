import Link from 'next/link';
import Image from 'next/image';
import home from '../app/(home)/home.module.css';
import s from './serviceLanding.module.css';

const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;

const reviews = [
  {
    text: 'Great service and professional staff! Prajith and Gladson were great with the baby and calmed her down to settle for the photoshoot. I would highly recommend them!',
    author: 'Arsalan A.',
  },
  { text: 'Did a newborn photoshoot, mobile service. What an amazing and highly professional team…', author: 'Anisah A.' },
  {
    text: 'Best experience with the team. Prajith & Gladson were very patient and co-operative. We highly recommend them. Thank you team.',
    author: 'Neha J.',
  },
];

const steps = [
  { title: 'Message us', text: 'Share the type of shoot, date and location on WhatsApp or by phone.' },
  { title: 'Get your quote', text: 'We recommend the right package and confirm the price — no surprises.' },
  { title: 'Shoot day', text: 'A dedicated BreathART team arrives prepared, on time.' },
  { title: 'On-time delivery', text: 'Hand-edited photos and films delivered on the agreed date.' },
];

const allServices = [
  { label: 'Newborn & Maternity', href: '/newborn-photography-dubai' },
  { label: 'Family & Cake Smash', href: '/services/family-couple' },
  { label: 'Wedding', href: '/services/wedding' },
  { label: 'Corporate', href: '/services/corporate' },
  { label: 'Events', href: '/services/events' },
  { label: 'Videography', href: '/services/videography' },
  { label: 'Real Estate & Commercial', href: '/services/real-estate' },
  { label: 'Event Management', href: '/services/events-by-breathart' },
];

export default function ServiceLanding({ data }) {
  const d = data;
  const msg = d.waMessage;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <main className={home.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className={s.hero}>
        <Image src={d.hero.src} alt={d.hero.alt} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: d.hero.pos || 'center' }} />
        <div className={s.overlay} />
        <div className={s.heroContent}>
          <p className={home.heroEyebrow}>{d.eyebrow}</p>
          <h1 className={s.title}>{d.h1}</h1>
          <p className={s.lead}>{d.lead}</p>
          <div className={s.ctas}>
            <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
              {d.ctaLabel || 'Get a quote on WhatsApp'}
            </a>
            <a href="tel:+971526400679" className={home.btnGlass}>
              Call +971 52 640 0679
            </a>
          </div>
          <ul className={s.trust}>
            <li>
              <span className={home.stars}>★★★★★</span> 4.7 · 48 Google reviews
            </li>
            <li>Dubai &amp; Abu Dhabi</li>
            {d.priceFrom ? <li>From AED {d.priceFrom}</li> : <li>Custom quotes</li>}
            <li>On-time delivery</li>
          </ul>
        </div>
      </section>

      {/* Offerings */}
      <section className={home.section}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>{d.offerEyebrow || 'What we cover'}</p>
          <h2 className={home.h2}>{d.offerTitle}</h2>
          {d.offerLead && <p className={home.lead}>{d.offerLead}</p>}
        </div>
        <div className={s.offerGrid}>
          {d.offerings.map((o, i) => (
            <div key={o.title} className={s.offer}>
              <span className={home.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature */}
      <section className={`${home.feature} ${home.featureDark}`}>
        <div className={home.featureInner}>
          <div className={home.featureMedia}>
            <div className={home.featureMain}>
              <Image src={d.feature.main.src} alt={d.feature.main.alt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={home.featureSide}>
              {d.feature.side.map((x) => (
                <div key={x.src} className={home.featureSideImg}>
                  <Image src={x.src} alt={x.alt} fill sizes="(max-width: 900px) 50vw, 16vw" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={home.featureNum}>
              <span>★</span> Why BreathART
            </p>
            <h2 className={home.featureTitle}>{d.feature.title}</h2>
            <p className={home.featureLead}>{d.feature.text}</p>
            <ul className={home.points}>
              {d.feature.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className={home.ctaRow}>
              <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
                Check availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>Portfolio</p>
          <h2 className={home.h2}>{d.galleryTitle || 'Selected work'}</h2>
        </div>
        <div className={s.gallery}>
          {d.gallery.map((g) => (
            <figure key={g.src} className={s.galleryItem}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            </figure>
          ))}
        </div>
      </section>

      {/* Packages / pricing */}
      <section className={home.section}>
        <div className={s.priceBand}>
          <div>
            <p className={home.eyebrow}>Packages</p>
            <h2 className={home.h2}>{d.priceTitle}</h2>
            <p className={home.lead} style={{ margin: 0 }}>
              {d.priceText}
            </p>
          </div>
          <div className={s.priceActions}>
            <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={home.btnPrimary}>
              Get my quote
            </a>
            <Link href="/offers" className={home.linkDark}>
              See all packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>How it works</p>
          <h2 className={home.h2}>Simple from start to finish</h2>
        </div>
        <div className={home.reasons}>
          {steps.map((x, i) => (
            <div key={x.title} className={home.reason}>
              <span className={home.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className={home.section}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>Kind words</p>
          <h2 className={home.h2}>Rated 4.7 out of 5 on Google</h2>
        </div>
        <div className={home.reviewGrid}>
          {reviews.map((r) => (
            <blockquote key={r.author} className={home.review}>
              <span className={home.quoteMark}>“</span>
              <p>{r.text}</p>
              <footer>
                <strong>{r.author}</strong> · Google review
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${home.section} ${home.tinted}`}>
        <div className={home.sectionHead}>
          <p className={home.eyebrow}>FAQ</p>
          <h2 className={home.h2}>{d.faqTitle || 'Questions we get asked'}</h2>
        </div>
        <div className={s.faqs}>
          {d.faqs.map((f) => (
            <details key={f.q} className={s.faq}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className={home.section} style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <p className={home.eyebrow} style={{ textAlign: 'center' }}>
          Explore more services
        </p>
        <nav className={s.related} aria-label="Other services">
          {allServices
            .filter((x) => x.href !== d.path)
            .map((x) => (
              <Link key={x.href} href={x.href}>
                {x.label}
              </Link>
            ))}
        </nav>
      </section>

      {/* CTA */}
      <section className={home.cta}>
        <div className={home.ctaInner}>
          <p className={home.heroEyebrow}>{d.label}</p>
          <h2>{d.ctaTitle || 'Let’s plan your shoot'}</h2>
          <p>Message us with your date and requirements — we’ll reply with availability and the right package.</p>
          <div className={home.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
              Chat on WhatsApp
            </a>
            <a href="tel:+971526400679" className={home.btnGlass}>
              Call now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
