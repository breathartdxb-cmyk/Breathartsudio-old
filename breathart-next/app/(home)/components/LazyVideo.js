'use client';

import { useEffect, useRef, useState } from 'react';

export default function LazyVideo({ src, style, className }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Load the video slightly before it enters the viewport (no animation library needed)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setIsInView(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setIsInView(true); io.disconnect(); }
    }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', ...style }} className={className}>
      {isInView && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
}
