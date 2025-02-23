import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const PartnersDay = new Album(
  new Text('Intel Partners Day'),
  Genre.Event,
  new Date('2016-11-09'),
  new Photograph('/photographs/2016-11-09/2016-11-09_010.webp'),
  [
    new Photograph('/photographs/2016-11-09/2016-11-09_001.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_002.webp', false,
      new Text('Sergey Sidorko, Sergey Khekhnev, and Natalia Muravieva\nEngeneering Managers, Software and Services Group')),
    new Photograph('/photographs/2016-11-09/2016-11-09_003.webp', false,
      new Text('Jody Pfotenhauer, Brad Benson, Marina Alekseeva, and William Savage')),
    new Photograph('/photographs/2016-11-09/2016-11-09_004.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_005.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_006.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_007.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_008.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_009.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_010.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_011.webp', false,
      new Text('Marina Alekseeva - Vice President, Software and Services Group')),
    new Photograph('/photographs/2016-11-09/2016-11-09_012.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_013.webp', true,
      new Text('William Savage - General Manager, Corporate Vice President, One Intel Software & Architecture')),
    new Photograph('/photographs/2016-11-09/2016-11-09_014.webp', false,
      new Text('Jody Pfotenhauer - Director of Functional Safety Engineering, Automated Driving Group')),
    new Photograph('/photographs/2016-11-09/2016-11-09_015.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_016.webp', true),
    new Photograph('/photographs/2016-11-09/2016-11-09_017.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_018.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_019.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_020.webp', true),
    new Photograph('/photographs/2016-11-09/2016-11-09_021.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_022.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_023.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_024.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_025.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_026.webp', false,
      new Text('Pavel Egorov - Chief Executive Officer at Dell Technologies')),
    new Photograph('/photographs/2016-11-09/2016-11-09_027.webp'),
    new Photograph('/photographs/2016-11-09/2016-11-09_028.webp', false,
      new Text('Valentin Anisimov - Principal Software Architect at Harman')),
    new Photograph('/photographs/2016-11-09/2016-11-09_029.webp', false,
      new Text('Andrey Vitsenko - Senior Engineering Manager, Product Security Expert')),
    new Photograph('/photographs/2016-11-09/2016-11-09_030.webp', false,
      new Text('Maria Stashenko - Director at Design Thinking Center and Co-Founder of Wonderfull Laboratory')),
  ]);

export default PartnersDay;