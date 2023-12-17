class QuizAttemptResponse {
  quizId: string = ""
  attemptId: number = -1
  questionsWithAnswer: Record<string, string> = {}
}

export default class QuizOverviewResponse {
  activeQuizzes: Record<string, QuizAttemptResponse[]> = {}
  finishedQuizzes: Record<string, QuizAttemptResponse[]> = {}
}
