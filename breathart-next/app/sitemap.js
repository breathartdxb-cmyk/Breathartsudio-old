import { blogs } from '@/data/blogs';

const baseUrl = 'https://www.breathartstudio.com';

const pages = [
  { path: '', freq: 'weekly', priority: 1.0 },
  { path: '/services/newborn-maternity', freq: 'weekly', priority: 0.9 },
  { path: '/newborn-photography-dubai', freq: 'weekly', priority: 0.9 },
  { path: '/services', freq: 'monthly', priority: 0.8 },
  { path: '/services/family-couple', freq: 'monthly', priority: 0.8 },
  { path: '/services/wedding', freq: 'monthly', priority: 0.8 },
  { path: '/services/photography', freq: 'monthly', priority: 0.7 },
  { path: '/services/videography', freq: 'monthly', priority: 0.7 },
  { path: '/services/corporate', freq: 'monthly', priority: 0.7 },
  { path: '/services/events', freq: 'monthly', priority: 0.6 },
  { path: '/services/real-estate', freq: 'monthly', priority: 0.6 },
  { path: '/services/events-by-breathart', freq: 'monthly', priority: 0.5 },
  { path: '/offers', freq: 'weekly', priority: 0.8 },
  { path: '/about', freq: 'monthly', priority: 0.7 },
  { path: '/contact', freq: 'monthly', priority: 0.8 },
  { path: '/blog', freq: 'weekly', priority: 0.7 },
  { path: '/privacy-policy', freq: 'yearly', priority: 0.2 },
  { path: '/terms-and-conditions', freq: 'yearly', priority: 0.2 },
];

function toDate(value) {
  const d = new Date(value);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap() {
  const staticPages = pages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const blogPages = blogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: toDate(b.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
