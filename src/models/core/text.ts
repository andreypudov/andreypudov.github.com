class Text {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  getKey = () => this.value;
  getValue = () => this.value;
}

export default Text;