import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Ekaterina Domracheva',
  new Date('2020-05-11'),
  new Photograph('/photographs/2020-05-11/2020-05-11_006.webp'),
  [
    new Photograph('/photographs/2020-05-11/2020-05-11_006.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_011.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_014.webp'),
  ]);