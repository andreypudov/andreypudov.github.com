import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const PeiPeiStockholm = new Album(
  new Text('Pei Pei. Weekend in Stockholm'),
  Genre.Portrait,
  new Date('2024-07-14'),
  new Photograph('/photographs/2024-07-04_14/2024-07-04_14_003.webp'),
  [
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_001.webp', true),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_002.webp', true),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_003.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_004.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_005.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_006.webp', true),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_007.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_008.webp', true),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_009.webp', true),
  ],
  new Social('Пейпей', 'Чен', 'Руководитель машинного обучения в Inditex', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiStockholm;