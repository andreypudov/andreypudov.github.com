import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const Montserrat = new Album(
  new Text('Montserrat'),
  Genre.Nature,
  new Date('2023-05-07'),
  new Photograph('/photographs/2023-05-07/2023-05-07_027.webp'),
  [
   new Photograph('/photographs/2023-05-07/2023-05-07_001.webp', true, new Text('Montserrat seen from Monistrol de Montserrat')),
   new Photograph('/photographs/2023-05-07/2023-05-07_002.webp', false, new Text('Montserrat is one of the greatest symbols of Catalonia, that from being a religious centre has become a bastion of Catalan identity, without ignoring the natural environment and its characteristic morphology and structure of rounded and abrupt rocks and needles.')),
   new Photograph('/photographs/2023-05-07/2023-05-07_003.webp', true, new Text('Pont Gòtic\n\nThe bridge over the Llobregat river dates from the fourteenth century')),
   new Photograph('/photographs/2023-05-07/2023-05-07_004.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_005.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_006.webp', false, new Text('Santa Maria de Montserrat Abbey\n\nAn abbey of the Order of Saint Benedict it is notable for enshrining the image of the Virgin of Montserrat. The monastery was founded in the 11th century and rebuilt between the 19th and 20th centuries, and still functions to this day, with over 70 monks. There have always been roughly 80 monks in residence.')),
   new Photograph('/photographs/2023-05-07/2023-05-07_007.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_008.webp', true, new Text('New facade, work of Francesc Folguera')),
   new Photograph('/photographs/2023-05-07/2023-05-07_009.webp', true, new Text('Monestir de Montserrat and Roca de St. Jaume')),
   new Photograph('/photographs/2023-05-07/2023-05-07_010.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_011.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_012.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_013.webp', false, new Text('The massif, some 10 kilometres long and 5 kilometres wide, reaches the limits of the regions of Bages, Baix Llobregat and Anoia, and the Natural Park occupies 3,630 hectares of the municipalities of Bruc (Anoia), Marganell and Monistrol de Montserrat (Bages) and Collbató (Baix Llobregat), with almost 2,000 of these hectares as a nature reserve. An additional area of 4,039 hectares is catalogued as a protected zone, with part of the municipalities of Castellbell and El Vilar (Bages), Esparreguera (Baix Llobregat) and Vacarisses (Vallès Occidental).')),
   new Photograph('/photographs/2023-05-07/2023-05-07_014.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_015.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_016.webp', false, new Text('The highest summit of Montserrat is called Sant Jeroni and stands at 1,236 meters above sea-level. It is accessible by hiking trails which connect from the top entrance to the Sant Joan funicular, the monastery, or the base of the mountain.')),
   new Photograph('/photographs/2023-05-07/2023-05-07_017.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_018.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_019.webp', false, new Text('Panorama of the view from the Sant Jeroni summit of Montserrat')),
   new Photograph('/photographs/2023-05-07/2023-05-07_020.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_021.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_022.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_023.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_024.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_025.webp', true, new Text('Montserrat does not have a particularly rich fauna due to the human presence, which has led to the disappearance of the larger species, accelerated by the fire of 1986. The animal population on Montserrat is typically Mediterranean, with mammals such as wild boar, squirrels, beech marten, common genet, Spanish ibex (which were introduced in 1995), various species of reptile, numerous rock-dwelling birds (such as the swift, crag martin or the warbler) and forest-dwelling birds (thrush, firecrest, pigeons and Orphean warbler).')),
   new Photograph('/photographs/2023-05-07/2023-05-07_026.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_027.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_028.webp', false, new Text('Rock Formations on Montserrat Mountain')),
   new Photograph('/photographs/2023-05-07/2023-05-07_029.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_030.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_031.webp', true),
   new Photograph('/photographs/2023-05-07/2023-05-07_032.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_033.webp'),
   new Photograph('/photographs/2023-05-07/2023-05-07_034.webp', true),
  ]);

export default Montserrat;