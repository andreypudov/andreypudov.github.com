import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Pencil Sketches',
  new Date('2020-07-16'),
  new Photograph('../drawings/pencil-sketches/2020-04-26.jpg', false, 'April 26, 2020'),
  [
    new Photograph('../drawings/pencil-sketches/2020-07-16.jpg', true, 'July 16, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-07-09.jpg', true, 'July 9, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-26.jpg', false, 'April 26, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-22.jpg', true, 'April 22, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-07.jpg', false, 'April 7, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-03.jpg', false, 'April 3, 2020'),
    new Photograph('../drawings/pencil-sketches/2020-04-02.jpg', true, 'April 2, 2020'),
  ]);