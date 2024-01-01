import QuizAnswerResponse from "@/services/quiz/QuizAnswerResponse";

type QuizQuestionResponse = {
  id: string,
  text: String,
  difficulty: "easy" | "medium" | "hard",
  answers: QuizAnswerResponse[],
  rating: number,
  ratingCount: number
}

export default QuizQuestionResponse
