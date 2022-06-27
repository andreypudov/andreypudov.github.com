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
    new Photograph('/photographs/2017-01-29/2017-01-29_001.webp', true),
    new Photograph('/photographs/2017-01-29/2017-01-29_002.webp'),
    new Photograph('/photographs/2017-01-30/2017-01-30_001.webp'),
    new Photograph('/photographs/2017-02-02/2017-02-02_001.webp'),
    new Photograph('/photographs/2017-02-02/2017-02-02_002.webp', true),
    new Photograph('/photographs/2015-07-21/2015-07-21_001.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_012_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_011_large.webp'),
    new Photograph('/photographs/2014-10-19/2014-10-19_010_large.webp'),
  ]);