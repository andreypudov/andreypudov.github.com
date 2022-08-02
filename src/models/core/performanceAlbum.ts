import Media from './media';
import PhotographyAlbum from './photographyAlbum';

class PerformanceAlbum extends PhotographyAlbum {
  private sheets: Media[];

  constructor(title: string, date: Date, cover: Media, media: Media[], sheets: Media[]) {
    super(title, date, cover, media);
    this.sheets = sheets;
  }

  getSheets = () => this.sheets;
}

export default PerformanceAlbum;