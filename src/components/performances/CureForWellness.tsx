import React from 'react';
import Layout from './../shared/Layout'

function CureForWellness() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>
          A Cure for Wellness
          <small className = 'text-muted'>Saturday, March 17, 2018</small>
        </h1>

        <div className = 'ratio ratio-16x9 gallery-video'>
          <iframe src = 'https://www.youtube.com/embed/YOBsb6scIN0' title = 'Mia &amp; Sebastian'/>
        </div>
      </div>
    </Layout>
  );
}

export default CureForWellness;