import Album from '../core/album';
import Photograph from '../core/photograph';

export default new Album(
  'Pencil Sketches',
  new Date('2020-07-16'),
  new Photograph('../drawings/PencilSketches/WLmbtK_QN8g.jpg', false, 'April 26, 2020'),
  [
    new Photograph('../drawings/PencilSketches/vaJwDlqhCMQ.jpg', true, 'July 16, 2020'),
    new Photograph('../drawings/PencilSketches/W6u08dHAbLg.jpg', true, 'July 9, 2020'),
    new Photograph('../drawings/PencilSketches/WLmbtK_QN8g.jpg', false, 'April 26, 2020'),
    new Photograph('../drawings/PencilSketches/iioBNj1E2Ts.jpg', true, 'April 22, 2020'),
    new Photograph('../drawings/PencilSketches/FDX1JlL5YWM.jpg', false, 'April 7, 2020'),
    new Photograph('../drawings/PencilSketches/lNr54EOZNxE.jpg', false, 'April 3, 2020'),
    new Photograph('../drawings/PencilSketches/RLaAhKlMXSA.jpg', true, 'April 2, 2020'),
  ]);