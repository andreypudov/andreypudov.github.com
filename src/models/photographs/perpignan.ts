import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

const Perpignan = new Album(
  'Perpignan',
  new Date('2022-12-06'),
  new Photograph('/photographs/2022-12-06/2022-12-06_004.webp'),
  [
   new Photograph('/photographs/2022-12-06/2022-12-06_001.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_002.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_003.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_004.webp', false, 'Perpignan Cathedral'),
   new Photograph('/photographs/2022-12-06/2022-12-06_005.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_006.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_007.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_008.webp', true),
   new Photograph('/photographs/2022-12-06/2022-12-06_009.webp', false, 'Palace of the Kings of Majorca'),
   new Photograph('/photographs/2022-12-06/2022-12-06_010.webp'),
  ]);

export default Perpignan;