import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const Andorra = new Album(
  new Text('Anniversary in Porto'),
  Genre.Portrait,
  new Date('2025-03-31'),
  new Photograph('/photographs/2025-03-31/2025-03-31_010.webp'),
  [
    new Photograph('/photographs/2025-03-31/2025-03-31_001.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_002.webp'),
    new Photograph('/photographs/2025-03-31/2025-03-31_003.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_004.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_005.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_006.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_007.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_008.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_009.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_010.webp'),
    new Photograph('/photographs/2025-03-31/2025-03-31_011.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_012.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_013.webp'),
    new Photograph('/photographs/2025-03-31/2025-03-31_014.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_015.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_016.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_017.webp'),
    new Photograph('/photographs/2025-03-31/2025-03-31_018.webp'),
    new Photograph('/photographs/2025-03-31/2025-03-31_019.webp', true),
    new Photograph('/photographs/2025-03-31/2025-03-31_020.webp', true),
  ]);

export default Andorra;