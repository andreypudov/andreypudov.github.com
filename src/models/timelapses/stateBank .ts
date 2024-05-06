import Album from './../core/photographyAlbum';
import Text from '../core/text';
import Video from '../core/video';
import Genre from '../core/genre';

const StateBank = new Album(
  new Text('StateBank', 'The State Bank of Russia'),
  Genre.Street,
  new Date('2017-04-14'),
  new Video('https://player.vimeo.com/video/517762910'),
  [
    new Video('https://player.vimeo.com/video/517762910', new Text('StateBank', 'The State Bank of Russia\n\nThe Nizhny Novgorod branch of the State Bank on Bolshaya Pokrovskaya Street is one of the most beautiful buildings in Nizhny Novgorod and the entire Volga region. It was built in 1913 to commemorate the 300th anniversary of the Romanovs\' House. The ceiling in the building, for which the neo-Russian style was chosen, was painted by the famous artist Ivan Bilibin.')),
  ]);

export default StateBank;