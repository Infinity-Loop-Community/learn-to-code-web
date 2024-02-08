
export default abstract class BaseCommand {
  private readonly createdAt: Date;

  protected constructor() {
    this.createdAt = new Date()
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  abstract getType(): string;

  getData(): any {
    return {
      ...this,
      type: this.getType()
    }
  }

}
