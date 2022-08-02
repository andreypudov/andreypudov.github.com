import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Mia & Sebastian',
  new Date('2017-09-07'),
  new Photograph('/sheets/mia-and-sebastian/mia-and-sebastian-001.webp'),
  [
    new Photograph('/sheets/mia-and-sebastian/mia-and-sebastian-001.webp', true),
    new Photograph('/sheets/mia-and-sebastian/mia-and-sebastian-002.webp', true),
  ]);