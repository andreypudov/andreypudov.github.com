import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Ekaterina Malysheva',
  new Date('2017-10-07'),
  new Photograph('/photographs/2016-04-16/2016-04-16_009.webp'),
  [
    new Photograph('/photographs/2017-10-28_2/2017-10-28_001.webp', true),
    // new Photograph('/photographs/2017-10-07/2017-10-07_001.webp'),
    new Photograph('/photographs/2017-10-07/2017-10-07_002.webp', true),
    new Photograph('/photographs/2017-10-07/2017-10-07_003.webp', true),
    // new Photograph('/photographs/2017-10-07/2017-10-07_004.webp', true),
    // new Photograph('/photographs/2017-10-07/2017-10-07_005.webp'),
    new Photograph('/photographs/2016-04-16/2016-04-16_009.webp'),
  ]);