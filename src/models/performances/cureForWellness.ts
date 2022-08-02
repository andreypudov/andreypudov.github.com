import Album from './../core/performanceAlbum';
import Photograph from '../core/photograph';
import Video from '../core/video';

export default new Album(
  'A Cure for Wellness',
  new Date('2018-03-17'),
  new Video('https://player.vimeo.com/video/517761510'),
  [
    new Video('https://player.vimeo.com/video/517761510'),
  ],
  [
    new Photograph('/sheets/cure-for-wellness/cure-for-wellness-001.webp', true),
  ]);