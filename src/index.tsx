import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import ScrollToTop from './ScrollToTop'
import Routes from './Routes';

import 'bootstrap/dist/../js/dist/carousel.js';
import 'bootstrap/dist/../js/dist/collapse.js';
import './styles/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();