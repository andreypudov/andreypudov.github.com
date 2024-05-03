import { Photographs } from '../../models/pages';
import MarketingItem from './MarketingItem';

const MarketingView = () => {
  return (
   <div className = 'marketing marketing-image'>
      <div className = 'row'>
      {
        Photographs
          .filter(p => p.getAlbum().getTitle().getKey() !== 'PeiPeiChen.Title')
          .slice(0, 4).map(p => <MarketingItem page = { p } key = { p.getAlbum().getTitle().getKey() } />)
      }
      </div>
   </div>
  );
}

export default MarketingView;