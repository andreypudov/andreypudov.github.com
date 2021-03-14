import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Rekshino',
  new Date('2019-10-26'),
  new Photograph('../albums/2019-10-26/2019-10-26_007.jpg'),
  [
    new Photograph('../albums/2019-10-26/2019-10-26_001.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_002.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_003.jpg', true),
    new Photograph('../albums/2019-10-26/2019-10-26_004.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_005.jpg', true),
    new Photograph('../albums/2019-10-26/2019-10-26_006.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_007.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_008.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_009.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_010.jpg', true),
    new Photograph('../albums/2019-10-26/2019-10-26_011.jpg'),
    new Photograph('../albums/2019-10-26/2019-10-26_012.jpg'),
  ]);