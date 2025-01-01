import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const PeiPeiChen = new Album(
  new Text('PeiPeiChen.Title', 'Pei Pei Chen'),
  Genre.Portrait,
  new Date('2024-10-12'),
  new Photograph('/photographs/2024-10-12/2024-10-12_005.webp'),
  [
    new Photograph('/photographs/2024-10-12/2024-10-12_005.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_002.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_008.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_005.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_012.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_016.webp', true),
    // new Photograph('/photographs/2024-08-25/2024-08-25_002.webp'),
    // new Photograph('/photographs/2024-08-25/2024-08-25_001.webp', true),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_003.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_005.webp'),
    new Photograph('/photographs/2024-07-04_14/2024-07-04_14_009.webp', true),
    new Photograph('/photographs/2024-06-15/2024-06-15_002.webp'),
    new Photograph('/photographs/2024-06-15/2024-06-15_006.webp', true),
    new Photograph('/photographs/2024-06-15/2024-06-15_008.webp'),
    // new Photograph('/photographs/2024-06-09/2024-06-09_001.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_021.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_017.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_011.webp'),
  ],
  new Social('Пейпей', 'Чен', 'Руководитель машинного обучения в Inditex', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiChen;