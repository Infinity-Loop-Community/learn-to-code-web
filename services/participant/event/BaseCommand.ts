
export default class BaseCommand {
  private readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date()
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getType(): string {
    return this.constructor.name;
  }

  getData(): any {
    return {
      ...this,
      type: this.getType()
    }
  }

}
