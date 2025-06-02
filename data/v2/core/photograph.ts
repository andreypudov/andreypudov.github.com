import Media from './media';
import Text from './text';

class Photograph implements Media {
  src: string;
  vertical: boolean;
  description?: Text;
  hidden?: boolean = false;

  constructor(src: string, vertical: boolean = false, description?: Text, hidden: boolean = false) {
    this.src = src;
    this.vertical = vertical;
    this.description = description;
    this.hidden = hidden;
  }
}

export default Photograph;