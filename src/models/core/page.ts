import Album from './photographyAlbum';
import PageType from './pageType';

class Page {
  private album: Album;
  private type: PageType;
  private route: string;

  constructor(album: Album, type: PageType, route: string) {
    this.album = album;
    this.type = type;
    this.route = route;
  }

  getAlbum = () => this.album;
  getType = () => this.type;
  getRoute = () => this.route;
}

export default Page;