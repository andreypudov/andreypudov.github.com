import React from 'react';
import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

function Albums() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Albums</h1>

        <Link to = '/photographs/favorite-photographs' className = 'card bg-dark text-white gallery-image'>
          <img src = '../albums/2012-03-17/2012-03-17_031.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Favorite Photographs</h5>
            <p className = 'card-text'>Wednesday, March 17, 2021</p>
          </div>
        </Link>

        <Link to = '/photographs/altay' className = 'card bg-dark text-white gallery-image'>
          <img src = '../albums/2020-07-19_08-04/2020-07-19_08-04_099.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Altay. Conquering Siberia 2.0</h5>
            <p className = 'card-text'>Sunday, July 19, 2020</p>
          </div>
        </Link>

        <Link to = '/photographs/nizhny-novgorod' className = 'card bg-dark text-white gallery-image vertical'>
          <img src = '../albums/2019-07-16/2019-07-16_001.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Nizhny Novgorod</h5>
            <p className = 'card-text'>Tuesday, July 16, 2019</p>
          </div>
        </Link>

        <Link to = '/photographs/rekshino' className = 'card bg-dark text-white gallery-image'>
          <img src = '../albums/2019-10-26/2019-10-26_007.jpg' className = 'card-img' alt = '' />
          <div className = 'card-img-overlay'>
            <h5 className = 'card-title'>Rekshino</h5>
            <p className = 'card-text'>Saturday, October 26, 2019</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default Albums;