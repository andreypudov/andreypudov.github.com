import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Watercolor',
  new Date('2021-05-24'),
  new Photograph('/drawings/watercolor/2021-05-24.webp', false, 'May 05, 2021'),
  [
    new Photograph('/drawings/watercolor/2021-05-24.webp', false, 'May 05, 2021'),
    new Photograph('/drawings/watercolor/2021-03-30.webp', true, 'March 03, 2021'),
  ]);