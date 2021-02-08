import React from 'react';
import logo from './../logo.svg';
import './../styles/App.css';
import Laoyt from './shared/Layout'

function Home() {
  return (
    <Laoyt>
      <header className = 'App-header'>
        <img src = { logo } className = 'App-logo' alt = 'logo' />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a className = 'App-link' href = 'https://reactjs.org' target = '_blank' rel = 'noopener noreferrer'>
          Learn React
        </a>
      </header>
    </Laoyt>
  );
}

export default Home;