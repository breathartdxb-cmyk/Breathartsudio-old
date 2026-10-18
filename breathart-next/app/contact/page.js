import Image from 'next/image';
import home from '../(home)/home.module.css';
import styles from './contact.module.css';
import ContactForm from '../../components/ContactForm';

const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;

const channels = [
  {
    label: 'WhatsApp',
    value: '+971 52 640 0679',
    note: 'Fastest reply',
    href: wa("Hi BreathART! I'd like to book a photoshoot."),
    external: true,
  },
  { label: 'Call us', value: '+971 52 640 0679', note: '+971 52 215 0837', href: 'tel:+971526400679' },
  { label: 'Email', value: 'info@breathartstudio.com', note: 'breathartdxb@gmail.com', href: 'mailto:info@breathartstudio.com' },
  {
    label: 'Visit',
    value: 'Al Qusais, Dubai',
    note: '12 22A Street',
    href: 'https://www.google.com/maps/search/?api=1&query=BreathART+Photography+Studio+Al+Qusais+Dubai',
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className={home.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/assets/gallery/wedding/pexels-habib-hosseini-3673463.webp" alt="Bride portrait by BreathART" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={home.heroEyebrow}>Contact · Dubai &amp; Abu Dhabi</p>
          <h1 className={styles.title}>
            Let&apos;s create <em>something beautiful</em>
          </h1>
          <p className={styles.lead}>
            Tell us about your shoot — newborn, family, wedding, corporate or commercial — and we&apos;ll reply with
            availability and the right package.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className={styles.channelsWrap}>
        <div className={styles.channels}>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className={styles.channel}
            >
              <span className={styles.chLabel}>{c.label}</span>
              <strong>{c.value}</strong>
              <span className={styles.chNote}>{c.note}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + locations */}
      <section className={home.section}>
        <div className={styles.split}>
          <div className={styles.formCard}>
            <p className={home.eyebrow}>Enquiry form</p>
            <h2 className={home.h2}>Reserve your date</h2>
            <p className={styles.formNote}>Share a few details and our team will get back to you shortly.</p>
            <ContactForm buttonText="Send enquiry" showPackageField={false} />
          </div>

          <div>
            <p className={home.eyebrow}>Our outlets</p>
            <h2 className={home.h2}>Visit or book on location</h2>

            <div className={styles.outlet}>
              <h3>Dubai studio</h3>
              <p>12 22A Street, Al Qusais, Dubai, UAE</p>
              <p>
                <a href="tel:+971526400679">+971 52 640 0679</a>
              </p>
            </div>
            <div className={styles.map}>
              <iframe
                title="BreathART Photography Studio, Al Qusais, Dubai"
                src="https://maps.google.com/maps?q=BreathART%20Photography%20Studio%20Al%20Qusais%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.outlet}>
              <h3>Abu Dhabi</h3>
              <p>Studio and on-location sessions across Abu Dhabi.</p>
              <p>
                <a href={wa("Hi BreathART! Could you share your Abu Dhabi location?")} target="_blank" rel="noopener noreferrer">
                  Ask for directions on WhatsApp →
                </a>
              </p>
            </div>
            <div className={styles.outlet}>
              <h3>On location, anywhere in the UAE</h3>
              <p>At-home newborn and family sessions, weddings, offices, venues and events — Dubai, Abu Dhabi, Sharjah and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={home.cta}>
        <div className={home.ctaInner}>
          <p className={home.heroEyebrow}>Prefer to chat?</p>
          <h2>We usually reply on WhatsApp first</h2>
          <p>Send us a message any time — our team replies with availability, packages and next steps.</p>
          <div className={home.ctaRow} style={{ justifyContent: 'center' }}>
            <a href={wa("Hi BreathART! I'd like to book a photoshoot.")} target="_blank" rel="noopener noreferrer" className={home.btnGold}>
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
