import Album from './../core/album';
import Video from '../core/video';

export default new Album(
  'Gravity Falls',
  new Date('2021-01-18'),
  new Video('https://player.vimeo.com/video/517762017'),
  [
    new Video('https://player.vimeo.com/video/517762017'),
  ]);