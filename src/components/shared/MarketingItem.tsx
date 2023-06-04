import LocalizedLink from './LocalizedLink';
import Page from '../../models/core/page';

type MarketingItemProps = {
  page: Page;
  cover?: string;
};

const MarketingItem = ({ page, cover }: MarketingItemProps) => {
  return (
   <div className = 'col-sm-3'>
      <LocalizedLink to = { page.getRoute() }>
        <img src = { cover ?? page.getAlbum().getCover().src } alt = { page.getAlbum().getTitle() } className = 'img-fluid' />
      </LocalizedLink>
   </div>
  );
}

export default MarketingItem;