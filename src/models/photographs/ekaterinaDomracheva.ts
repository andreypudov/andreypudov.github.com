import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Ekaterina Domracheva',
  new Date('2021-08-25'),
  new Photograph('/photographs/2020-05-11/2020-05-11_014.webp'),
  [
    new Photograph('/photographs/2021-08-25/2021-08-25_001.webp', true),
    new Photograph('/photographs/2020-06-12/2020-06-12_001.webp'),
    new Photograph('/photographs/2020-06-08/2020-06-08_001.webp'),
    new Photograph('/photographs/2019-06-12/2019-06-12_001.webp', true),
    new Photograph('/photographs/2020-05-11/2020-05-11_006.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_011.webp'),
    new Photograph('/photographs/2020-05-11/2020-05-11_014.webp'),
    new Photograph('/photographs/2018-06-23/2018-06-23_001.webp'),
  ]);