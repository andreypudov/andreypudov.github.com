import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Andrey Pudov',
  new Date('2016-04-16'),
  new Photograph('/photographs/2016-04-16/2016-04-16_002.webp'),
  [
    // new Photograph('/photographs/2016-04-16/2016-04-16_001.webp'),
    new Photograph('/photographs/2016-04-16/2016-04-16_002.webp'),
    // new Photograph('/photographs/2016-04-16/2016-04-16_003.webp', true),
    new Photograph('/photographs/2016-04-16/2016-04-16_004.webp', true),
    // new Photograph('/photographs/2016-04-16/2016-04-16_005.webp', true),
    // new Photograph('/photographs/2016-04-16/2016-04-16_006.webp', true),
    // new Photograph('/photographs/2016-04-16/2016-04-16_007.webp'),
    new Photograph('/photographs/2016-04-16/2016-04-16_008.webp'),
    // new Photograph('/photographs/2016-04-16/2016-04-16_009.webp'),
  ]);