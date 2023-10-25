import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const Maks = new Album(
  new Text('Maks.Title', 'MAKS International Aviation and Space Show'),
  new Date('2017-07-22'),
  new Photograph('/photographs/2017-07-22/2017-07-22_013.webp'),
  [
    new Photograph('/photographs/2017-07-22/2017-07-22_003.webp', true, new Text('Maks.', 'Al Fursan is the aerobatics demonstration team of the United Arab Emirates Air Force. It was formed in 2010 with Italian-built Aermacchi MB-339NAT jet aircraft. The team has a total of seven aircraft, all seven of which are used for performances. They are the only aerobatic display team in the world that uses Black Smoke.')),
    new Photograph('/photographs/2017-07-22/2017-07-22_007.webp', true),
    new Photograph('/photographs/2017-07-22/2017-07-22_008.webp'),
    new Photograph('/photographs/2017-07-22/2017-07-22_009.webp', true),
    new Photograph('/photographs/2017-07-22/2017-07-22_010.webp', true),
    new Photograph('/photographs/2017-07-22/2017-07-22_011.webp'),
    new Photograph('/photographs/2017-07-22/2017-07-22_012.webp', true, new Text('Maks.', 'The Russian Knights is an aerobatic demonstration team of the Russian Air Force. Originally formed on April 5, 1991 at the Kubinka Air Base as a team of six Sukhoi Su-27s, the team was the first to perform outside the Soviet Union in September 1991 when they toured the United Kingdom. The team now performs with eight Su-30SM.')),
    new Photograph('/photographs/2017-07-22/2017-07-22_014.webp', true, new Text('Maks.', 'The Tupolev Tu-144 is a Soviet supersonic passenger airliner designed by Tupolev and in operation from 1968 to 1999. The Tu-144 was the world\'s first commercial supersonic transport aircraft with its prototype\'s maiden flight from Zhukovsky Airport on 31 December 1968, two months before the British-French Concorde. The Tu-144 first went supersonic on 5 June 1969, four months before Concorde, and on 26 May 1970 became the world\'s first commercial transport to exceed Mach 2.')),
    new Photograph('/photographs/2017-07-22/2017-07-22_013.webp', false, new Text('Maks.', 'Despite the similarity in appearance of the Tu-144 to the Anglo-French supersonic aircraft, there were significant differences between two aircraft. The Tu-144 is bigger and faster than the Concorde. Concorde\'s designers used fuel as coolant for the cabin air conditioning and for the hydraulic system. Tupolev also used fuel/hydraulic heat exchangers, but used cooling turbines for the cabin air.')),
    new Photograph('/photographs/2017-07-22/2017-07-22_015.webp'),
  ]);

export default Maks;