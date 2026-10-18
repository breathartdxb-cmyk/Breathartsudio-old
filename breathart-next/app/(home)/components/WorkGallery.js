'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../home.module.css';

const NB = '/assets/services/newborn/newborn-and-maternity/';

const W = '/assets/gallery/wedding/';
const C = '/assets/gallery/corporate/';

const items = [
  { src: `${W}pexels-abdallah-naser-2156661580-34317944.webp`, alt: 'Bride and groom on palace steps', cat: 'Wedding' },
  { src: `${NB}8th.jpeg`, alt: 'Sleeping newborn on a soft white fur', cat: 'Newborn' },
  { src: `${C}pexels-silverkblack-36733421.webp`, alt: 'Executive headshot in a suit', cat: 'Corporate' },
  { src: '/assets/hero/2_optimized.webp', alt: 'Bride and groom under a floral arch', cat: 'Wedding' },
  { src: '/assets/gallery/family/photo-32.webp', alt: 'Black and white family portrait with newborn', cat: 'Family' },
  { src: `${C}pexels-pro5-vn-1368185933-25950425.webp`, alt: 'Professional woman portrait', cat: 'Corporate' },
  { src: `${W}pexels-braiki-dhia-eddine-2159140624-35819262.webp`, alt: 'Wedding guests celebrating', cat: 'Wedding' },
  { src: `${NB}lp-sunflower-chair.webp`, alt: 'Baby in a sunflower themed setup', cat: 'Newborn' },
  { src: `${C}pexels-pavel-danilyuk-8761513.webp`, alt: 'Business presentation in a meeting room', cat: 'Corporate' },
  { src: `${W}pexels-abdallah-mahmoud-2153337567-32671354.webp`, alt: 'Couple portrait in a garden', cat: 'Wedding' },
  { src: '/assets/gallery/family/nb-360-kat.webp', alt: 'Parents hands forming a heart around baby feet', cat: 'Family' },
  { src: '/assets/gallery/event/pexels-panditwiguna-2788487.webp', alt: 'Elegant event table setup', cat: 'Events' },
];

const filters = ['All', 'Wedding', 'Corporate', 'Newborn', 'Family', 'Events'];

export default function WorkGallery() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter gallery">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={styles.gallery}>
        {shown.map((i) => (
          <figure key={i.src} className={styles.galleryItem}>
            <Image src={i.src} alt={i.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" style={{ objectFit: 'cover' }} />
          </figure>
        ))}
      </div>
    </>
  );
}
