import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Watercolor = new Album(
  new Text('Watercolor', 'Watercolor'),
  new Date('2022-09-25'),
  new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('Watercolor', 'May 05, 2021')),
  [
    new Photograph('/drawings/watercolor/2022-09-25.webp', true, new Text('Watercolor', 'September 25, 2022')),
    new Photograph('/drawings/watercolor/2022-07-20.webp', true, new Text('Watercolor', 'July 20, 2022')),
    new Photograph('/drawings/watercolor/2022-07-18.webp', true, new Text('Watercolor', 'July 18, 2022')),
    new Photograph('/drawings/watercolor/2022-06-28.webp', false, new Text('Watercolor', 'Lost Friend / June 28, 2022')),
    new Photograph('/drawings/watercolor/2022-06-21.webp', true, new Text('Watercolor', 'Lisa / June 21, 2022')),
    new Photograph('/drawings/watercolor/2022-05-31.webp', true, new Text('Watercolor', 'May 31, 2022')),
    new Photograph('/drawings/watercolor/2022-05-25.webp', true, new Text('Watercolor', 'May 25, 2022')),
    new Photograph('/drawings/watercolor/2022-03-29.webp', true, new Text('Watercolor', 'March 29, 2022')),
    new Photograph('/drawings/watercolor/2022-03-01.webp', true, new Text('Watercolor', 'March 01, 2022')),
    new Photograph('/drawings/watercolor/2022-02-28.webp', true, new Text('Watercolor', 'February 28, 2022')),
    new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('Watercolor', 'May 05, 2021')),
    new Photograph('/drawings/watercolor/2021-03-30.webp', true, new Text('Watercolor', 'March 03, 2021')),
  ]);

export default Watercolor;