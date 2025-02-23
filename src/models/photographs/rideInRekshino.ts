import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const RideInRekshino = new Album(
  new Text('Ride in Rekshino'),
  Genre.Street,
  new Date('2017-10-28'),
  new Photograph('/photographs/2017-10-28/2017-10-28_005.webp'),
  [
    new Photograph('/photographs/2017-10-28/2017-10-28_001.webp'),
    new Photograph('/photographs/2017-10-28/2017-10-28_002.webp'),
    new Photograph('/photographs/2017-10-28/2017-10-28_003.webp'),
    new Photograph('/photographs/2017-10-28/2017-10-28_004.webp'),
    new Photograph('/photographs/2017-10-28/2017-10-28_005.webp'),
    new Photograph('/photographs/2017-10-28/2017-10-28_006.webp'),
  ]);

export default RideInRekshino;