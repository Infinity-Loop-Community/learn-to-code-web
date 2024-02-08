import BaseCommand from './BaseCommand'

export default class StartQuiz extends BaseCommand {

  readonly quizId: string
  readonly requiredQuestionsAnswered: string[]

  constructor(quizId: string, requiredQuestionsAnswered: string[]) {
    super()

    this.quizId = quizId
    this.requiredQuestionsAnswered = requiredQuestionsAnswered
  }

  getType(): string {
    return "StartQuiz";
  }

}
