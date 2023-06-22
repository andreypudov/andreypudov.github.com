import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const RamonPalace = new Album(
  new Text('RamonPalace', 'Ramon Palace'),
  new Date('2017-01-07'),
  new Photograph('/photographs/2017-01-07/2017-01-07_001.webp', false,
    new Text('RamonPalace.', 'Also known as Princess Oldenburg\'s Palace, is a red-brick neo-Gothic palace in Ramon. It was built in 1883–87 for Princess Eugenia Maximilianovna of Leuchtenberg and her husband Duke Alexander Petrovich of Oldenburg.')),
  [
    new Photograph('/photographs/2017-01-07/2017-01-07_001.webp', false,
      new Text('RamonPalace.', 'Also known as Princess Oldenburg\'s Palace, is a red-brick neo-Gothic palace in Ramon. It was built in 1883–87 for Princess Eugenia Maximilianovna of Leuchtenberg and her husband Duke Alexander Petrovich of Oldenburg.')),
    new Photograph('/photographs/2017-01-07/2017-01-07_002.webp', false,
      new Text('RamonPalace.', 'In 1879 Tsar Alexander II gave the estate of Ramon to his niece Princess Eugenia and the Duke of Oldenburg as a wedding gift. In 1883 they commissioned construction of the palace, in red brick, in the style of an English Gothic castle with gatehouse. The architect is usually said to have been Christopher Neysler, but some sources attribute the design to Nicholas Benois.')),
    new Photograph('/photographs/2017-01-07/2017-01-07_003.webp', false,
      new Text('RamonPalace.', 'The palace was completed in 1887. After the marriage of Duke Peter Alexandrovich of Oldenburg, the couple\'s only son, to Grand Duchess Olga Alexandrovna, the young couple lived at the palace and then built their own home, Olgino, next to it.')),
  ]);

export default RamonPalace;