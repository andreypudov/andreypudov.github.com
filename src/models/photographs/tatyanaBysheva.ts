import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Tatyana Bysheva',
  new Date('2017-07-22'),
  new Photograph('/photographs/2017-07-22/2017-07-22_001.webp'),
  [
    new Photograph('/photographs/2017-07-22/2017-07-22_001.webp'),
    new Photograph('/photographs/2017-07-22/2017-07-22_004.webp'),
    new Photograph('/photographs/2017-07-22/2017-07-22_005.webp', true),
    new Photograph('/photographs/2017-07-22/2017-07-22_006.webp', true),
  ]);