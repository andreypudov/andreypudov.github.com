import Layout from './shared/Layout'
import Pages from '../models/pages';
import CarouselItem from './shared/CarouselItem';
import MarketingView from './shared/MarketingView';


const Home = () => {
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
          <CarouselItem page = { Pages.NtuCosplay } cover = '/images/carousel/cosplay.webp' isActive = { true } />
          <CarouselItem page = { Pages.Oslo } cover = '/images/carousel/oslo.webp' />
          <CarouselItem page = { Pages.Stockholm } cover = '/images/carousel/stockholm.webp' />
          <CarouselItem page = { Pages.PoblenouCemetery } cover = '/images/carousel/poblenou-cemetery.webp' />
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

      <MarketingView />
    </Layout>
  );
}

export default Home;