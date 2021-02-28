import Album from './../core/album';
import Video from '../core/video';

export default new Album(
  'Mia & Sebastian',
  new Date('2017-09-07'),
  [
    new Video('https://player.vimeo.com/video/517760954'),
  ]);