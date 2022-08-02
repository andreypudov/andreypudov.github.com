import Album from './photographyAlbum';

class Page {
  private album: Album;
  private route: string;

  constructor(album: Album, route: string) {
    this.album = album;
    this.route = route;
  }

  getAlbum = () => this.album;
  getRoute = () => this.route;
}

export default Page;