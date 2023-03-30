import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';

export default new Album(
  'Alina Cherdakova',
  new Date('2018-08-18'),
  new Photograph('/photographs/2018-08-18/2018-08-18_013.webp'),
  [
    new Photograph('/photographs/2018-08-18/2018-08-18_001.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_002.webp'),
    new Photograph('/photographs/2018-08-18/2018-08-18_003.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_004.webp', true),
    // new Photograph('/photographs/2018-08-18/2018-08-18_005.webp', true),
    // new Photograph('/photographs/2018-08-18/2018-08-18_006.webp'),
    new Photograph('/photographs/2018-08-18/2018-08-18_007.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_008.webp'),
    new Photograph('/photographs/2018-08-18/2018-08-18_009.webp'),
    new Photograph('/photographs/2018-08-18/2018-08-18_010.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_011.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_012.webp'),
    new Photograph('/photographs/2018-08-18/2018-08-18_013.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_014.webp', true),
    // new Photograph('/photographs/2018-08-18/2018-08-18_015.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_016.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_017.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_018.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_019.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_020.webp', true),
    // new Photograph('/photographs/2018-08-18/2018-08-18_021.webp', true),
    // new Photograph('/photographs/2018-08-18/2018-08-18_022.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_023.webp'),
    // new Photograph('/photographs/2018-08-18/2018-08-18_024.webp', true),
  ],
  new Social('Алина', 'Чердакова', 'Программист в Нижнем Новгороде', 'https://vk.com/perpetuity88'));