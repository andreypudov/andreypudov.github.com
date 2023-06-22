import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';

const LolitaRakhmatova = new Album(
  new Text('LolitaRakhmatova', 'Lolita Rakhmatova'),
  new Date('2015-12-12'),
  new Photograph('/photographs/2015-12-12/2015-12-12_002.webp'),
  [
    new Photograph('/photographs/2015-12-12/2015-12-12_001.webp', true),
    new Photograph('/photographs/2015-12-12/2015-12-12_002.webp'),
    new Photograph('/photographs/2015-12-12/2015-12-12_003.webp', true),
  ],
  new Social('Лолита', 'Рахматова', 'Домохозяйка в Москве', 'https://vk.com/id112714393'));

export default LolitaRakhmatova;