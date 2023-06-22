import Media from './media';
import Text from './text';

class Photograph implements Media {
  src: string;
  vertical: boolean;
  description?: Text;

  constructor(src: string, vertical: boolean = false, description?: Text) {
    this.src = src;
    this.vertical = vertical;
    this.description = description;
  }
}

export default Photograph;