import React from 'react';
import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout Landing = { true }>
      <div id = 'homeCarousel' className = 'carousel slide' data-bs-ride = 'carousel'>
        <ol className = 'carousel-indicators'>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '0' className = 'active' aria-current = 'true' aria-label = 'Slide 1'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '1' aria-label = 'Slide 2'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '2' aria-label = 'Slide 3'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '3' aria-label = 'Slide 4'></button>
        </ol>
        <div className = 'carousel-inner'>
          <Link to = '/photographs/altay' className = 'carousel-item active'>
            <img src = 'images/carousel/altay.jpg' alt = 'Altay. Conquering Siberia 2.0' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Altay. Conquering Siberia 2.0</h5>
            </div>
          </Link>
          <Link to = '/photographs/rome-malta' className = 'carousel-item'>
            <img src = 'images/carousel/rome-malta.jpg' alt = 'Conquering Rome and Order of Malta' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Conquering Rome and Order of Malta</h5>
            </div>
          </Link>
          <Link to = '/photographs/united-states-2.0' className = 'carousel-item'>
            <img src = 'images/carousel/united-states-2.0.jpg' alt = 'Conquering America 2.0' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Conquering America 2.0</h5>
            </div>
          </Link>
          <Link to = '/photographs/kira-orlova' className = 'carousel-item'>
            <img src = 'images/carousel/kira-olrova.jpg' alt = 'Kira Orlova' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Kira Orlova</h5>
            </div>
          </Link>
        </div>
        <button className = 'carousel-control-prev' type = 'button' data-bs-target = '#homeCarousel'  data-bs-slide = 'prev'>
          <span className = 'carousel-control-prev-icon' aria-hidden = 'true'></span>
          <span className = 'visually-hidden'>Previous</span>
        </button>
        <button className = 'carousel-control-next' type = 'button' data-bs-target = '#homeCarousel'  data-bs-slide = 'next'>
          <span className = 'carousel-control-next-icon' aria-hidden = 'true'></span>
          <span className = 'visually-hidden'>Next</span>
        </button>
      </div>

      <div className = 'marketing marketing-image'>
        <div className = 'row'>
          <div className = 'col-sm-3'>
              <Link to = '/photographs/favorite-photographs'>
                <img src = 'images/marketing/altay.jpg' className = 'img-fluid' alt = 'Favorite Photographs' />
              </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/rekshino'>
              <img src = 'images/marketing/rekshino.jpg' className = 'img-fluid' alt = 'Rekshino' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/united-states'>
              <img src = 'images/marketing/united-states.jpg' className = 'img-fluid' alt = 'Conquering America' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/lake-baikal'>
              <img src = 'images/marketing/lake-baikal.jpg' className = 'img-fluid' alt = 'Lake Baikal' />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;