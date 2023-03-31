import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

const Rekshino = new Album(
  'Rekshino',
  new Date('2019-10-26'),
  new Photograph('/photographs/2019-10-26/2019-10-26_007.webp'),
  [
    new Photograph('/photographs/2019-10-26/2019-10-26_001.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_002.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_003.webp', true),
    new Photograph('/photographs/2019-10-26/2019-10-26_004.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_005.webp', true),
    new Photograph('/photographs/2019-10-26/2019-10-26_006.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_007.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_008.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_009.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_010.webp', true),
    new Photograph('/photographs/2019-10-26/2019-10-26_011.webp'),
    new Photograph('/photographs/2019-10-26/2019-10-26_012.webp'),
  ]);

export default Rekshino;