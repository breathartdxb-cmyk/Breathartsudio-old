import React from 'react';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return { title: 'Post Not Found' };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.breathartstudio.com/blog/${blog.slug}`,
      type: 'article',
      images: [encodeURI(blog.image)],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const SITE = 'https://www.breathartstudio.com';
  const published = new Date(blog.date);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title.split('|')[0].trim(),
    description: blog.metaDescription,
    image: `${SITE}${encodeURI(blog.image)}`,
    datePublished: isNaN(published.getTime()) ? undefined : published.toISOString(),
    author: { '@type': 'Organization', name: 'BreathArt Photography Studio', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'BreathArt Photography Studio',
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo/BreathArt%20Photography%20new%20Logo.png` },
    },
    mainEntityOfPage: `${SITE}/blog/${blog.slug}`,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: blog.title.split('|')[0].trim(), item: `${SITE}/blog/${blog.slug}` },
    ],
  };

  const isNewborn = blog.category === 'Newborn';
  const NB_STYLE = `
    .nb-cta-btn{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.75rem;padding:1rem 1.75rem;border-radius:999px;
      background:linear-gradient(135deg,#f6dfae 0%,#d9a66f 100%);color:#2b1a12 !important;font-weight:700;font-size:1.02rem;
      letter-spacing:.2px;text-decoration:none;box-shadow:0 0 0 0 rgba(217,166,111,.75);animation:nbPulse 2.2s infinite;
      transition:transform .2s ease, filter .2s ease}
    .nb-cta-btn:hover{transform:translateY(-2px);filter:brightness(1.05)}
    .nb-cta-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}
    @keyframes nbPulse{0%{box-shadow:0 0 0 0 rgba(217,166,111,.75)}70%{box-shadow:0 0 0 16px rgba(217,166,111,0)}100%{box-shadow:0 0 0 0 rgba(217,166,111,0)}}
    @media (prefers-reduced-motion: reduce){.nb-cta-btn{animation:none}}
    .nb-cta-box{margin:0 0 2.5rem;padding:1.5rem 1.75rem;border-radius:18px;border:1px solid rgba(217,166,111,.55);
      background:rgba(217,166,111,.08);color:var(--color-white)}
    .nb-cta-box p{margin:0;font-size:1.05rem;line-height:1.6}
    .nb-cta-box .nb-cta-btn{margin-top:1rem}
  `;

  const faqSchema = blog.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null;

  return (
    <main style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh' }}>
      {isNewborn && <style dangerouslySetInnerHTML={{ __html: NB_STYLE }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Full Bleed Hero Section */}
      <section className="post-hero">
        {/* Parallax/Scaling Background */}
        <div className="post-hero-bg">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="post-hero-img animate-slow-zoom"
          />
          <div className="post-hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="post-hero-content">
          <Link href="/blog" className="post-back-link">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Journal
          </Link>
          <h1 className="post-title">
            {blog.title.split('|')[0]}
          </h1>
          <div className="post-meta">
            <span>By BreathArt Studio</span>
            <span className="post-meta-dot"></span>
            <span>Dubai, UAE</span>
          </div>
          {isNewborn && (
            <Link href="/newborn-photography-dubai" className="nb-cta-btn">
              See Newborn Packages from AED 499 →
            </Link>
          )}
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="post-body-wrapper">
        <div className="post-content">
          {isNewborn && (
            <div className="nb-cta-box">
              <p><strong>Planning your baby&apos;s newborn photoshoot?</strong> See our themes, sample photos and packages — studio in Al Qusais or a home session anywhere in the UAE.</p>
              <Link href="/newborn-photography-dubai" className="nb-cta-btn">
                View Newborn Photography →
              </Link>
            </div>
          )}
          <MarkdownRenderer content={blog.content} />

          {blog.faqs?.length > 0 && (
            <div style={{ marginTop: '3rem', color: 'var(--color-white)', fontSize: '1.08rem', lineHeight: 1.75 }}>
              <h2 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '2rem', margin: '0 0 1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-shade-3)' }}>
                Frequently asked questions
              </h2>
              {blog.faqs.map((f) => (
                <details key={f.q} style={{ borderBottom: '1px solid var(--color-shade-3)', padding: '1.1rem 0' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.q}</summary>
                  <p style={{ margin: '0.8rem 0 0' }}>{f.a}</p>
                </details>
              ))}
            </div>
          )}
          
          <div className="post-cta">
            <div className="post-cta-logo">
              <img src="/assets/logo/BreathArt%20Photography%20new%20Logo.png" alt="BreathArt Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3 className="post-cta-title">Ready to capture your story?</h3>
            <p className="post-cta-desc">Our team is ready to help you plan the perfect session in our Dubai studio or at your home anywhere in the UAE.</p>
            {isNewborn && (
              <Link href="/newborn-photography-dubai" className="nb-cta-btn" style={{ marginTop: 0, marginBottom: '1.25rem' }}>
                See Newborn Packages & Themes →
              </Link>
            )}
            <a
              href={`https://wa.me/971526400679?text=${encodeURIComponent(`Hi BreathART! I read "${blog.title.split('|')[0].trim()}" and would like to book a session.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="noha-btn-primary"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
