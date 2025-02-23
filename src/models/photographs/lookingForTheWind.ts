import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const LookingForTheWind = new Album(
  new Text('Looking for the Wind'),
  Genre.Portrait,
  new Date('2018-05-27'),
  new Photograph('/photographs/2018-05-27/2018-05-27_005.webp'),
  [
    // new Photograph('/photographs/2018-05-27/2018-05-27_003.webp'),
    // new Photograph('/photographs/2018-05-27/2018-05-27_002.webp'),
    // new Photograph('/photographs/2018-05-27/2018-05-27_006.webp'),
    new Photograph('/photographs/2018-05-27/2018-05-27_005.webp'),
    new Photograph('/photographs/2018-05-27/2018-05-27_001.webp'),
    // new Photograph('/photographs/2018-05-27/2018-05-27_004.webp'),
    new Photograph('/photographs/2018-05-27/2018-05-27_007.webp'),
    // new Photograph('/photographs/2018-05-27/2018-05-27_008.webp', true),
  ]);

export default LookingForTheWind;