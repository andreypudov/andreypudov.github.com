import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Pencil Sketches',
  new Date('2020-07-16'),
  new Photograph('../drawings/pencil-sketches/2020-04-26.webp', false, 'April 26, 2020'),
  [
    new Photograph('../drawings/pencil-sketches/2020-07-16.webp', true, 'July 16, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-07-09.webp', true, 'July 9, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-26.webp', false, 'April 26, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-22.webp', true, 'April 22, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-07.webp', false, 'April 7, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-03.webp', false, 'April 3, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-02.webp', true, 'April 2, 2020'),
  ]);