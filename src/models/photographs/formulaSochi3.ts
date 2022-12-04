import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  '2019 Formula 1 Russian Grand Prix',
  new Date('2019-09-30'),
  new Photograph('/photographs/2019-09-30/2019-09-30_002.webp'),
  [
    new Photograph('/photographs/2019-09-30/2019-09-30_001.webp', false, 'The box of the Scuderia Ferrari'),
    new Photograph('/photographs/2019-09-30/2019-09-30_002.webp', false, 'Red Bull mechanics performing warm-up exercises'),
    new Photograph('/photographs/2019-09-30/2019-09-30_003.webp', true, 'Valtteri Bottas drives Mercedes AMG F1 W10 EQ Power+'),
    new Photograph('/photographs/2019-09-30/2019-09-30_004.webp', true, 'The start of the Formula 1 race'),
    new Photograph('/photographs/2019-09-30/2019-09-30_005.webp', true, 'Robert Kubica drives Williams FW42'),
  ]);