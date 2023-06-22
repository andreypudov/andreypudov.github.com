import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';

const VeraKlemenova = new Album(
  new Text('VeraKlemenova', 'Vera Klemenova'),
  new Date('2012-07-19'),
  new Photograph('/photographs/2012-07-19/2012-07-19_016_large.webp'),
  [
    new Photograph('/photographs/2012-07-19/2012-07-19_001_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_002_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_003_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_004_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_005_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_006_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_007_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_008_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_009_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_010_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_011_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_012_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_013_large.webp'),
    new Photograph('/photographs/2012-07-19/2012-07-19_014_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_015_large.webp', true),
    new Photograph('/photographs/2012-07-19/2012-07-19_016_large.webp'),
  ],
  new Social('Вера', 'Клеменова', 'Экономист в Нижнем Новгороде', 'https://vk.com/id2980398'));

export default VeraKlemenova;