import Album from './../core/photographyAlbum';
import Text from '../core/text';
import Video from '../core/video';
import Genre from '../core/genre';

const Spit = new Album(
  new Text('Spit of Nizhny Novgorod'),
  Genre.Street,
  new Date('2017-04-14'),
  new Video('https://player.vimeo.com/video/517762962'),
  [
    new Video('https://player.vimeo.com/video/517762962', new Text('Spit of Nizhny Novgorod\n\nThe Spit is one of the main natural landmarks in the historical center of Nizhny Novgorod. It is located at the confluence of the Oka and Volga rivers. In the times of the Russian Tsardom, the Spit was the center of the Strelitzky camp of Nizhny Novgorod Uyezd, thereby receiving its name. Later the river port began to form here.')),
  ]);

export default Spit;