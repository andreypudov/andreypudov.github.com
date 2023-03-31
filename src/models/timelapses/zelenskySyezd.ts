import Album from './../core/photographyAlbum';
import Video from '../core/video';

const ZelenskySyezd = new Album(
  'Zelensky Syezd',
  new Date('2017-04-14'),
  new Video('https://player.vimeo.com/video/517762791'),
  [
    new Video('https://player.vimeo.com/video/517762791', 'Zelensky Syezd Street\n\nConstruction of the stone Kremlin of Nizhny Novgorod began in 1500 with the building of the Ivanovskaya Tower; the main work commenced in 1508 and by 1515 a grandiose building was completed. The oak walls that formed the old fortifications were destroyed by a huge fire in 1513. The two-kilometer wall was reinforced by 13 towers (one of them – Zachatskaya – was on the shore of the Volga; not preserved, but was rebuilt in 2012). This “Stone City” had a permanent garrison with solid artillery weapons. With the fall of Kazan, Nizhny Novgorod Kremlin lost its military significance, and later it housed the city and provincial authorities.')
  ]);

export default ZelenskySyezd;