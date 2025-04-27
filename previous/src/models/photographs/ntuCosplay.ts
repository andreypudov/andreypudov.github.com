import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const NtuCosplay = new Album(
  new Text('NTU Cosplay Festival 2025'),
  Genre.Event,
  new Date('2025-02-08'),
  new Photograph('/photographs/2025-02-08/2025-02-08_001.webp'),
  [
    new Photograph('/photographs/2025-02-08/2025-02-08_002.webp', true),
    new Photograph('/photographs/2025-02-08/2025-02-08_001.webp'),
    new Photograph('/photographs/2025-02-08/2025-02-08_004.webp', true),
    new Photograph('/photographs/2025-02-08/2025-02-08_005.webp', true),
    new Photograph('/photographs/2025-02-08/2025-02-08_003.webp'),
    new Photograph('/photographs/2025-02-08/2025-02-08_006.webp', true),
  ]);

export default NtuCosplay;