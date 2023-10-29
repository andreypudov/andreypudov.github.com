import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Watercolor = new Album(
  new Text('Watercolor', 'Watercolor'),
  new Date('2022-09-25'),
  new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('May 05, 2021', 'May 05, 2021')),
  [
    new Photograph('/drawings/watercolor/2023-10-29.webp', true, new Text('October 29, 2023', 'October 29, 2023')),
    new Photograph('/drawings/watercolor/2023-10-26.webp', true, new Text('October 26, 2023', 'October 26, 2023')),
    new Photograph('/drawings/watercolor/2023-10-25.webp', true, new Text('October 25, 2023', 'October 25, 2023')),
    new Photograph('/drawings/watercolor/2023-10-14.webp', true, new Text('October 14, 2023', 'October 14, 2023')),
    new Photograph('/drawings/watercolor/2022-09-25.webp', true, new Text('September 25, 2022', 'September 25, 2022')),
    new Photograph('/drawings/watercolor/2022-07-20.webp', true, new Text('July 20, 2022', 'July 20, 2022')),
    new Photograph('/drawings/watercolor/2022-07-18.webp', true, new Text('July 18, 2022', 'July 18, 2022')),
    new Photograph('/drawings/watercolor/2022-06-28.webp', false, new Text('Lost Friend / June 28, 2022', 'Lost Friend / June 28, 2022')),
    new Photograph('/drawings/watercolor/2022-06-21.webp', true, new Text('Lisa / June 21, 2022', 'Lisa / June 21, 2022')),
    new Photograph('/drawings/watercolor/2022-05-31.webp', true, new Text('May 31, 2022', 'May 31, 2022')),
    new Photograph('/drawings/watercolor/2022-05-25.webp', true, new Text('May 25, 2022', 'May 25, 2022')),
    new Photograph('/drawings/watercolor/2022-03-29.webp', true, new Text('March 29, 2022', 'March 29, 2022')),
    new Photograph('/drawings/watercolor/2022-03-01.webp', true, new Text('March 01, 2022', 'March 01, 2022')),
    new Photograph('/drawings/watercolor/2022-02-28.webp', true, new Text('February 28, 2022', 'February 28, 2022')),
    new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('May 05, 2021', 'May 05, 2021')),
    new Photograph('/drawings/watercolor/2021-03-30.webp', true, new Text('March 03, 2021', 'March 03, 2021')),
  ]);

export default Watercolor;