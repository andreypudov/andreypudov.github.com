import Album from './../core/album';
import Video from '../core/video';

export default new Album(
  'Time Lapses',
  new Date('2017-04-14'),
  [
    new Video('https://player.vimeo.com/video/517763009'),
    new Video('https://player.vimeo.com/video/517762962'),
    new Video('https://player.vimeo.com/video/517762910'),
    new Video('https://player.vimeo.com/video/517762848'),
    new Video('https://player.vimeo.com/video/517762791'),
    new Video('https://player.vimeo.com/video/517762737'),
  ]);