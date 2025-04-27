class Social {
  private firstName: string;
  private lastName: string;
  private description: string;
  private vkUrl?: string;
  private fbUrl?: string;
  private ingUrl?: string;

  constructor(firstName: string, lastName: string, description: string,
      vkUrl?: string, fbUrl?: string, ingUrl?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.vkUrl = vkUrl;
    this.fbUrl = fbUrl;
    this.ingUrl = ingUrl;
  }

  getFirstName = () => this.firstName;
  getLastName = () => this.lastName;
  getDescription = () => this.description;

  getVKUrl = () => this.vkUrl;
  getFacebookUrl = () => this.fbUrl;
  getInstagramUrl = () => this.ingUrl;
}

export default Social;