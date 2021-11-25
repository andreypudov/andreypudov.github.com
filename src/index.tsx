import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Analytics from './components/utils/Analytics';
import ScrollToTop from './components/utils/ScrollToTop';
import Routes from './routes';

import 'bootstrap/dist/../js/dist/carousel.js';
import 'bootstrap/dist/../js/dist/collapse.js';
import './styles/style.scss';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-74198577-1');

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Analytics />
      <ScrollToTop />

      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();