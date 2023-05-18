import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

const Montserrat = new Album(
  'LEBL Barcelona El Prat International Airport',
  new Date('2023-05-17'),
  new Photograph('/photographs/2023-05-17/2023-05-17_011.webp'),
  [
   new Photograph('/photographs/2023-05-17/2023-05-17_001.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_002.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_003.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_004.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_005.webp'),
   new Photograph('/photographs/2023-05-17/2023-05-17_006.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_007.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_008.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_009.webp'),
   new Photograph('/photographs/2023-05-17/2023-05-17_010.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_011.webp'),
   new Photograph('/photographs/2023-05-17/2023-05-17_012.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_013.webp', true),
   new Photograph('/photographs/2023-05-17/2023-05-17_014.webp'),
  ]);

export default Montserrat;