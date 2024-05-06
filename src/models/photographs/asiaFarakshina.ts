import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const AsiaFarakshina = new Album(
  new Text('AsiaFarakshina.Title', 'Asia Farakshina'),
  Genre.Portrait,
  new Date('2015-08-14'),
  new Photograph('/photographs/2015-08-14/2015-08-14_001.webp'),
  [
    new Photograph('/photographs/2015-08-14/2015-08-14_001.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_002.webp', true),
    new Photograph('/photographs/2015-08-14/2015-08-14_003.webp', true),
    // new Photograph('/photographs/2015-08-14/2015-08-14_004.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_005.webp'),
    new Photograph('/photographs/2015-08-14/2015-08-14_006.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_007.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_008.webp', true),
    // new Photograph('/photographs/2015-08-14/2015-08-14_009.webp', true),
    // new Photograph('/photographs/2015-08-14/2015-08-14_010.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_011.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_012.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_013.webp'),
    // new Photograph('/photographs/2015-08-14/2015-08-14_014.webp'),
  ],
  new Social('Асия', 'Фаракшина', 'Исламовед в Нижнем Новгороде'));

export default AsiaFarakshina;