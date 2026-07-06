'use client';

import { useEffect } from 'react';

const GA_ID = 'G-E0Y9W77G5B';

const INTERACTION_EVENTS = ['mousemove', 'scroll', 'touchstart', 'keydown', 'click'] as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Loads Google Analytics lazily: on the first user interaction, or shortly
 * after the page has finished loading, whichever comes first.
 */
export default function Analytics() {
  useEffect(() => {
    let loaded = false;

    const loadAnalytics = () => {
      if (loaded) {
        return;
      }
      loaded = true;

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      script.onload = () => {
        gtag('js', new Date());
        gtag('config', GA_ID);
      };
      document.head.appendChild(script);
    };

    const loadAfterDelay = () => setTimeout(loadAnalytics, 1000);

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, loadAnalytics, { passive: true, once: true }),
    );

    if (document.readyState === 'complete') {
      loadAfterDelay();
    } else {
      window.addEventListener('load', loadAfterDelay, { once: true });
    }

    return () => {
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, loadAnalytics));
      window.removeEventListener('load', loadAfterDelay);
    };
  }, []);

  return null;
}
