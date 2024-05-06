import Album from './../core/photographyAlbum';
import Text from '../core/text';
import Video from '../core/video';
import Genre from '../core/genre';

const BolshayaPokrovskaya = new Album(
  new Text('BolshayaPokrovskaya', 'Bolshaya Pokrovskaya'),
  Genre.Street,
  new Date('2017-04-14'),
  new Video('https://player.vimeo.com/video/517762737'),
  [
    new Video('https://player.vimeo.com/video/517762737', new Text('BolshayaPokrovskaya', 'Bolshaya Pokrovskaya Street\n\nBolshaya Pokrovskaya Street is the high street in the historical center of Nizhny Novgorod and one of its oldest streets. Until 1917 it was considered a street for noblemen. Formed the main street of the city by the end of the 18th century. It is considered an analog of the Arbat in Moscow or 6-7 Lines of Vasilyevsky Island in St. Petersburg.')),
  ]);

export default BolshayaPokrovskaya;