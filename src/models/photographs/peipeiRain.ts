import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const PeiPeiRain = new Album(
  new Text('PeiPeiRain.Title', 'Pei Pei. Rain in Barcelona'),
  Genre.Portrait,
  new Date('2024-09-21'),
  new Photograph('/photographs/2024-09-21/2024-09-21_006.webp'),
  [
    new Photograph('/photographs/2024-09-21/2024-09-21_001.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_002.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_003.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_004.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_005.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_006.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_007.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_008.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_009.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_010.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_011.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_012.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_013.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_014.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_015.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_016.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_017.webp', true),
    new Photograph('/photographs/2024-09-21/2024-09-21_018.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_019.webp'),
    new Photograph('/photographs/2024-09-21/2024-09-21_020.webp'),

  ],
  new Social('Пейпей', 'Чен', 'Руководитель машинного обучения в Inditex', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiRain;