import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const PeiPeiChen = new Album(
  new Text('PeiPeiChen.Title', 'Pei Pei Chen'),
  Genre.Portrait,
  new Date('2024-03-30'),
  new Photograph('/photographs/2024-08-25/2024-08-25_002.webp'),
  [
    new Photograph('/photographs/2024-06-09/2024-06-09_001.webp', true),
    new Photograph('/photographs/2024-08-25/2024-08-25_001.webp', true),
    new Photograph('/photographs/2024-08-25/2024-08-25_002.webp'),
  ],
  new Social('Пейпей', 'Чен', 'Руководитель машинного обучения в Inditex', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiChen;