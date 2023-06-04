import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'
import Pages from '../models/pages';
import CarouselItem from './shared/CarouselItem';
import MarketingItem from './shared/MarketingItem';


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
          <MarketingItem page = { Pages.BarcelonaAirport } cover = '/images/marketing/barcelona-airport.webp' />
          <MarketingItem page = { Pages.Montserrat } cover = '/images/marketing/montserrat.webp' />
          <MarketingItem page = { Pages.ElsEmpedratsDelMontseny } cover = '/images/marketing/els-empedrats-del-montseny.webp' />
          <MarketingItem page = { Pages.Favorites } cover = '/images/marketing/formula-sochi-2-0.webp' />
        </div>
      </div>
    </Layout>
  );
}

export default Home;