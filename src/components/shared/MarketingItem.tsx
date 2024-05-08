import Page from '../../models/core/page';
import { Link } from 'react-router-dom';

type MarketingItemProps = {
  page: Page;
  cover?: string;
};

const MarketingItem = ({ page, cover }: MarketingItemProps) => {
  return (
   <div className = 'col-sm-3'>
      <Link to = { page.getRoute() }>
        <img src = { cover ?? page.getAlbum().getCover().src } 
             alt = { page.getAlbum().getTitle().getTranslation() } 
             className = 'img-fluid' />
      </Link>
   </div>
  );
}

export default MarketingItem;