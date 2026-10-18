'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/data/blogs';
import home from '../(home)/home.module.css';
import styles from './blog.module.css';

const clean = (t) => t.split('|')[0].trim();

function Card({ b }) {
  return (
    <Link href={`/blog/${b.slug}`} className={styles.card}>
      <div className={styles.cardImg}>
        <Image src={b.image} alt={clean(b.title)} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
        <span className={styles.cat}>{b.category}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.date}>{b.date}</p>
        <h3>{clean(b.title)}</h3>
        <p className={styles.excerpt}>{b.metaDescription}</p>
        <span className={styles.read}>Read article →</span>
      </div>
    </Link>
  );
}

export default function BlogListingPage() {
  const categories = ['All', ...Array.from(new Set(blogs.map((b) => b.category)))];
  const [active, setActive] = useState('All');
  const list = active === 'All' ? blogs : blogs.filter((b) => b.category === active);
  const [featured, ...rest] = list;

  return (
    <main className={home.page}>
      {/* Header */}
      <section className={styles.header}>
        <p className={home.eyebrow}>The BreathART Journal</p>
        <h1 className={styles.title}>
          Ideas, guides &amp; <em>stories</em> from our studio
        </h1>
        <p className={styles.lead}>
          Newborn themes, wedding locations, family and corporate photography tips — written by the BreathART team in
          Dubai and Abu Dhabi.
        </p>
        <div className={styles.filters} role="tablist" aria-label="Filter articles">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className={styles.featuredWrap}>
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredImg}>
              <Image src={featured.image} alt={clean(featured.title)} fill priority sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.featuredBody}>
              <p className={styles.featuredMeta}>
                <span>{featured.category}</span> · {featured.date}
              </p>
              <h2>{clean(featured.title)}</h2>
              <p>{featured.metaDescription}</p>
              <span className={styles.readLight}>Read the article →</span>
            </div>
          </Link>
        </section>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <section className={home.section} style={{ paddingTop: '3.5rem' }}>
          <div className={styles.grid}>
            {rest.map((b) => (
              <Card key={b.slug} b={b} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={home.cta}>
        <div className={home.ctaInner}>
          <p className={home.heroEyebrow}>Inspired?</p>
          <h2>Let&apos;s plan your shoot</h2>
          <p>Message us with your idea and date — we&apos;ll help with themes, outfits and locations.</p>
          <div className={home.ctaRow} style={{ justifyContent: 'center' }}>
            <a
              href={`https://wa.me/971526400679?text=${encodeURIComponent("Hi BreathART! I read your blog and I'd like to plan a photoshoot.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={home.btnGold}
            >
              Chat on WhatsApp
            </a>
            <Link href="/services" className={home.btnGlass}>
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
