import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const IntelOffice = new Album(
  new Text('IntelOffice.Title', 'Intel Office in Nizhny Novgorod'),
  new Date('2020-02-14'),
  new Photograph('/photographs/2020-02-13_14/2020-02-13_14_013.webp'),
  [
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_001.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_002.webp', true, new Text('IntelOffice.',  'Darya Kiryanova')),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_003.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_004.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_005.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_006.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_007.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_008.webp', true),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_009.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_010.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_011.webp', false, new Text('IntelOffice.',  'Natalia Muravieva')),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_012.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_013.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_014.webp', true),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_015.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_016.webp', false, new Text('IntelOffice.',  'Vadim Grishkin')),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_017.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_018.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_019.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_020.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_021.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_022.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_023.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_024.webp', true),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_025.webp', false, new Text('IntelOffice.',  'Anatoly Lubomirov')),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_026.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_027.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_028.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_029.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_030.webp'),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_031.webp', false, new Text('IntelOffice.',  'Serge Papkov')),
    new Photograph('/photographs/2020-02-13_14/2020-02-13_14_032.webp'),
  ]);

export default IntelOffice;