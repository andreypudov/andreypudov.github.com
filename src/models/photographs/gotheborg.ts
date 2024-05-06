import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const Gotheborg = new Album(
  new Text('Gotheborg.Title', 'Götheborg. Conquering Scandinavia'),
  Genre.Street,
  new Date('2022-09-10'),
  new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_103.webp'),
  [
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_095.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_096.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_097.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_098.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_099.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_100.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_101.webp', true),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_102.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_103.webp'),
   new Photograph('/photographs/2022-08-27_09-10/2022-08-27_09-10_104.webp', true),
  ]);

export default Gotheborg;