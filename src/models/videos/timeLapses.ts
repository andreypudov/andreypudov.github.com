import Video from '../core/video';
import VideoAlbum from './../core/videoAlbum';

export default new VideoAlbum(
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