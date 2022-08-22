import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Irina Domracheva',
  new Date('2020-05-11'),
  new Photograph('/photographs/2020-05-11/2020-05-11_027.webp'),
  [
    new Photograph('/photographs/2020-05-11/2020-05-11_018.webp', true),
    new Photograph('/photographs/2020-05-11/2020-05-11_027.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_029.webp', true),
  ]);