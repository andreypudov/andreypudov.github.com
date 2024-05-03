import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Social from '../core/social';
import Text from '../core/text';

const PeiPeiChen = new Album(
  new Text('PeiPeiChen.Title', 'Pei Pei Chen'),
  new Date('2024-04-30'),
  new Photograph('/photographs/2024-04-10_30/2024-04-10_30_011.webp'),
  [
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_001.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_002.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_003.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_004.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_005.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_006.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_007.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_008.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_009.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_010.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_011.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_012.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_013.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_014.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_015.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_016.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_017.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_018.webp'),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_019.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_020.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_021.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_022.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_023.webp', true),
    new Photograph('/photographs/2024-04-10_30/2024-04-10_30_024.webp', true),
  ],
  new Social('Пейпей', 'Чен', 'Программист из Тайнаня', 'https://www.linkedin.com/in/pei-pei-chen/'));

export default PeiPeiChen;