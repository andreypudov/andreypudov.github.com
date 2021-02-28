import Media from './media';

class Video implements Media {
  src: string;
  description: string;
  vertical: boolean = false;

  constructor(src: string, description: string = '') {
    this.src = src;
    this.description = description;
  }
}

export default Video;