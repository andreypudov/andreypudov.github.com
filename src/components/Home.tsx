import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'
import LocalizedLink from './shared/LocalizedLink';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout landing = { true }>
      <div id = 'homeCarousel' className = 'carousel slide' data-bs-ride = 'carousel'>
        <ol className = 'carousel-indicators'>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '0' className = 'active' aria-current = 'true'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '1'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '2'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '3'></button>
        </ol>
        <div className = 'carousel-inner'>
          <LocalizedLink to = '/photographs/ekaterina-domracheva/' className = 'carousel-item active'>
            <img src = '/images/carousel/ekaterina-domracheva.webp' alt = 'Ekaterina Domracheva' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>{t('Home.EkaterinaDomracheva')}</h5>
            </div>
          </LocalizedLink>
          <LocalizedLink to = '/photographs/alina-cherdakova/' className = 'carousel-item'>
            <img src = '/images/carousel/alina-cherdakova.webp' alt = 'Alina Cherdakova' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Alina Cherdakova</h5>
            </div>
          </LocalizedLink>
          <LocalizedLink to = '/photographs/kira-orlova/' className = 'carousel-item'>
            <img src = '/images/carousel/kira-olrova.webp' alt = 'Kira Orlova' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Kira Orlova</h5>
            </div>
          </LocalizedLink>
          <LocalizedLink to = '/photographs/ekaterina-malysheva/' className = 'carousel-item'>
            <img src = '/images/carousel/ekaterina-malysheva.webp' alt = 'Ekaterina Malysheva' className = 'd-block w-100' />
            <div className = 'carousel-caption d-none d-md-block'>
              <h5>Ekaterina Malysheva</h5>
            </div>
          </LocalizedLink>
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
            <LocalizedLink to = '/photographs/barcelona-airport/'>
              <img src = '/images/marketing/barcelona-airport.webp' className = 'img-fluid' alt = 'LEBL Barcelona El Prat International Airport' />
            </LocalizedLink>
          </div>
          <div className = 'col-sm-3'>
            <LocalizedLink to = '/photographs/montserrat/'>
              <img src = '/images/marketing/montserrat.webp' className = 'img-fluid' alt = 'Montserrat' />
            </LocalizedLink>
          </div>
          <div className = 'col-sm-3'>
            <LocalizedLink to = '/photographs/els-empedrats-del-montseny/'>
              <img src = '/images/marketing/els-empedrats-del-montseny.webp' className = 'img-fluid' alt = 'Els Empedrats del Montseny' />
            </LocalizedLink>
          </div>
          <div className = 'col-sm-3'>
            <LocalizedLink to = '/photographs/favorite-photographs/'>
              <img src = '/images/marketing/formula-sochi-2-0.webp' className = 'img-fluid' alt = 'Favorite Photographs' />
            </LocalizedLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;