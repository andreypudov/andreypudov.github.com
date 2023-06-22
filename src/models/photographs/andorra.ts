import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Andorra = new Album(
  new Text('Andorra', 'Andorra'),
  new Date('2022-10-16'),
  new Photograph('/photographs/2022-10-15_16/2022-10-15_16_006.webp'),
  [
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_001.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_002.webp', true, new Text('Andorra.', 'Parc Natural Comunal de les Valls del Comapedrosa\n\nProtected national park in the western portion of Andorra. It contains the highest point in Andorra, Coma Pedrosa, among other peaks.')),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_003.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_004.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_005.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_006.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_007.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_008.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_009.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_010.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_011.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_012.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_013.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_014.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_015.webp', false, new Text('Andorra.', 'Mirador Roc Del Quer')),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_016.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_017.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_018.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_019.webp', true),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_020.webp', false, new Text('Andorra.', 'Lake Engolasters')),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_021.webp'),
    new Photograph('/photographs/2022-10-15_16/2022-10-15_16_022.webp'),
  ]);

export default Andorra;