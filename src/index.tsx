import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import Analytics from './components/utils/Analytics';
import ScrollToTop from './components/utils/ScrollToTop';
import Routes from './Routes';

import './i18n';

import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/collapse.js';
import './styles/style.scss';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-E0Y9W77G5B');

/*
const language = new Language();
const requestedLanguage = language.requestedLanguage();
const browserLanguages = language.browserLanguages();
language.applyLanguage(requestedLanguage, browserLanguages);
*/

const rootElement = document.getElementById("root");
const app = (<React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Analytics />
    <ScrollToTop />

    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </BrowserRouter>
</React.StrictMode>);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else if (rootElement !== null) {
  const root = createRoot(rootElement);
  root.render(app);
}