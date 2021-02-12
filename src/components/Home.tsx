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
          <div className = 'carousel-item active'>
            <img src = 'images/carousel/altay.jpg' alt = 'Altay. Conquering Siberia 2.0' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Altay. Conquering Siberia 2.0</h5>
              <p>
                <Link to = '/albums/altay' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
              </p>
            </div>
          </div>
          <div className = 'carousel-item'>
            <img src = 'images/carousel/rome-malta.jpg' alt = 'Conquering Rome and Order of Malta' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Conquering Rome and Order of Malta</h5>
              <p>
                <Link to = '/albums/rome-malta' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
              </p>
            </div>
          </div>
          <div className = 'carousel-item'>
            <img src = 'images/carousel/united-states-2.0.jpg' alt = 'Conquering America 2.0' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Conquering America 2.0</h5>
              <p>
                <Link to = '/albums/united-states-2.0' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
              </p>
            </div>
          </div>
          <div className = 'carousel-item'>
            <img src = 'images/carousel/kira-olrova.jpg' alt = 'Kira Orlova' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Kira Orlova</h5>
              <p>
                <Link to = '/albums/kira-orlova' className = 'btn btn-lg btn-transparent'>Browse gallery</Link>
              </p>
            </div>
          </div>
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

      <div className = 'container marketing marketing-image'>
        <div className = 'row'>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
              <Link to = '/albums/favorite-photographs'>
                <img src = 'images/marketing/altay.jpg' alt = 'Favorite Photographs' />
              </Link>
          </div>
          <div className = 'col-lg-3 col-md-3 col-sm-3'>
            <Link to = '/albums/rekshino'>
              <img src = 'images/marketing/rekshino.jpg' alt = 'Rekshino' />
            </Link>
          </div>
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
        </div>
      </div>
    </Layout>
  );
}

export default Home;