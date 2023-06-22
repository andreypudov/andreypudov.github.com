import i18next from '../../i18n';
class Text {
  private key: string;
  private fallback: string;

  constructor(key: string, fallback: string) {
    this.key = key;
    this.fallback = fallback;
  }

  getKey = () => this.key;
  getFallback = () => this.fallback;
  getTranslation = () => i18next.t(this.key, this.fallback);
}

export default Text;