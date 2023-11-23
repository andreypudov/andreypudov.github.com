import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Barcelona = new Album(
  new Text('Barcelona.Title', 'Barcelona'),
  new Date('2023-09-24'),
  new Photograph('/photographs/2023-09-24/2023-09-24_001.webp', true, new Text('Barcelona.ColumbusMonument', 'Columbus Monument')),
  [
    new Photograph('/photographs/2023-09-24/2023-09-24_001.webp', true, new Text('Barcelona.ColumbusMonument', 'Columbus Monument')),
  ]);

export default Barcelona;