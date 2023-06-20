import { Photographs } from '../../models/pages';
import MarketingItem from './MarketingItem';

const MarketingView = () => {
  return (
   <div className = 'marketing marketing-image'>
      <div className = 'row'>
      { Photographs.slice(0, 4).map(p => <MarketingItem page = { p } />) }
      </div>
   </div>
  );
}

export default MarketingView;