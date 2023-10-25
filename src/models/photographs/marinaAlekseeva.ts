import Album from '../core/photographyAlbum';
import Photograph from '../core/photograph';
import Text from '../core/text';

const MarinaAlekseeva = new Album(
  new Text('MarinaAlekseeva.Title', 'Marina Alekseeva'),
  new Date('2013-09-10'),
  new Photograph('/photographs/2013-09-10/2013-09-10_002.webp'),
  [
    new Photograph('/photographs/2013-09-10/2013-09-10_001.webp', true, new Text('MarinaAlekseeva.', 'Marina is a former vice president in the Software and Services Group and serves as general manager for the group. Based in Nizhny Novgorod, she managed Intel research and development operations in Russia and was responsible for aligning them with Intel\'s business strategy. Today she is co-lead of the Women in Big Data program in EMEA.')),
    new Photograph('/photographs/2013-09-10/2013-09-10_002.webp'),
    new Photograph('/photographs/2013-09-10/2013-09-10_003.webp', true),
  ]);

export default MarinaAlekseeva;