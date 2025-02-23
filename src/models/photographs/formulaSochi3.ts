import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const FormulaSochi3 = new Album(
  new Text('2019 Formula 1 Russian Grand Prix'),
  Genre.Event,
  new Date('2019-09-30'),
  new Photograph('/photographs/2019-09-30/2019-09-30_002.webp'),
  [
    new Photograph('/photographs/2019-09-30/2019-09-30_001.webp', false, new Text('The box of the Scuderia Ferrari')),
    new Photograph('/photographs/2019-09-30/2019-09-30_002.webp', false, new Text('Red Bull mechanics performing warm-up exercises')),
    new Photograph('/photographs/2019-09-30/2019-09-30_003.webp', true, new Text('Valtteri Bottas drives Mercedes AMG F1 W10 EQ Power+')),
    new Photograph('/photographs/2019-09-30/2019-09-30_004.webp', true, new Text('The start of the Formula 1 race')),
    new Photograph('/photographs/2019-09-30/2019-09-30_005.webp', true, new Text('Robert Kubica drives Williams FW42')),
  ]);

export default FormulaSochi3;