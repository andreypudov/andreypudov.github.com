import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import HiddenPhotograph from '../core/hiddenPhotograph';
import Social from '../core/social';
import Text from '../core/text';
import Genre from '../core/genre';

const KiraOrlova = new Album(
  new Text('Kira Orlova'),
  Genre.Portrait,
  new Date('2017-10-22'),
  new Photograph('/photographs/2017-10-22/2017-10-22_016_large.webp'),
  [
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_001_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_002_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_003_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_004_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_005_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_006_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_007_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_008_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_009_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_010_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_011_large.webp'),
    new Photograph('/photographs/2017-10-22/2017-10-22_012_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_013_large.webp'),
    new Photograph('/photographs/2017-10-22/2017-10-22_014_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_015_large.webp'),
    new Photograph('/photographs/2017-10-22/2017-10-22_016_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_017_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_018_large.webp'),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_019_large.webp', true),
    new HiddenPhotograph('/photographs/2017-10-22/2017-10-22_020_large.webp'),
  ],
  new Social('Кира', 'Орлова', 'Студент в Нижнем Новгороде',
    'https://vk.com/kira_random', undefined, 'https://instagram.com/kiraorlova'));

export default KiraOrlova;