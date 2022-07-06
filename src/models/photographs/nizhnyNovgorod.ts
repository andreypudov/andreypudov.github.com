import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Nizhny Novgorod',
  new Date('2019-07-16'),
  new Photograph('/photographs/2017-01-29/2017-01-29_002.webp'),
  [
    new Photograph('/photographs/2019-07-16/2019-07-16_002.webp', true),
    new Photograph('/photographs/2019-07-16/2019-07-16_001.webp', true),
    new Photograph('/photographs/2018-04-19/2018-04-19_002.webp'),
    new Photograph('/photographs/2018-04-19/2018-04-19_001.webp'),
    new Photograph('/photographs/2017-07-01/2017-07-01_001.webp', false, 'Volga River'),
    new Photograph('/photographs/2017-07-01/2017-07-01_002.webp', false, 'Volga River'),
    new Photograph('/photographs/2017-07-01/2017-07-01_003.webp', false, 'Volga River'),
    new Photograph('/photographs/2017-06-12/2017-06-12_001.webp'),
    new Photograph('/photographs/2017-01-29/2017-01-29_001.webp', true, 'Deer Sculpture'),
    new Photograph('/photographs/2017-01-29/2017-01-29_002.webp', false, 'Deer Sculpture'),
    new Photograph('/photographs/2017-01-30/2017-01-30_001.webp', false, 'Pechersky Ascension Monastery\n\nPechersky Ascension Monastery is the principal monastery of the Nizhny Novgorod Eparchy and the seat of the Bishop of Nizhny Novgorod and Arzamas.\n\nIt have been founded ca. 1328-1330 by St. Dionysius, who came to Nizhny Novgorod from Kiev Pechersk Lavra with several other monks, and dug for himself a cave on the step Volga shore some 3 km southeast of the city. Later on, he founded at that site a monastery with a church of Resurrection of the Lord.\n\nThe monastery soon became an important spiritual and religious center of the Principality of Suzdal and Nizhny Novgorod.'),
    new Photograph('/photographs/2017-02-02/2017-02-02_001.webp', false, 'Nizhny Novgorod TV Tower'),
    new Photograph('/photographs/2017-02-02/2017-02-02_002.webp', true, 'Nizhny Novgorod TV Tower'),
    new Photograph('/photographs/2015-07-21/2015-07-21_001.webp', false, 'Nizhny Novgorod from the paragliding launch pad in Switzerland park.'),
    new Photograph('/photographs/2014-10-19/2014-10-19_012_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_011_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_010_large.webp'),
  ]);