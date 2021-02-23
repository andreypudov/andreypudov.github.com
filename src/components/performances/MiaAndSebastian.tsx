import React from 'react';
import Layout from './../shared/Layout'

function MiaAndSebastian() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>
          Mia &amp; Sebastian
          <small className = 'text-muted'>Thursday, September 7, 2017</small>
        </h1>

        <div className = 'ratio ratio-16x9 gallery-video'>
          <iframe src = 'https://www.youtube.com/embed/vwFGm9usSU8' title = 'Mia &amp; Sebastian'/>
        </div>
      </div>
    </Layout>
  );
}

export default MiaAndSebastian;