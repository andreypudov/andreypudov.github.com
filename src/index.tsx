import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';

import Analytics from './components/utils/Analytics';
import ScrollToTop from './components/utils/ScrollToTop';
import Routes from './Routes';

import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/collapse.js';
import './styles/style.scss';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-E0Y9W77G5B');

const rootElement = document.getElementById("root");
const app = (<React.StrictMode>
  <HashRouter>
    <Analytics />
    <ScrollToTop />

    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </HashRouter>
</React.StrictMode>);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(app);
}