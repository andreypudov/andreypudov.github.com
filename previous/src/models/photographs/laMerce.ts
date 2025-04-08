import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const LaMerce = new Album(
  new Text('La Mercè'),
  Genre.Street,
  new Date('2024-09-20'),
  new Photograph('/photographs/2024-09-20/2024-09-20_002.webp'),
  [
    new Photograph('/photographs/2024-09-20/2024-09-20_001.webp', true),
    new Photograph('/photographs/2024-09-20/2024-09-20_002.webp'),
    new Photograph('/photographs/2024-09-20/2024-09-20_003.webp', true),
  ]);

export default LaMerce;