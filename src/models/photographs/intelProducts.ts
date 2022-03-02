import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Intel Software Products',
  new Date('2016-04-15'),
  new Photograph('/photographs/2016-04-15/2015-04-12_002.webp'),
  [
    new Photograph('/photographs/2016-04-15/2015-04-12_001.webp', false, 'The work on splash screen design for Intel software products.'),
    new Photograph('/photographs/2016-04-15/2015-04-12_002.webp'),
    new Photograph('/photographs/2016-04-15/2015-04-12_003.webp'),
    new Photograph('/photographs/2016-04-15/2016-01-22_001.webp'),
    new Photograph('/photographs/2016-04-15/2016-04-13_001.webp'),
    new Photograph('/photographs/2016-04-15/2016-04-15_001.webp'),
  ]);