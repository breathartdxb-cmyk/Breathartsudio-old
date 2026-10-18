import Link from 'next/link';
import { BreadcrumbSchema, WebPageSchema } from '../schema';

export const metadata = {
  title: 'About BreathART Photography Studio | Dubai & Abu Dhabi | BreathART Group',
  description: 'BreathART Photography Studio is part of BreathART Group, with outlets in Dubai and Abu Dhabi. Family, newborn, cake smash, wedding, corporate and commercial photography — premium quality at affordable prices, delivered on time.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About BreathART Photography Studio | Dubai & Abu Dhabi',
    description: 'Premium photography at affordable prices — family, newborn, wedding, corporate and commercial. Outlets in Dubai and Abu Dhabi. Part of BreathART Group.',
    url: 'https://www.breathartstudio.com/about',
    images: [
      {
        url: '/assets/hero/hero_nature.png',
        width: 1200,
        height: 630,
        alt: 'About BreathART Photography Studio',
      },
    ],
  },
};

const groupCompanies = [
  {
    name: 'BreathART Photography',
    text: 'Family, newborn, cake smash, wedding, corporate and commercial photography, plus events and photo printing across the UAE.',
    href: '/',
    linkLabel: 'You are here',
  },
  {
    name: 'Forventures',
    text: 'A consultancy and service provider for corporates, using AI technology to strengthen marketing, operations, human resources and accounts.',
  },
  {
    name: 'TradeLicenceDXB',
    text: 'Helping entrepreneurs obtain the right trade licence and legal documentation to start and run a business in the UAE.',
    href: 'https://tradelicencedxb.com',
    linkLabel: 'tradelicencedxb.com',
  },
  {
    name: 'BICT',
    text: 'An AI and creative technology institution in India, now expanding to the UAE.',
    href: 'https://www.breathartinstitute.in/',
    linkLabel: 'breathartinstitute.in',
  },
];

const features = [
  {
    title: 'Experienced Photographers',
    desc: 'Master artists with decades of collective experience in fine art photography.',
    image: '/assets/features/feature_photographers.png',
    link: '/services',
  },
  {
    title: 'Dedicated Lady Staff',
    desc: 'Ensuring absolute comfort, privacy, and ease for maternity & newborn sessions.',
    image: '/assets/features/feature_maternity.png',
    link: '/services',
  },
  {
    title: 'Premium Studio',
    desc: 'A state-of-the-art space designed for creative excellence and high-fashion aesthetics.',
    image: '/assets/features/feature_studio.png',
    link: '/services',
  },
  {
    title: 'High-End Equipment',
    desc: 'Utilizing the latest mirrorless technology and professional studio lighting.',
    image: '/assets/features/feature_equipment.png',
    link: '/services',
  },
  {
    title: 'On-Time Delivery',
    desc: 'The best quality, delivered when we promise — without compromising on post-production.',
    image: '/assets/features/feature_delivery.png',
    link: '/services',
  },
  {
    title: '100+ Creators',
    desc: 'Dedicated teams for each service, backed by a network of more than 100 creators.',
    image: '/assets/services/service_wedding.png',
    link: '/services',
  },
];

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .about-story-section { padding: 6rem 0 1rem 0; }
        .about-standard-header { border-top: 1px solid rgba(158, 112, 96, 0.2); padding-top: 2.5rem; }
        
        @media (max-width: 768px) {
          .about-story-section { padding: 4rem 0 0 !important; }
          .about-standard-header { margin-top: 1rem; padding-top: 4rem !important; }
          .story-custom-grid { margin-bottom: 0 !important; }
          .pillar-row {
              margin: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
          }
          .pillar-right {
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
          }
          .pillar-img { 
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important; 
              aspect-ratio: 16/9 !important; 
              object-fit: cover !important; 
              display: block !important;
              margin: 0 !important;
              padding: 0 !important;
              border-radius: 4px !important;
          }
          
          /* Specifically move the first image a little to the left and reduce its size */
          .pillar-row:first-child .pillar-img {
              transform: translateX(0.1rem);
              width: 88% !important;
              max-width: 88% !important;
          }
          
          /* Center align the connect section on mobile */
          .about-connect-col {
              text-align: center !important;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
        }
      `}} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <WebPageSchema
        name="About BreathART Photography Studio"
        description="Premium photography studio with outlets in Dubai and Abu Dhabi, part of BreathART Group."
        url="/about"
      />
      <header
        className="page-header"
        style={{
          background: "linear-gradient(rgba(252,252,252,0.4), rgba(252,252,252,0.4)), url('/assets/hero/hero_nature.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 53%',
        }}
      >
        <div className="container container-narrow animate-reveal">
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Legacy</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: '4rem' }}>About BreathART</h1>
        </div>
      </header>

      <section className="section about-story-section">
        <div className="container text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Our Story</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Professional &amp; Premium Experience</h2>
        </div>

        <div className="story-custom-grid" style={{ marginTop: '2rem' }}>
          {/* Left Column */}
          <div className="story-left-col">
            <p className="story-text-emphasis">
              <strong>BreathART Photography Studio</strong> is a premium photography studio with outlets in <strong>Dubai and Abu Dhabi</strong>, and part of <strong>BreathART Group</strong>. We offer premium services at affordable prices — from family photography to weddings, newborn to cake smash, and corporate to commercial.
            </p>
            <img src="/assets/about/album_intro.png" alt="Our Story Showcase" className="story-portrait-img" loading="lazy" decoding="async" />
          </div>

          {/* Right Column */}
          <div className="story-right-col">
            <p className="story-text">
              Each type of shoot is handled by its own talented team, supported by a network of more than 100 creators. Together they bring fresh, creative ideas to every session — whether it is a newborn theme, a wedding film or a brand campaign.
            </p>
            <p className="story-text">
              Two things matter most to us: the best possible quality, and delivering on time. Beyond photography and videography, we also cover events and offer professional photo printing services across the UAE.
            </p>
            <p className="story-text" style={{ fontStyle: 'italic', fontWeight: '500' }}>
              This is the BreathArt difference. This is art, redefined.
            </p>
          </div>
        </div>
      </section>

      {/* BreathART Group */}
      <section className="section" style={{ padding: '2rem 0 5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>Part of something bigger</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>BreathART Group</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '1rem auto 0', lineHeight: 1.8 }}>
              BreathART Photography is a member of BreathART Group — a family of companies serving creators, families and businesses in the UAE and India.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {groupCompanies.map((c) => (
              <div key={c.name} style={{ border: '1px solid rgba(158, 112, 96, 0.25)', borderRadius: '4px', padding: '2rem 1.6rem', background: '#fff' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '1.35rem', margin: '0 0 0.8rem', color: 'var(--color-white)' }}>{c.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{c.text}</p>
                {c.href && (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1.2rem', color: 'var(--color-gold)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                    {c.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section Header */}
      <section className="section" style={{ padding: '0 0 3rem 0' }}>
        <div className="container text-center about-standard-header" style={{ textAlign: 'center' }}>
          <span className="cinematic-title" style={{ color: 'var(--color-gold)' }}>The Standard</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0' }}>Why Choose BreathArt</h2>
        </div>
      </section>

      {/* Why Choose Us Features list */}
      <section className="section" style={{ padding: '0 0 0 0' }}>
        <div className="pillar-section-container" style={{ marginTop: '0', marginBottom: '2rem' }}>
          {features.map((feature, index) => (
            <div key={index} className={`pillar-row ${index % 2 !== 0 ? 'alt-layout' : ''}`}>
              <div className="pillar-left">
                <div className="pillar-header">
                  <span className="pillar-plus">+</span>
                  <h2 className="pillar-title">{feature.title}</h2>
                </div>
                <p className="pillar-desc">{feature.desc}</p>
              </div>
              <div className="pillar-right">
                <img src={feature.image} alt={feature.title} className="pillar-img" loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Quote Section */}
      <section className="section text-center" style={{ padding: '3rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            color: 'var(--color-gold)',
            margin: '0 auto',
            marginBottom: '0rem',
            maxWidth: '800px',
            lineHeight: '1.5',
          }}>
            "Every picture tells a story of love"
          </p>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="section" style={{ padding: '4rem 0 8rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderTop: '1px solid rgba(158, 112, 96, 0.2)',
            paddingTop: '4rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}>
              <div className="about-connect-col">
                <span className="cinematic-title" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>
                  Reserve Your Session
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  color: 'var(--color-white)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>
                  Connect With Us
                </h2>
              </div>

              <div className="about-connect-col">
                <p style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Have a vision you want to bring to life? Contact our team today to discuss package options, custom concepts, and calendar availability.
                </p>
                <span style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--color-gold)',
                  marginBottom: '2.5rem'
                }}>
                  Ready to capture your milestones?
                </span>
                <Link 
                  href="/contact"
                  className="btn btn-gold"
                  style={{
                    padding: '1.2rem 3rem',
                    letterSpacing: '3px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Get In Touch &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


