import React from 'react';
import Layout from './../shared/Layout'

function BalloonFestival() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>
          Balloon Festival
          <small className = 'text-muted'>Saturday, February 24, 2018</small>
        </h1>

        <img src = '../albums/2018-02-24/2018-02-24_001.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_002.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_003.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_004.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
      </div>
    </Layout>
  );
}

export default BalloonFestival;