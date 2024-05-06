import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';
import Genre from '../core/genre';

const ConqueringAmerica30 = new Album(
  new Text('ConqueringAmerica30.Title', 'Conquering America 3.0'),
  Genre.Street,
  new Date('2019-05-25'),
  new Photograph('/photographs/2019-05-12_05-25/2019-05-12_05-25_001.webp'),
  [
    new Photograph('/photographs/2019-05-12_05-25/2019-05-12_05-25_001.webp', false,
      new Text('ConqueringAmerica30.',  'Boston is one of the oldest municipalities in America, founded on the Shawmut Peninsula in 1630 by Puritan settlers from the English town of the same name. It was the scene of several key events of the American Revolution and the nation\'s founding, such as the Boston Massacre, the Boston Tea Party, the Battle of Bunker Hill, and the siege of Boston. Upon American independence from Great Britain, the city continued to be an important port and manufacturing hub as well as a center for education and culture.')),
    new Photograph('/photographs/2019-05-12_05-25/2019-05-12_05-25_002.webp', true,
      new Text('ConqueringAmerica30.',  'The city has expanded beyond the original peninsula through land reclamation and municipal annexation. Its rich history attracts many tourists, with Faneuil Hall alone drawing more than 20 million visitors per year. Boston\'s many firsts include the United States\' first public park, the first public or state school, the first subway system, and the first large public library. ')),
    new Photograph('/photographs/2019-05-12_05-25/2019-05-12_05-25_003.webp', false,
      new Text('ConqueringAmerica30.',  'Today, Boston is a center of scientific research; the area\'s many colleges and universities, notably Harvard and MIT, make it a world leader in higher education, including law, medicine, engineering, and business, and the city is considered to be a global pioneer in innovation and entrepreneurship, with nearly 5,000 startups.')),
  ]);

export default ConqueringAmerica30;