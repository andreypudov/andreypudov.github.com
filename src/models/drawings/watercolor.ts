import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Watercolor = new Album(
  new Text('Watercolor', 'Watercolor'),
  new Date('2023-11-16'),
  new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('Watercolor.2021-05-05', 'May 05, 2021')),
  [
    new Photograph('/drawings/watercolor/2023-11-16.webp', true, new Text('Watercolor.2023-11-16', 'November 16, 2023')),
    new Photograph('/drawings/watercolor/2023-11-08.webp', true, new Text('Watercolor.2023-11-08', 'November 08, 2023')),
    new Photograph('/drawings/watercolor/2023-11-04.webp', true, new Text('Watercolor.2023-11-04', 'November 04, 2023')),
    new Photograph('/drawings/watercolor/2023-10-29.webp', true, new Text('Watercolor.2023-10-29', 'October 29, 2023')),
    new Photograph('/drawings/watercolor/2023-10-26.webp', true, new Text('Watercolor.2023-10-26', 'October 26, 2023')),
    new Photograph('/drawings/watercolor/2023-10-25.webp', true, new Text('Watercolor.2023-10-25', 'October 25, 2023')),
    new Photograph('/drawings/watercolor/2023-10-14.webp', true, new Text('Watercolor.2023-10-14', 'October 14, 2023')),
    new Photograph('/drawings/watercolor/2022-09-25.webp', true, new Text('Watercolor.2022-09-25', 'September 25, 2022')),
    new Photograph('/drawings/watercolor/2022-07-20.webp', true, new Text('Watercolor.2022-07-20', 'July 20, 2022')),
    new Photograph('/drawings/watercolor/2022-07-18.webp', true, new Text('Watercolor.2022-07-18', 'July 18, 2022')),
    new Photograph('/drawings/watercolor/2022-06-28.webp', false, new Text('Watercolor.LostFriend', 'Lost Friend / June 28, 2022')),
    new Photograph('/drawings/watercolor/2022-06-21.webp', true, new Text('Watercolor.Lisa', 'Lisa / June 21, 2022')),
    new Photograph('/drawings/watercolor/2022-05-31.webp', true, new Text('Watercolor.2022-05-31', 'May 31, 2022')),
    new Photograph('/drawings/watercolor/2022-05-25.webp', true, new Text('Watercolor.2022-05-25', 'May 25, 2022')),
    new Photograph('/drawings/watercolor/2022-03-29.webp', true, new Text('Watercolor.2022-03-29', 'March 29, 2022')),
    new Photograph('/drawings/watercolor/2022-03-01.webp', true, new Text('Watercolor.2022-03-01', 'March 01, 2022')),
    new Photograph('/drawings/watercolor/2022-02-28.webp', true, new Text('Watercolor.2022-02-28', 'February 28, 2022')),
    new Photograph('/drawings/watercolor/2021-05-24.webp', false, new Text('Watercolor.2921-05-05', 'May 05, 2021')),
    new Photograph('/drawings/watercolor/2021-03-30.webp', true, new Text('Watercolor.2021-03-03', 'March 03, 2021')),
  ]);

export default Watercolor;