import React from 'react';
import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout Landing = { true }>
      <div id='homeCarousel' className = 'carousel slide' data-ride='carousel'>
        <ol className = 'carousel-indicators'>
          <li data-target='#homeCarousel' data-slide-to='0' className = 'active'></li>
          <li data-target='#homeCarousel' data-slide-to='1'></li>
          <li data-target='#homeCarousel' data-slide-to='2'></li>
          <li data-target='#homeCarousel' data-slide-to='3'></li>
        </ol>
        <div className = 'carousel-inner'>
        <div className = 'item active'>
            <img src = 'images/carousel/altay.jpg' alt = 'Altay. Conquering Siberia 2.0' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Altay. Conquering Siberia 2.0</h1>
                <p />
                <p>
                  <Link to = '/albums/altay' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
                </p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/rome-malta.jpg' alt = 'Conquering Rome and Order of Malta' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Conquering Rome and Order of Malta</h1>
                <p />
                <p>
                  <Link to = '/albums/rome-malta' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
                </p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/united-states-2.0.jpg' alt = 'Conquering America 2.0' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Conquering America 2.0</h1>
                <p />
                <p>
                  <Link to = '/albums/unitedstates-2.0' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
                </p>
              </div>
            </div>
          </div>
          <div className = 'item'>
            <img src = 'images/carousel/kira-olrova.jpg' alt = 'Kira Orlova' />
            <div className = 'container'>
              <div className = 'carousel-caption'>
                <h1>Kira Orlova</h1>
                <p />
                <p>
                  <Link to = '/albums/kira-orlova' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className = 'container marketing marketing-image'>
        <div className = 'row'>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <Link to = '/albums/united-states'>
              <img src = 'images/marketing/united-states.jpg' alt = 'Conquering America' />
            </Link>
          </div>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <Link to = '/albums/lake-baikal'>
              <img src = 'images/marketing/lake-baikal.jpg' alt = 'Lake Baikal' />
            </Link>
          </div>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <Link to = '/albums/little-russia'>
              <img src = 'images/marketing/little-russia.jpg' alt = 'Little Russia' />
            </Link>
          </div>
            <div className = 'col-lg-3 col-md-3 col-sm-3'>
              <Link to = '/albums/favorite-photographs'>
                <img src = 'images/marketing/favorite-photographs.jpg' alt = 'Favorite Photographs' />
              </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;