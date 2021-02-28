import Photograph from '../core/photograph';
import PhotographAlbum from './../core/photographAlbum';

export default new PhotographAlbum(
  'Balloon Festival',
  new Date('2018-02-24'),
  [
    new Photograph('../albums/2018-02-24/2018-02-24_001.jpg'),
    new Photograph('../albums/2018-02-24/2018-02-24_002.jpg'),
    new Photograph('../albums/2018-02-24/2018-02-24_003.jpg'),
    new Photograph('../albums/2018-02-24/2018-02-24_004.jpg'),
  ]);