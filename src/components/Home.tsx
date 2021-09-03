import Layout from './shared/Layout'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout landing = { true }>
      <div id = 'homeCarousel' className = 'carousel slide' data-bs-ride = 'carousel'>
        <ol className = 'carousel-indicators'>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '0' className = 'active' aria-current = 'true' aria-label = 'Slide 1'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '1' aria-label = 'Slide 2'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '2' aria-label = 'Slide 3'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '3' aria-label = 'Slide 4'></button>
        </ol>
        <div className = 'carousel-inner'>
          <Link to = '/photographs/crimea' className = 'carousel-item active'>
            <img src = 'images/carousel/crimea.webp' alt = 'Crimean Holidays' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Crimean Holidays</h5>
            </div>
          </Link>
          <Link to = '/photographs/altay' className = 'carousel-item'>
            <img src = 'images/carousel/altay.webp' alt = 'Altay. Conquering Siberia 2.0' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Altay. Conquering Siberia 2.0</h5>
            </div>
          </Link>
          <Link to = '/photographs/rekshino' className = 'carousel-item'>
            <img src = 'images/carousel/rekshino.webp' alt = 'Rekshino' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Rekshino</h5>
            </div>
          </Link>
          <Link to = '/photographs/alina-cherdakova' className = 'carousel-item'>
            <img src = 'images/carousel/alina-cherdakova.webp' alt = 'Alina Cherdakova' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block text-dark'>
              <h5>Alina Cherdakova</h5>
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
              <img src = 'images/marketing/altay-kate.webp' className = 'img-fluid' alt = 'Favorite Photographs' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/rome-malta'>
              <img src = 'images/marketing/rome-malta.webp' className = 'img-fluid' alt = 'Conquering Rome and Order of Malta' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/kira-orlova'>
              <img src = 'images/marketing/kira-orlova.webp' className = 'img-fluid' alt = 'Kira Orlova' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/united-states-2.0'>
              <img src = 'images/marketing/united-states-2.0.webp' className = 'img-fluid' alt = 'Conquering America 2.0' />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;