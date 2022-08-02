import Album from './../core/performanceAlbum';
import Photograph from '../core/photograph';
import Video from '../core/video';

export default new Album(
  'Gravity Falls',
  new Date('2021-01-18'),
  new Video('https://player.vimeo.com/video/517762017'),
  [
    new Video('https://player.vimeo.com/video/517762017'),
  ],
  [
    new Photograph('/sheets/gravity-falls/gravity-falls-001.webp', true),
    new Photograph('/sheets/gravity-falls/gravity-falls-002.webp', true),
    new Photograph('/sheets/gravity-falls/gravity-falls-003.webp', true),
  ]);