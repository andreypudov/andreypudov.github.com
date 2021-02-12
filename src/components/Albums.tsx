import React from 'react';
import Layout from './shared/Layout'

function Albums() {
  return (
    <Layout>
      <div className = 'container'>
        <div className = 'page-header'>
          <h1>Albums</h1>
        </div>

        <div className = 'card bg-dark text-white'>
          <img src = '../albums/2020-07-19_08-04/2020-07-19_08-04_002.jpg' className = 'card-img' alt = '' />
        </div>
      </div>
    </Layout>
  );
}

export default Albums;