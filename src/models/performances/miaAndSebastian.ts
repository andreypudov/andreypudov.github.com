import Album from './../core/performanceAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Video from '../core/video';

const MiaAndSebastian = new Album(
  new Text( 'Mia & Sebastian'),
  new Date('2017-09-07'),
  new Video('https://player.vimeo.com/video/517760954'),
  [
    new Video('https://player.vimeo.com/video/517760954'),
  ],
  [
    new Photograph('/sheets/mia-and-sebastian/mia-and-sebastian-001.webp', true),
    new Photograph('/sheets/mia-and-sebastian/mia-and-sebastian-002.webp', true),
  ]);

export default MiaAndSebastian;