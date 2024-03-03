import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'
import Pages from '../models/pages';
import CarouselItem from './shared/CarouselItem';
import MarketingView from './shared/MarketingView';


const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout landing = { true }>
      <div id = 'homeCarousel' className = 'carousel slide' data-bs-ride = 'carousel'>
        <ol className = 'carousel-indicators'>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '0' className = 'active' aria-current = 'true'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '1'></button>
          <button type = 'button' data-bs-target = '#homeCarousel' data-bs-slide-to = '2'></button>
        </ol>

        <div className = 'carousel-inner'>
          <CarouselItem page = { Pages.Crimea } cover = '/images/carousel/crimea.webp' isActive = { true } />
          <CarouselItem page = { Pages.Altay } cover = '/images/carousel/altay.webp' />
          <CarouselItem page = { Pages.ConqueringRome } cover = '/images/carousel/rome-malta.webp' />
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

      <MarketingView />
    </Layout>
  );
}

export default Home;