/**
 * JSON-LD Structured Data Components for SEO
 * These render invisible <script type="application/ld+json"> tags.
 * No visual impact on the website.
 */

const SITE_URL = 'https://www.breathartstudio.com';
const SITE_NAME = 'BreathART Photography Studio';
const PARENT = {
  '@type': 'Organization',
  name: 'BreathART Group',
  subOrganization: [
    { '@type': 'Organization', name: 'Forventures' },
    { '@type': 'Organization', name: 'TradeLicenceDXB', url: 'https://tradelicencedxb.com' },
    { '@type': 'EducationalOrganization', name: 'BICT', url: 'https://www.breathartinstitute.in/' },
  ],
};
const AREAS = [
  { '@type': 'City', name: 'Dubai' },
  { '@type': 'City', name: 'Abu Dhabi' },
  { '@type': 'City', name: 'Sharjah' },
  { '@type': 'Country', name: 'United Arab Emirates' },
];
const LOGO_URL = `${SITE_URL}/assets/logo/BreathArt%20Photography%20new%20Logo.png`;
const SAME_AS = [
  'https://www.instagram.com/breathart.photography',
  'https://www.instagram.com/newborn_photography_breathart',
  'https://www.facebook.com/share/193V3fhepb/',
];
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '12 22A Street, Al Qusais',
  addressLocality: 'Dubai',
  addressRegion: 'Dubai',
  addressCountry: 'AE',
};

// ── Organization Schema ──
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    alternateName: ['BreathArt Studio', 'BreathART Photography'],
    slogan: 'Premium photography at affordable prices in Dubai & Abu Dhabi',
    knowsAbout: [
      'Newborn photography',
      'Maternity photography',
      'At-home newborn photography',
      'Family photography',
      'Cake smash photography',
      'Wedding photography',
      'Corporate photography',
      'Event photography',
      'Videography',
      'Photo printing',
    ],
    description: 'Premium photography studio with outlets in Dubai and Abu Dhabi, offering family, newborn, cake smash, wedding, corporate and commercial photography, videography, events and photo printing at affordable prices.',
    parentOrganization: PARENT,
    areaServed: AREAS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971-52-640-0679',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971-52-215-0837',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    email: 'info@breathartstudio.com',
    sameAs: SAME_AS,
    foundingDate: '2012',
    address: ADDRESS,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebSite Schema ──
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BreathART Photography Studio',
    alternateName: ['BreathArt Studio', 'BreathART Dubai'],
    url: `${SITE_URL}/`,
    description: 'Premium photography studio in Dubai offering newborn, wedding, corporate, event photography and videography services.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── LocalBusiness Schema ──
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/assets/hero/hero_nature.png`,
    '@id': `${SITE_URL}/#business`,
    description: 'Premium photography studio in Al Qusais, Dubai (with an outlet in Abu Dhabi) for family, newborn, cake smash, wedding, corporate and commercial photography, videography, events and photo printing.',
    parentOrganization: { '@type': 'Organization', name: 'BreathART Group' },
    telephone: '+971-52-640-0679',
    email: 'info@breathartstudio.com',
    address: ADDRESS,
    sameAs: SAME_AS,
    priceRange: '$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card, Tamara',
    areaServed: AREAS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Photography & Videography Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Photography',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newborn & Maternity Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cake Smash Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Product Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photo Printing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Photography' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Photography' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Videography',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cinematic Wedding Films' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate & Commercial Video' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial & Drone Cinematography' } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── BreadcrumbList Schema ──
export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebPage Schema ──
export function WebPageSchema({ name, description, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ContactPage Schema ──
export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BreathArt Photography Studio',
    description: 'Book your premium photography session or inquire about our services. Located in Dubai, UAE.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      telephone: ['+971-52-640-0679', '+971-52-215-0837'],
      email: 'info@breathartstudio.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Service Schema ──
export function ServiceSchema({ services }) {
  const schema = services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    url: `${SITE_URL}${service.url}`,
  }));

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

// ── OfferCatalog Schema ──
export function OfferCatalogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'BreathArt Photography Packages & Offers',
    description: 'Exclusive photography and videography packages with special pricing for newborn, maternity, wedding, couple, and event sessions in Dubai.',
    url: `${SITE_URL}/offers`,
    provider: {
      '@type': 'PhotographyBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Maternity Fine-Art Series',
        description: 'Elegant pregnancy portraiture celebrating raw beauty & motherhood',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'First Birthday Cake Smash',
        description: 'Celebrate milestones with fun themes, messy cakes, and pure joy',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Couple & Engagement Stories',
        description: 'Cinematic romance portfolios captured in stunning locations',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Event & Celebration Coverage',
        description: 'Comprehensive visual records for grand events and family galas',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
