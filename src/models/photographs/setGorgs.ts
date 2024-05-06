import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const SetGorgs = new Album(
  new Text('SetGorgs.Title', 'Ruta dels Set Gorgs de Campdevànol'),
  Genre.Nature,
  new Date('2023-06-03'),
  new Photograph('/photographs/2023-06-03/2023-06-03_010.webp'),
  [
    new Photograph('/photographs/2023-06-03/2023-06-03_001.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_003.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_005.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_007.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_009.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_002.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_004.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_006.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_008.webp', true),
    new Photograph('/photographs/2023-06-03/2023-06-03_010.webp'),
  ]);

export default SetGorgs;