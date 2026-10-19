'use client';

import { useState } from 'react';
import { categories } from '../packages';
import styles from '../offers.module.css';

const labels = { Newborn: 'Newborn', Maternity: 'Maternity', CakeSmash: 'Cake Smash', Couple: 'Couple', Event: 'Events' };
const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;

export default function PackageTabs() {
  const keys = Object.keys(categories);
  const [active, setActive] = useState(keys[0]);
  const cat = categories[active];

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Package categories">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={active === k}
            className={`${styles.tab} ${active === k ? styles.tabActive : ''}`}
            onClick={() => setActive(k)}
          >
            {labels[k] || k}
          </button>
        ))}
      </div>

      <div className={styles.catHead}>
        <h3>{cat.title}</h3>
        <p>{cat.tagline}</p>
      </div>

      <div className={`${styles.cards} ${cat.packages.length === 4 ? styles.cards4 : ''}`}>
        {cat.packages.map((p, i) => {
          const featured = i === 1;
          return (
            <div key={p.name} className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>
              {featured && <span className={styles.badge}>Most popular</span>}
              <p className={styles.pkgName}>{p.name}</p>
              {p.subtitle && <p className={styles.pkgSub}>{p.subtitle}</p>}
              <p className={styles.price}>{p.price.replace('DHS', 'AED')}</p>
              <ul className={styles.incl}>
                {p.inclusions.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <a
                href={wa(`Hi BreathART! I'd like to book the ${labels[active] || active} ${p.name} (${p.price.replace('DHS', 'AED')}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={featured ? styles.btnGold : styles.btnDark}
              >
                Book this package
              </a>
            </div>
          );
        })}
      </div>

      {cat.addons && (
        <div className={styles.addons}>
          <h4>Add-ons</h4>
          <ul>
            {cat.addons.map((a) => (
              <li key={a.name}>
                <span>{a.name}</span>
                <strong>{a.price}</strong>
              </li>
            ))}
          </ul>
          <p>All packages can be paid with card, cash, Tabby or Tamara.</p>
        </div>
      )}
    </div>
  );
}
