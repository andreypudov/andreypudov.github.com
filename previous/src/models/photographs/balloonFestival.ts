import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const BalloonFestival = new Album(
  new Text('Balloon Festival'),
  Genre.Event,
  new Date('2018-02-24'),
  new Photograph('/photographs/2018-02-24/2018-02-24_002.webp'),
  [
    new Photograph('/photographs/2018-02-24/2018-02-24_001.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_002.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_003.webp'),
    new Photograph('/photographs/2018-02-24/2018-02-24_004.webp'),
  ]);

export default  BalloonFestival;