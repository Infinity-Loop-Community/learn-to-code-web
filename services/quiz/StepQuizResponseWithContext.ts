import StepQuizResponse from "@/services/quiz/StepQuizResponse";

type StepQuizResponseWithContext = StepQuizResponse & {
  stepName: string
  courseName: string
}

export default StepQuizResponseWithContext
