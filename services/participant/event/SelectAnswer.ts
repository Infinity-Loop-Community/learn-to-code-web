import BaseCommand from './BaseCommand'

export default class SelectAnswer extends BaseCommand {

  readonly quizId: string
  readonly questionId: string
  readonly answerId: string

  constructor(quizId: string, questionId: string, answerId: string) {
    super()

    this.quizId = quizId
    this.questionId = questionId
    this.answerId = answerId
  }

  getType(): string {
    return "SelectAnswer";
  }

}
