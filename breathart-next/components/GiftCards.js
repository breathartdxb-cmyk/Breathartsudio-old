import Image from 'next/image';
import s from './giftCards.module.css';

const wa = (msg) => `https://wa.me/971526400679?text=${encodeURIComponent(msg)}`;

function Visual({ c }) {
  if (c.type === 'voucher') {
    return (
      <>
        <Image src={c.image} alt={c.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectFit: 'cover', opacity: 0.85 }} />
        <div className={s.voucherCard}>
          <span className={s.vBrand}>BreathART</span>
          <span className={s.vTitle}>Gift Voucher</span>
          <span className={s.vSub}>Newborn session</span>
        </div>
      </>
    );
  }
  if (c.type === 'hamper' || c.type === 'corporate') {
    return (
      <div className={s.box} aria-hidden="true">
        <span className={s.boxBody} />
        <span className={s.boxLid} />
        <span className={s.ribbonV} />
        <span className={s.bow} />
        <span className={s.tag}>{c.type === 'corporate' ? 'Your logo' : 'With love'}</span>
      </div>
    );
  }
  return (
    <div className={s.frame}>
      <div className={s.mat}>
        <div className={s.photo}>
          <Image src={c.image} alt={c.alt} fill sizes="(max-width: 560px) 70vw, 18vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

export default function GiftCards({ cards, eyebrow = 'Choose your gift', title = 'Gifts for every occasion' }) {
  return (
    <section className={s.wrap}>
      <div className={s.head}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h2 className={s.h2}>{title}</h2>
      </div>
      <div className={s.grid}>
        {cards.map((c) => (
          <a key={c.title} href={wa(c.msg)} target="_blank" rel="noopener noreferrer" className={s.card}>
            <div className={`${s.visual} ${s[c.type]}`}>
              <Visual c={c} />
              <span className={s.price}>{c.price}</span>
            </div>
            <div className={s.body}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className={s.cta}>Order on WhatsApp →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
