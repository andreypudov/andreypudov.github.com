import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Gravity Falls',
  new Date('2021-01-18'),
  new Photograph('/sheets/gravity-falls/gravity-falls-001.webp'),
  [
    new Photograph('/sheets/gravity-falls/gravity-falls-001.webp', true),
    new Photograph('/sheets/gravity-falls/gravity-falls-002.webp', true),
    new Photograph('/sheets/gravity-falls/gravity-falls-003.webp', true),
  ]);