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
        </ol>
        <div className = 'carousel-inner'>
        <Link to = '/photographs/poblenou-cemetery' className = 'carousel-item active'>
            <img src = 'images/carousel/poblenou-cemetery.webp' alt = 'Poblenou Cemetery' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Poblenou Cemetery</h5>
            </div>
          </Link>
          <Link to = '/photographs/puigmal' className = 'carousel-item'>
            <img src = 'images/carousel/puigmal.webp' alt = 'Puigmal' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Puigmal</h5>
            </div>
          </Link>
          <Link to = '/photographs/crimea' className = 'carousel-item'>
            <img src = 'images/carousel/crimea.webp' alt = 'Crimean Holidays' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Crimean Holidays</h5>
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
              <img src = 'images/marketing/formula-sochi-2-0.webp' className = 'img-fluid' alt = 'Favorite Photographs' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/altay'>
              <img src = 'images/marketing/altay.webp' className = 'img-fluid' alt = 'Altay. Conquering Siberia 2.0' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/rekshino'>
              <img src = 'images/marketing/rekshino.webp' className = 'img-fluid' alt = 'Rekshino' />
            </Link>
          </div>
          <div className = 'col-sm-3'>
            <Link to = '/photographs/alina-cherdakova'>
              <img src = 'images/marketing/alina-cherdakova.webp' className = 'img-fluid' alt = 'Alina Cherdakova' />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;