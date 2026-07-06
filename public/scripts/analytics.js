const GA_ID = 'G-E0Y9W77G5B';

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

function loadAnalytics() {
  if (loadAnalytics.loaded) return;
  loadAnalytics.loaded = true;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  script.onload = () => {
    gtag('js', new Date());
    gtag('config', GA_ID);
  };
  document.head.appendChild(script);
}

const events = ['mousemove', 'scroll', 'touchstart', 'keydown', 'click'];
events.forEach(e =>
  window.addEventListener(e, loadAnalytics, { passive: true, once: true })
);

window.addEventListener('load', () =>
  setTimeout(loadAnalytics, 1000)
);