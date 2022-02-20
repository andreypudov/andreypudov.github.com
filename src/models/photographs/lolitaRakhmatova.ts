import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Lolita Rakhmatova',
  new Date('2015-12-12'),
  new Photograph('../photographs/2015-12-12/2015-12-12_002.webp'),
  [
    new Photograph('../photographs/2015-12-12/2015-12-12_001.webp', true),
    new Photograph('../photographs/2015-12-12/2015-12-12_002.webp'),
    new Photograph('../photographs/2015-12-12/2015-12-12_003.webp', true),
  ]);