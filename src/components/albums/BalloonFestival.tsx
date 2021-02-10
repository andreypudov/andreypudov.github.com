import React from 'react';
import Layout from './../shared/Layout'

function BalloonFestival() {
  return (
    <Layout>
      <div className = 'container'>
        <div className = 'page-header'>
          <h1>Balloon Festival<small><em>Saturday, February 24, 2018</em></small></h1>
        </div>

        <img src = '../albums/2018-02-24/2018-02-24_001.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_002.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_003.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
        <img src = '../albums/2018-02-24/2018-02-24_004.jpg' alt = 'Balloon Festival' className = 'img-responsive gallery-image' />
      </div>
    </Layout>
  );
}

export default BalloonFestival;