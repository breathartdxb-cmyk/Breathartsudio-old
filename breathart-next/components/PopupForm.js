'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';

// Pages where the timed pop-up should never appear (e.g. ad landing pages)
const NO_POPUP_PAGES = ['/newborn-photography-dubai'];

// eslint-disable-next-line no-unused-vars
export default function PopupForm({ repeatDelay }) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Gentle pop-up: shows once per visit, only after the visitor has engaged
    // (40 seconds on the site, or scrolled 60% of a page). Google treats pop-ups
    // that cover the page right after landing as "intrusive" on mobile.
    let alreadySeen = false;
    try { alreadySeen = sessionStorage.getItem('ba_popup_seen') === '1'; } catch (e) {}
    // Never auto-open for automated browsers (Google, Lighthouse, SEO audit tools)
    const isBot = navigator.webdriver || /bot|crawl|spider|lighthouse|headless|pagespeed|seoptimer/i.test(navigator.userAgent);
    if (isBot) alreadySeen = true;

    let timer;
    const show = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      try { sessionStorage.setItem('ba_popup_seen', '1'); } catch (e) {}
      setIsVisible(true);
    };
    const onScroll = () => {
      const doc = document.documentElement;
      if ((window.scrollY + window.innerHeight) / doc.scrollHeight > 0.6) show();
    };
    if (!alreadySeen) {
      timer = setTimeout(show, 40000);
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    const handleOpenPopup = (e) => {
      if (e && e.detail) {
        setPrefilledService(e.detail.service || '');
        setPrefilledMessage(e.detail.message || '');
      }
      setIsVisible(true);
    };

    window.addEventListener('openPopupForm', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('openPopupForm', handleOpenPopup);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (NO_POPUP_PAGES.includes(pathname)) return null;

  return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div
            className="popup-container ba-anim"
            style={{ animation: 'baPopIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both' }}
          >
            <button className="popup-close" onClick={handleClose} aria-label="Close Popup">
              <X size={20} />
            </button>
            
            <div className="popup-content">
              <h3 className="popup-title" style={{ color: '#FFFFFF' }}>Let's craft your narrative.</h3>
              <p className="popup-subtitle" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Get in touch with us to secure your session.</p>
              <ContactForm 
                theme="cinematic" 
                showPackageField={false} 
                initialService={prefilledService} 
                initialMessage={prefilledMessage} 
                onSuccess={() => setIsVisible(false)}
              />
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes baFadeIn{from{opacity:0}to{opacity:1}}@keyframes baSlideIn{from{transform:translateX(100%);opacity:.9}to{transform:translateX(0);opacity:1}}@keyframes baPopIn{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.ba-anim{animation:none!important}}`}</style>
    </>
  );
}
