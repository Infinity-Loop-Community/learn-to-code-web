import BaseCommand from './BaseCommand'

export default class FinishQuiz extends BaseCommand {

  readonly quizId: string

  constructor(quizId: string) {
    super()

    this.quizId = quizId
  }

  getType(): string {
    return "FinishQuiz";
  }

}
