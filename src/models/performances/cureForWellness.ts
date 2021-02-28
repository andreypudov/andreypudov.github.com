import Album from './../core/album';
import Video from '../core/video';

export default new Album(
  'A Cure for Wellness',
  new Date('2018-03-17'),
  [
    new Video('https://player.vimeo.com/video/517761510'),
  ]);