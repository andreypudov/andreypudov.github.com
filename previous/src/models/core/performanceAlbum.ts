import Genre from './genre';
import Media from './media';
import PhotographyAlbum from './photographyAlbum';
import Text from './text';

class PerformanceAlbum extends PhotographyAlbum {
  private sheets: Media[];

  constructor(title: Text, date: Date, cover: Media, media: Media[], sheets: Media[]) {
    super(title, Genre.Other, date, cover, media);
    this.sheets = sheets;
  }

  getSheets = () => this.sheets;
}

export default PerformanceAlbum;