import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const FormulaSochi2 = new Album(
  new Text('FormulaSochi2.Title', '2016 Formula 1 Russian Grand Prix'),
  new Date('2016-05-04'),
  new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_002.webp'),
  [
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_001.webp', false, new Text('FormulaSochi2.', 'Formula 1 Pit Marshals\n\nMarshals play a vital part in allowing motorsport events to take place. Dressed in their unmistakable orange overalls, these volunteers carry out a variety of roles, such as moving damaged cars off the race track, to enable motorsport events to take place successfully and safely.')),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_002.webp', false, new Text('FormulaSochi2.', 'Mechanics of the Mercedes AMG Petronas team working on Nico Rosberg\'s W07 car.')),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_003.webp'),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_004.webp', false, new Text('FormulaSochi2.', 'Bolshoy Ice Dome\n\nThe Bolshoy Ice Dome is a multi-purpose indoor arena. Opened in 2012, the 12,000-seat arena was primarily constructed to host hockey competitions during the 2014 Winter Olympics. Following the Games, it became the home arena of HC Sochi, an expansion team of the KHL. The arena has also hosted concerts and other events. Prior to the Games, the arena hosted the IIHF World U18 Championships and Channel One Cup in 2013.')),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_005.webp'),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_006.webp'),
    new Photograph('/photographs/2016-04-27_05-04/2016-04-27_05-04_007.webp', false, new Text('FormulaSochi2.', 'Krasnaya Polyana Ski Resort')),
  ]);

export default FormulaSochi2;