import { Link } from 'react-router-dom';
import Page from '../../models/core/page';

type CarouselItemProps = {
  page: Page;
  cover?: string;
  isActive?: boolean;
};

const CarouselItem = ({ page, cover, isActive }: CarouselItemProps) => {
  const title = page.getAlbum().getTitle().getTranslation();

  return (
    <Link to = { page.getRoute() } className = { `carousel-item ${isActive ? 'active' : '' }` }>
      <img src = { cover ?? page.getAlbum().getCover().src } alt = { title } className = 'd-block w-100' />
      <div className = 'carousel-caption d-none d-md-block'>
        <h5>{ title }</h5>
      </div>
    </Link>
  );
}

export default CarouselItem;