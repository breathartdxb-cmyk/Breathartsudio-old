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

  return (
    <main style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh' }}>
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
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="post-body-wrapper">
        <div className="post-content">
          <MarkdownRenderer content={blog.content} />
          
          <div className="post-cta">
            <div className="post-cta-logo">
              <img src="/assets/logo/BreathArt Photography new Logo.png" alt="BreathArt Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3 className="post-cta-title">Ready to capture your story?</h3>
            <p className="post-cta-desc">Our team is ready to help you plan the perfect session in Dubai.</p>
            <Link href="/contact" className="noha-btn">
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
