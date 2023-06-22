import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const ElsEmpedratsDelMontseny = new Album(
  new Text('ElsEmpedratsDelMontseny', 'Els Empedrats del Montseny'),
  new Date('2022-11-13'),
  new Photograph('/photographs/2022-11-13/2022-11-13_003.webp'),
  [
    new Photograph('/photographs/2022-11-13/2022-11-13_001.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_002.webp'),
    new Photograph('/photographs/2022-11-13/2022-11-13_003.webp'),
    new Photograph('/photographs/2022-11-13/2022-11-13_004.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_005.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_006.webp'),
    new Photograph('/photographs/2022-11-13/2022-11-13_007.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_008.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_009.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_010.webp', true),
    new Photograph('/photographs/2022-11-13/2022-11-13_011.webp'),
    new Photograph('/photographs/2022-11-13/2022-11-13_012.webp'),
  ]);

export default ElsEmpedratsDelMontseny;