import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Mia & Sebastian',
  new Date('2018-03-17'),
  new Photograph('/sheets/cure-for-wellness/cure-for-wellness-001.webp'),
  [
    new Photograph('/sheets/cure-for-wellness/cure-for-wellness-001.webp', true),
  ]);