'use client';

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          style={{ animation: 'baPopIn 0.25s ease-out both' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-28 right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center
            dark:bg-white/10 bg-black/5
            dark:hover:bg-pie-violet/30 hover:bg-pie-violet/15
            border dark:border-white/15 border-black/10
            dark:hover:border-pie-violet/50 hover:border-pie-violet/40
            backdrop-blur-xl shadow-lg
            dark:text-zinc-300 text-zinc-600
            dark:hover:text-white hover:text-pie-violet
            transition-colors duration-200 cursor-pointer scroll-top-tailwind-fallback"
        >
          <ChevronUp className="w-5 h-5 scroll-top-icon" />
        </button>
      )}
      <style>{`@keyframes baFadeIn{from{opacity:0}to{opacity:1}}@keyframes baSlideIn{from{transform:translateX(100%);opacity:.9}to{transform:translateX(0);opacity:1}}@keyframes baPopIn{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.ba-anim{animation:none!important}}`}</style>
    </>
  );
}
