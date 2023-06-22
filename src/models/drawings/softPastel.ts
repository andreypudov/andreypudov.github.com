import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const SoftPastel = new Album(
  new Text('SoftPastel', 'Soft Pastel'),
  new Date('2021-11-01'),
  new Photograph('/drawings/soft-pastel/2021-01-30.webp', false, new Text('SoftPastel', 'January 30, 2021')),
  [
    new Photograph('/drawings/soft-pastel/2021-11-01.webp', false, new Text('SoftPastel', 'November 01, 2021')),
    new Photograph('/drawings/soft-pastel/2021-05-17.webp', true, new Text('SoftPastel', 'May 17, 2021')),
    new Photograph('/drawings/soft-pastel/2021-03-22.webp', true, new Text('SoftPastel', 'March 22, 2021')),
    new Photograph('/drawings/soft-pastel/2021-03-21.webp', true, new Text('SoftPastel', 'March 21, 2021')),
    new Photograph('/drawings/soft-pastel/2021-01-30.webp', false, new Text('SoftPastel', 'January 30, 2021')),
    new Photograph('/drawings/soft-pastel/2021-01-29.webp', true, new Text('SoftPastel', 'January 29, 2021')),
    new Photograph('/drawings/soft-pastel/2021-01-07.webp', true, new Text('SoftPastel', 'January 07, 2021')),
  ]);

export default SoftPastel;