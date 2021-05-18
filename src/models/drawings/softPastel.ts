import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Soft Pastel',
  new Date('2021-01-30'),
  new Photograph('../drawings/soft-pastel/2021-01-30.jpg', false, 'January 30, 2021'),
  [
    new Photograph('../drawings/soft-pastel/2021-01-30.jpg', false, 'January 30, 2021'),
    new Photograph('../drawings/soft-pastel/2021-01-29.jpg', true, 'January 29, 2021'),
    new Photograph('../drawings/soft-pastel/2021-01-07.jpg', true, 'January 07, 2021'),
  ]);