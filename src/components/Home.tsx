import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'
import LocalizedLink from './shared/LocalizedLink';
import Pages from '../models/pages';
import CarouselItem from './shared/CarouselItem';


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
          <CarouselItem page = { Pages.EkaterinaDomracheva } cover = '/images/carousel/ekaterina-domracheva.webp' isActive = { true } />
          <CarouselItem page = { Pages.AlinaCherdakova } cover = '/images/carousel/alina-cherdakova.webp' />
          <CarouselItem page = { Pages.KiraOrlova } />
          <CarouselItem page = { Pages.EkaterinaMalysheva } />
        </div>
        <button className = 'carousel-control-prev' type = 'button' data-bs-target = '#homeCarousel'  data-bs-slide = 'prev'>
          <span className = 'carousel-control-prev-icon' aria-hidden = 'true'></span>
          <span className = 'visually-hidden'>{t('Home.Previous')}</span>
        </button>
        <button className = 'carousel-control-next' type = 'button' data-bs-target = '#homeCarousel'  data-bs-slide = 'next'>
          <span className = 'carousel-control-next-icon' aria-hidden = 'true'></span>
          <span className = 'visually-hidden'>{t('Home.Next')}</span>
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