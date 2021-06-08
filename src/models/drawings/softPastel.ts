import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Soft Pastel',
  new Date('2021-01-30'),
  new Photograph('../drawings/soft-pastel/2021-01-30.webp', false, 'January 30, 2021'),
  [
    new Photograph('../drawings/soft-pastel/2021-01-30.webp', false, 'January 30, 2021'),
    new Photograph('../drawings/soft-pastel/2021-01-29.webp', true, 'January 29, 2021'),
    new Photograph('../drawings/soft-pastel/2021-01-07.webp', true, 'January 07, 2021'),
  ]);