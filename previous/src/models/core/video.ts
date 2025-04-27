import Media from './media';
import Text from './text';

class Video implements Media {
  src: string;
  description?: Text;
  vertical: boolean = false;

  constructor(src: string, description?: Text) {
    this.src = src;
    this.description = description;
  }
}

export default Video;