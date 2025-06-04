import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const GraciaFestivities = new Album(
  new Text('Castellers de la Vila de Gràcia'),
  Genre.Street,
  new Date('2024-08-18'),
  new Photograph('/photographs/2024-08-18/2024-08-18_004.webp'),
  [
   new Photograph('/photographs/2024-08-18/2024-08-18_001.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_002.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_003.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_004.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_005.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_006.webp', true),
   new Photograph('/photographs/2024-08-18/2024-08-18_007.webp', true),
  ]);

export default GraciaFestivities;