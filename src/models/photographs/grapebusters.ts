import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Grapebusters = new Album(
  new Text('Grapebusters.Title', 'Grapebusters'),
  new Date('2023-09-25'),
  new Photograph('/photographs/2023-09-25/2023-09-25_002.webp'),
  [
    new Photograph('/photographs/2023-09-25/2023-09-25_001.webp'),
    new Photograph('/photographs/2023-09-25/2023-09-25_002.webp'),
    new Photograph('/photographs/2023-09-25/2023-09-25_003.webp'),
    new Photograph('/photographs/2023-09-25/2023-09-25_004.webp'),
    new Photograph('/photographs/2023-09-25/2023-09-25_005.webp'),
  ]);

export default Grapebusters;