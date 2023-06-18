import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

const Andorra = new Album(
  'Delta of Ebro',
  new Date('2023-06-18'),
  new Photograph('/photographs/2023-06-16_18/2023-06-16_18_011.webp'),
  [
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_001.webp', false, 'La Fontcalda'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_002.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_003.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_004.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_005.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_006.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_007.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_008.webp', false, 'Mirador de Benifallet'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_009.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_010.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_011.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_012.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_013.webp', false, 'El Pinell de Brai'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_014.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_015.webp', false, 'Parc Natural del Delta de l\'Ebre'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_016.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_017.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_018.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_019.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_020.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_021.webp', false, 'Cala Forn'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_022.webp'),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_023.webp', true),
    new Photograph('/photographs/2023-06-16_18/2023-06-16_18_024.webp'),
  ]);

export default Andorra;