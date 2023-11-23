import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Madrid = new Album(
  new Text('Madrid.Title', 'Madrid'),
  new Date('2023-10-08'),
  new Photograph('/photographs/2023-10-06_08/2023-10-06_08_003.webp', false, new Text('Madrid.PalacioReal', 'Royal Palace of Madrid')),
  [
    new Photograph('/photographs/2023-10-06_08/2023-10-06_08_003.webp', false, new Text('Madrid.PalacioReal', 'Royal Palace of Madrid')),
    new Photograph('/photographs/2023-10-06_08/2023-10-06_08_001.webp', true, new Text('Madrid.TorrePwC', 'Torre PwC')),
    new Photograph('/photographs/2023-10-06_08/2023-10-06_08_002.webp', true, new Text('Madrid.TorreEmperadorCastellana', 'Torre Emperador Castellana')),
    new Photograph('/photographs/2023-10-06_08/2023-10-06_08_004.webp', false, new Text('Madrid.ArganzuelaFootbridge', 'Arganzuela Footbridge')),
  ]);

export default Madrid;