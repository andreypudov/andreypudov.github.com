import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const Strigino = new Album(
  new Text('Strigino International Airport'),
  Genre.Event,
  new Date('2017-08-23'),
  new Photograph('/photographs/2017-08-23/2017-08-23_001.webp'),
  [
    new Photograph('/photographs/2017-08-23/2017-08-23_001.webp', false, new Text('Gazpromavia RA-89029 / Sukhoi SuperJet 100')),
    new Photograph('/photographs/2017-08-23/2017-08-23_002.webp', false, new Text('Orenburzhie RA-67043 / Let L-410UVP-E20 Turbolet')),
    new Photograph('/photographs/2017-08-23/2017-08-23_003.webp', false, new Text('Gazpromavia RA-89049 / Sukhoi SuperJet 100')),
    new Photograph('/photographs/2017-08-23/2017-08-23_004.webp', false, new Text('Rossiya Airlines VP-BOD "Belgorod" / Boeing 737 NG')),
    new Photograph('/photographs/2017-08-23/2017-08-23_005.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_006.webp', false, new Text('Rossiya Airlines VP-BOD "Belgorod" / Boeing 737 NG')),
    // new Photograph('/photographs/2017-08-23/2017-08-23_007.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_008.webp', false, new Text('Russia - Flight Checks and Systems RA-26631 "Vladimir Titov" / Antonov An-26')),
    new Photograph('/photographs/2017-08-23/2017-08-23_009.webp', false, new Text('Azur Air VQ-BKB / Boeing 757')),
    new Photograph('/photographs/2017-08-23/2017-08-23_010.webp', false, new Text('Azur Air VQ-BKB / Boeing 757')),
    // new Photograph('/photographs/2017-08-23/2017-08-23_011.webp', true),
    new Photograph('/photographs/2017-08-23/2017-08-23_012.webp', false, new Text('Azur Air VQ-BKB / Boeing 757')),
    new Photograph('/photographs/2017-08-23/2017-08-23_013.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_014.webp', false, new Text('Strigino Airport is the international airport named after the Hero of the Soviet Union Valery Chkalov serving the city of Nizhny Novgorod. Strigino was officially exploited on 23 July 1923, as a domestic airport. Nizhny Novgorod International Airport is one of the oldest airports in Russia. Strigino is one of the top 25 busiest airports in Russia. Its extraordinarily rapid increase in passenger traffic rate (≤+20.0% annually) is speculated to bring it to top 10 busiest airports in Russia by 2020.')),
    new Photograph('/photographs/2017-08-23/2017-08-23_015.webp', false, new Text('Gazpromavia RA-89049 / Sukhoi SuperJet 100')),
    new Photograph('/photographs/2017-08-23/2017-08-23_016.webp', false, new Text('Gazpromavia RA-89049 / Sukhoi SuperJet 100')),
    new Photograph('/photographs/2017-08-23/2017-08-23_017.webp', true, new Text('Gazpromavia RA-89049 / Sukhoi SuperJet 100')),
    // new Photograph('/photographs/2017-08-23/2017-08-23_018.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_019.webp', true, new Text('Rossiya Airlines VP-BOD "Belgorod" / Boeing 737 NG')),
    // new Photograph('/photographs/2017-08-23/2017-08-23_020.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_021.webp', false, new Text('Azur Air VQ-BKB / Boeing 757')),
    new Photograph('/photographs/2017-08-23/2017-08-23_022.webp', false, new Text('Rossiya Airlines VP-BOD "Belgorod" / Boeing 737 NG')),
    new Photograph('/photographs/2017-08-23/2017-08-23_023.webp', false, new Text('Rossiya Airlines VP-BOD "Belgorod" / Boeing 737 NG')),
    new Photograph('/photographs/2017-08-23/2017-08-23_024.webp', false, new Text('Azur Air VQ-BKB / Boeing 757')),
    // new Photograph('/photographs/2017-08-23/2017-08-23_025.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_026.webp', false),
    // new Photograph('/photographs/2017-08-23/2017-08-23_027.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_028.webp', false, new Text('Gazpromavia RA-89049 / Sukhoi SuperJet 100')),
    new Photograph('/photographs/2017-08-23/2017-08-23_029.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_030.webp', false),
    new Photograph('/photographs/2017-08-23/2017-08-23_031.webp', false, new Text('Royal Flight VP-BOO / Boeing 757')),
    new Photograph('/photographs/2017-08-23/2017-08-23_032.webp', false),
  ]);

export default Strigino;