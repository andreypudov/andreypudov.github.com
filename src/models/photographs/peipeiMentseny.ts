import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const PeiPeiMontseny = new Album(
  new Text('Pei Pei. Climbing Montseny'),
  Genre.Portrait,
  new Date('2024-10-12'),
  new Photograph('/photographs/2024-10-12/2024-10-12_002.webp'),
  [
    new Photograph('/photographs/2024-10-12/2024-10-12_001.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_002.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_003.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_004.webp', true),
    new Photograph('/photographs/2024-10-12/2024-10-12_005.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_006.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_007.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_008.webp', true),
    new Photograph('/photographs/2024-10-12/2024-10-12_009.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_010.webp', true),
    new Photograph('/photographs/2024-10-12/2024-10-12_011.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_012.webp', true),
    new Photograph('/photographs/2024-10-12/2024-10-12_013.webp'),
    new Photograph('/photographs/2024-10-12/2024-10-12_014.webp'),
  ],
  new Social('Пейпей', 'Чен', 'Руководитель машинного обучения в Inditex', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiMontseny;