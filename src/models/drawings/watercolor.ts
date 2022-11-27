import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';

export default new Album(
  'Watercolor',
  new Date('2021-05-24'),
  new Photograph('/drawings/watercolor/2021-05-24.webp', false, 'May 05, 2021'),
  [
    new Photograph('/drawings/watercolor/2022-09-25.webp', true, 'September 25, 2022'),
    new Photograph('/drawings/watercolor/2022-07-20.webp', true, 'July 20, 2022'),
    new Photograph('/drawings/watercolor/2022-07-18.webp', true, 'July 18, 2022'),
    new Photograph('/drawings/watercolor/2022-06-28.webp', false, 'June 28, 2022'),
    new Photograph('/drawings/watercolor/2022-06-21.webp', true, 'June 21, 2022'),
    new Photograph('/drawings/watercolor/2022-05-31.webp', true, 'May 31, 2022'),
    new Photograph('/drawings/watercolor/2022-05-25.webp', true, 'May 25, 2022'),
    new Photograph('/drawings/watercolor/2022-03-29.webp', true, 'March 29, 2022'),
    new Photograph('/drawings/watercolor/2022-03-01.webp', true, 'March 01, 2022'),
    new Photograph('/drawings/watercolor/2022-02-28.webp', true, 'February 28, 2022'),
    new Photograph('/drawings/watercolor/2021-05-24.webp', false, 'May 05, 2021'),
    new Photograph('/drawings/watercolor/2021-03-30.webp', true, 'March 03, 2021'),
  ]);