import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const Barcelona = new Album(
  new Text('Barcelona.Title', 'Barcelona'),
  Genre.Street,
  new Date('2023-09-24'),
  new Photograph('/photographs/2023-09-24/2023-09-24_001.webp', true, new Text('Barcelona.ColumbusMonument', 'Columbus Monument')),
  [
    new Photograph('/photographs/2023-09-24/2023-09-24_001.webp', true, new Text('Barcelona.ColumbusMonument', 'Columbus Monument')),
  ]);

export default Barcelona;