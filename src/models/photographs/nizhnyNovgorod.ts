import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Nizhny Novgorod',
  new Date('2019-07-16'),
  [
    new Photograph('../albums/2019-07-16/2019-07-16_001.jpg', true),
    new Photograph('../albums/2019-07-16/2019-07-16_002.jpg', true),
    new Photograph('../albums/2018-04-19/2018-04-19_001.jpg'),
    new Photograph('../albums/2018-04-19/2018-04-19_002.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_001_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_002_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_003_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_004_large.jpg', true),
    new Photograph('../albums/2014-10-19/2014-10-19_005_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_006_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_007_large.jpg', true),
    new Photograph('../albums/2014-10-19/2014-10-19_008_large.jpg', true),
    new Photograph('../albums/2014-10-19/2014-10-19_009_large.jpg', true),
    new Photograph('../albums/2014-10-19/2014-10-19_010_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_011_large.jpg'),
    new Photograph('../albums/2014-10-19/2014-10-19_012_large.jpg'),
  ]);