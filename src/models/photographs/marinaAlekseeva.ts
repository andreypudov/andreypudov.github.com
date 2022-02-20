import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Marina Alekseeva',
  new Date('2013-09-10'),
  new Photograph('../photographs/2013-09-10/2013-09-10_002.webp'),
  [
    new Photograph('../photographs/2013-09-10/2013-09-10_001.webp', true),
    new Photograph('../photographs/2013-09-10/2013-09-10_002.webp'),
    new Photograph('../photographs/2013-09-10/2013-09-10_003.webp', true),
  ]);