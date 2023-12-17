import StepQuizResponse from "@/services/quiz/StepQuizResponse";

type StepResponse = {
  id: string,
  name: string,
  quizzes: StepQuizResponse[]
}

export default StepResponse
