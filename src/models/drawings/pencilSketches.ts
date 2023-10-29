import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const PencilSketches = new Album(
  new Text('PencilSketches', 'Pencil Sketches'),
  new Date('2020-07-16'),
  new Photograph('/drawings/pencil-sketches/2020-04-26.webp', false, new Text('April 26, 2020', 'April 26, 2020')),
  [
    new Photograph('/drawings/pencil-sketches/2020-07-16.webp', true, new Text('July 16, 2020', 'July 16, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-07-09.webp', true, new Text('July 9, 2020', 'July 9, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-04-26.webp', false, new Text('April 26, 2020', 'April 26, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-04-22.webp', true, new Text('April 22, 2020', 'April 22, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-04-07.webp', false, new Text('April 7, 2020', 'April 7, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-04-03.webp', false, new Text('April 3, 2020', 'April 3, 2020')),
    new Photograph('/drawings/pencil-sketches/2020-04-02.webp', true, new Text('April 2, 2020', 'April 2, 2020')),
  ]);

export default PencilSketches;