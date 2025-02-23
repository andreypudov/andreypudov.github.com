import Album from './../core/photographyAlbum';
import Text from '../core/text';
import Video from '../core/video';
import Genre from '../core/genre';

const MaximGorky = new Album(
  new Text('Monument to Maxim Gorky'),
  Genre.Street,
  new Date('2017-04-14'),
  new Video('https://player.vimeo.com/video/517762848'),
  [
    new Video('https://player.vimeo.com/video/517762848',  new Text('Monument to Maxim Gorky\n\nAlexei Maximovich Peshkov popularly known as Maxim Gorky was a Russian writer and political activist. He was nominated five times for the Nobel Prize in Literature. Before his success as an author, he traveled widely across the Russian Empire changing jobs frequently, experiences which would later influence his writing. Gorky was active in the emerging Marxist communist movement. He publicly opposed the Tsarist regime, and for a time closely associated himself with Lenin and Bogdanov\'s Bolshevik wing of the party.')),
  ]);

export default MaximGorky;