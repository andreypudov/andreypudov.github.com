import React from 'react';
import Layout from './shared/Layout'

function Albums() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Albums</h1>

        <div className = 'card bg-dark text-white'>
          <img src = '../albums/2020-07-19_08-04/2020-07-19_08-04_002.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Altay. Conquering Siberia 2.0</h5>
            <p className = 'card-text'>Sunday, July 19, 2020</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Albums;