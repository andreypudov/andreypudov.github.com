import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const NizhnyNovgorod = new Album(
  new Text('NizhnyNovgorod.Title', 'Nizhny Novgorod'),
  new Date('2019-11-17'),
  new Photograph('/photographs/2017-01-29/2017-01-29_002.webp'),
  [
    new Photograph('/photographs/2019-11-17/2019-11-17_002.webp'),
    new Photograph('/photographs/2019-11-17/2019-11-17_001.webp'),
    new Photograph('/photographs/2019-10-06/2019-10-06_001.webp'),
    new Photograph('/photographs/2019-07-16/2019-07-16_002.webp', true),
    new Photograph('/photographs/2019-07-16/2019-07-16_001.webp', true),
    new Photograph('/photographs/2018-04-19/2018-04-19_002.webp'),
    new Photograph('/photographs/2018-04-19/2018-04-19_001.webp'),
    new Photograph('/photographs/2017-07-28/2017-07-28_003.webp', false, new Text('NizhnyNovgorod.', 'Chkalov Stairs\n\nThe Chkalov Stairs is a monumental flight of steps in the center of Nizhny Novgorod, connecting Minin and Pozharsky Square, the Upper Volga, and the Lower Volga embankments. It was built by the architects Alexander Yakovlev, Lev Rudnev, and Vladimir Munts. It is the longest staircase in Russia. The staircase starts from the monument to Chkalov, near the St. George\'s Tower of the Kremlin. It is built in the form of a figure of eight and consists of 560 steps, if count it both sides. The number of steps from the bottom to the top is 442 on the right. In the intersections of the side slopes there are two observation platforms. At the bottom of the stairs is a monument to the boat "Hero", which is located at the Lower-Volga embankment.')),
    new Photograph('/photographs/2017-07-28/2017-07-28_004.webp'),
    new Photograph('/photographs/2017-07-28/2017-07-28_005.webp', true),
    new Photograph('/photographs/2017-07-28/2017-07-28_006.webp', false, new Text('NizhnyNovgorod.', 'Microdistrict Meshchersky Lake')),
    new Photograph('/photographs/2017-07-01/2017-07-01_001.webp', false, new Text('NizhnyNovgorod.', 'Volga River')),
    new Photograph('/photographs/2017-07-01/2017-07-01_002.webp', false, new Text('NizhnyNovgorod.', 'Volga River')),
    new Photograph('/photographs/2017-07-01/2017-07-01_003.webp', false, new Text('NizhnyNovgorod.', 'Volga River')),
    new Photograph('/photographs/2017-06-12/2017-06-12_001.webp', false, new Text('NizhnyNovgorod.', 'Molitovsky Bridge')),
    new Photograph('/photographs/2017-01-29/2017-01-29_001.webp', true, new Text('NizhnyNovgorod.', 'Deer Sculpture')),
    new Photograph('/photographs/2017-01-29/2017-01-29_002.webp', false, new Text('NizhnyNovgorod.', 'Deer Sculpture')),
    new Photograph('/photographs/2017-01-30/2017-01-30_001.webp', false, new Text('NizhnyNovgorod.', 'Pechersky Ascension Monastery\n\nPechersky Ascension Monastery is the principal monastery of the Nizhny Novgorod Eparchy and the seat of the Bishop of Nizhny Novgorod and Arzamas.\n\nIt have been founded ca. 1328-1330 by St. Dionysius, who came to Nizhny Novgorod from Kiev Pechersk Lavra with several other monks, and dug for himself a cave on the step Volga shore some 3 km southeast of the city. Later on, he founded at that site a monastery with a church of Resurrection of the Lord.\n\nThe monastery soon became an important spiritual and religious center of the Principality of Suzdal and Nizhny Novgorod.')),
    new Photograph('/photographs/2017-02-02/2017-02-02_001.webp', false, new Text('NizhnyNovgorod.', 'Nizhny Novgorod TV Tower')),
    new Photograph('/photographs/2017-02-02/2017-02-02_002.webp', true, new Text('NizhnyNovgorod.', 'Nizhny Novgorod TV Tower')),
    new Photograph('/photographs/2015-07-21/2015-07-21_001.webp', false, new Text('NizhnyNovgorod.', 'Nizhny Novgorod from the paragliding launch pad in Switzerland park.')),
    new Photograph('/photographs/2014-10-19/2014-10-19_012_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_011_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_010_large.webp'),
  ]);

export default NizhnyNovgorod;