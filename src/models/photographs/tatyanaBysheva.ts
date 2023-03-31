import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';

const TatyanaBysheva = new Album(
  'Tatyana Bysheva',
  new Date('2018-07-27'),
  new Photograph('/photographs/2017-07-22/2017-07-22_001.webp'),
  [
    new Photograph('/photographs/2018-07-27/2018-07-27_001.webp', true),
    // new Photograph('/photographs/2018-07-27/2018-07-27_002.webp', true),
    // new Photograph('/photographs/2018-07-27/2018-07-27_003.webp', true),
    // new Photograph('/photographs/2018-07-27/2018-07-27_004.webp', true),
    new Photograph('/photographs/2018-07-27/2018-07-27_005.webp', true),
    // new Photograph('/photographs/2018-07-27/2018-07-27_006.webp', true),
    // new Photograph('/photographs/2017-07-22/2017-07-22_001.webp'),
    // new Photograph('/photographs/2017-07-22/2017-07-22_004.webp'),
    new Photograph('/photographs/2017-07-22/2017-07-22_005.webp', true),
    // new Photograph('/photographs/2017-07-22/2017-07-22_006.webp', true),
  ],
  new Social('Татьяна', 'Бышева', 'Программист в Нижнем Новгороде',
    'https://vk.com/tbysheva', undefined, 'https://instagram.com/by.she.va'));

export default TatyanaBysheva;