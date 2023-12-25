import QuizAnswerResponse from "@/services/quiz/QuizAnswerResponse";

type QuizQuestionResponse = {
  id: string,
  text: String,
  difficulty: string,
  answers: QuizAnswerResponse[],
  rating: number,
  ratingCount: number
}

export default QuizQuestionResponse
