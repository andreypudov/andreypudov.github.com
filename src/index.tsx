import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Analytics from './components/utils/Analytics';
import ScrollToTop from './components/utils/ScrollToTop';
import Routes from './Routes';

import './i18n';

import 'bootstrap/dist/../js/dist/carousel.js';
import 'bootstrap/dist/../js/dist/collapse.js';
import './styles/style.scss';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-E0Y9W77G5B');

const rootElement = document.getElementById("root");
const app = (<React.StrictMode>
  <BrowserRouter>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();