import Photograph from './photograph';
import Text from './text';

class HiddenPhotograph implements Photograph {
  src: string;
  vertical: boolean;
  description?: Text;
  hidden?: boolean = false;

  constructor(src: string, vertical: boolean = false, description?: Text) {
    this.src = src;
    this.vertical = vertical;
    this.description = description;
    this.hidden = true;
  }
}

export default HiddenPhotograph;