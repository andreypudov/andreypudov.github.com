import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const LakeBaikalTeam = new Album(
  new Text('Lake Baikal Team'),
  Genre.Portrait,
  new Date('2015-08-08'),
  new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_002.webp'),
  [
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_004.webp', false, new Text('The expedition leader Ivan Schipakin and Olga Poroshina.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_001.webp', false, new Text('Evgeny Timofeev is an expedition photographer.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_003.webp', false, new Text('Participants of the hike organized by the Ural Tropa tourist club.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_007.webp', false, new Text('Lilia Makhmutova is an expedition medic, experienced surgery, responsible for the physical wellbeing of people during expedition.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_002.webp', false, new Text('Participants of the hike organized by the Ural Tropa tourist club.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_005.webp', false, new Text('Aleksey Gladkih and Olga Yagovitina')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_008.webp', false, new Text('Natalya Agafonova is an experienced naturalist with a comprehensive and meaningful knowledge of plants.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_009.webp', false, new Text('The ferry to Zmeevaya Bay on the Svyatoy Nose peninsula.')),
    new Photograph('/photographs/2015-07-27_08-08_2/2015-07-27_08-08_006.webp', false, new Text('Vyacheslav Chukharev is a group sweep, carefully kept a count of the squad, ensuring the entire group makes it safely to the final destination.')),
  ]);

export default LakeBaikalTeam;