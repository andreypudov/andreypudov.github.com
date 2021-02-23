import React from 'react';
import Layout from './../shared/Layout'

function GravityFalls() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>
          Gravity Falls
          <small className = 'text-muted'>Monday, January 18, 2021</small>
        </h1>

        <div className = 'ratio ratio-16x9 gallery-video'>
          <iframe src = 'https://www.youtube.com/embed/Zr9ruD6-aTM' title = 'Mia &amp; Sebastian'/>
        </div>
      </div>
    </Layout>
  );
}

export default GravityFalls;