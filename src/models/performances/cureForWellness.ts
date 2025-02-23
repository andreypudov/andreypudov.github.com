import Album from './../core/performanceAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Video from '../core/video';

const CureForWellness = new Album(
  new Text( 'A Cure for Wellness'),
  new Date('2018-03-17'),
  new Video('https://player.vimeo.com/video/517761510'),
  [
    new Video('https://player.vimeo.com/video/517761510'),
  ],
  [
    new Photograph('/sheets/cure-for-wellness/cure-for-wellness-001.webp', true),
  ]);

export default CureForWellness;