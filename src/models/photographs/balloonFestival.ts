import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Balloon Festival',
  new Date('2018-02-24'),
  new Photograph('/photographs/2018-02-24/2018-02-24_002.webp'),
  [
    new Photograph('/photographs/2018-02-24/2018-02-24_001.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_002.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_003.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_004.webp'),
  ]);