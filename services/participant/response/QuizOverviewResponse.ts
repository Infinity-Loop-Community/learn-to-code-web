export class QuizAttemptResponse {
  quizId: string = ""
  attemptId: number = -1
  pass: boolean = false
  questionsWithAnswer: Record<string, string> = {}
}

export default class QuizOverviewResponse {
  activeQuizzes: Record<string, QuizAttemptResponse[]> = {}
  finishedQuizzes: Record<string, QuizAttemptResponse[]> = {}
}
