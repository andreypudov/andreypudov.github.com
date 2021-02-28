import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Vera Klemenova',
  new Date('2012-07-19'),
  [
    new Photograph('../albums/2012-07-19/2012-07-19_001_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_002_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_003_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_004_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_005_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_006_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_007_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_008_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_009_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_010_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_011_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_012_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_013_large.jpg'),
    new Photograph('../albums/2012-07-19/2012-07-19_014_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_015_large.jpg', true),
    new Photograph('../albums/2012-07-19/2012-07-19_016_large.jpg'),
  ]);