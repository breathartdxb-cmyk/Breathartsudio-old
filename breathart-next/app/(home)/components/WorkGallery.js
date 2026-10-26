'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../home.module.css';

const NB = '/assets/services/newborn/newborn-and-maternity/';

const W = '/assets/gallery/wedding/';
const C = '/assets/gallery/corporate/';

// `home: true` = shown in the "All" view; every item shows under its own category.
const F = '/assets/gallery/family/';
const E = '/assets/gallery/event/';
const G = '/assets/gallery/newborn/';

const items = [
  { src: `${W}pexels-abdallah-naser-2156661580-34317944.webp`, alt: 'Bride and groom on palace steps', cat: 'Wedding', home: true },
  { src: `${NB}8th.jpeg`, alt: 'Sleeping newborn on a soft white fur', cat: 'Newborn', home: true },
  { src: `${C}pexels-silverkblack-36733421.webp`, alt: 'Executive headshot in a suit', cat: 'Corporate', home: true },
  { src: '/assets/hero/2_optimized.webp', alt: 'Bride and groom under a floral arch', cat: 'Wedding', home: true },
  { src: `${F}photo-32.webp`, alt: 'Black and white family portrait with newborn', cat: 'Family', home: true },
  { src: `${C}pexels-pro5-vn-1368185933-25950425.webp`, alt: 'Professional woman portrait', cat: 'Corporate', home: true },
  { src: `${W}pexels-braiki-dhia-eddine-2159140624-35819262.webp`, alt: 'Wedding guests celebrating', cat: 'Wedding', home: true },
  { src: `${NB}lp-sunflower-chair.webp`, alt: 'Baby in a sunflower themed setup', cat: 'Newborn', home: true },
  { src: `${C}pexels-pavel-danilyuk-8761513.webp`, alt: 'Business presentation in a meeting room', cat: 'Corporate', home: true },
  { src: `${W}pexels-abdallah-mahmoud-2153337567-32671354.webp`, alt: 'Couple portrait in a garden', cat: 'Wedding', home: true },
  { src: `${F}nb-360-kat.webp`, alt: 'Parents hands forming a heart around baby feet', cat: 'Family', home: true },
  { src: `${E}pexels-panditwiguna-2788487.webp`, alt: 'Elegant event table setup', cat: 'Events', home: true },

  // Newborn
  { src: `${G}A98C22F0-2F0E-4A32-B285-1E23FB0AD1E3.webp`, alt: 'Newborn in a honey bee outfit', cat: 'Newborn' },
  { src: `${G}BK-108_LORRIE_890_.jpg.webp`, alt: 'Smiling baby in a white knitted hat', cat: 'Newborn' },
  { src: `${G}BK-62_LORI_244_-_Copy.jpg.webp`, alt: 'Newborn sleeping in a white hat', cat: 'Newborn' },
  { src: `${G}BK_264_SABRINA_338_.jpg_filename_UTF_8_BK_264_SABRINA_338_.jpg.webp`, alt: 'Smiling newborn curled on white fur', cat: 'Newborn' },
  { src: `${NB}th-moon-teddies.webp`, alt: 'Newborn on a moon pillow with knitted teddies', cat: 'Newborn' },
  { src: `${NB}th-starry-night.webp`, alt: 'Newborn in a starry night basket setup', cat: 'Newborn' },

  // Family
  { src: `${F}IMG_9770.webp`, alt: 'Parents cuddling their newborn', cat: 'Family' },
  { src: `${F}IMG_9773.webp`, alt: 'Family studio portrait with a newborn', cat: 'Family' },
  { src: `${F}bk-102-taise.webp`, alt: 'Smiling parents holding their baby', cat: 'Family' },
  { src: `${F}img_1263.webp`, alt: 'Black and white portrait of parents with their baby', cat: 'Family' },
  { src: `${NB}lp-family.webp`, alt: 'Parents with their newborn in soft window light', cat: 'Family' },
  { src: `${NB}20.jpeg`, alt: 'Mother and father with their newborn daughter', cat: 'Family' },

  // Events
  { src: `${E}WhatsApp_Image_2026-06-25_at_17.28.30.webp`, alt: 'Outdoor dinner event setup at sunset', cat: 'Events' },
  { src: `${E}chuttersnap-aEnH4hJ_Mrs-unsplash.webp`, alt: 'Event dinner table with flowers', cat: 'Events' },
  { src: `${E}pexels-b_s-media-production-568838161-34171711.webp`, alt: 'Guest in traditional Emirati dress at an event', cat: 'Events' },
  { src: `${E}pexels-caleboquendo-11329860.webp`, alt: 'Audience at a conference', cat: 'Events' },
  { src: `${E}pexels-cherubs-22669860.webp`, alt: 'Stage lights over a large event audience', cat: 'Events' },
  { src: `${E}pexels-miriam-salgado-157461221-10733219_1.webp`, alt: 'Beach event seating setup', cat: 'Events' },
  { src: `${E}pexels-miriam-salgado-157461221-10733602_1.webp`, alt: 'Beach ceremony arch with flowers', cat: 'Events' },
];

const filters = ['All', 'Wedding', 'Corporate', 'Newborn', 'Family', 'Events'];

export default function WorkGallery() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? items.filter((i) => i.home) : items.filter((i) => i.cat === active);

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
