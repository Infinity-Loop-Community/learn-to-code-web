import AttemptStatusResponse from "@/services/participant/response/AttemptStatusResponse";
import AttemptResultResponse from "@/services/participant/response/AttemptResultResponse";

type QuizAttemptDetailResponse = {
  questionsWithAnswer: Record<string, string>
  attemptStatus: AttemptStatusResponse
  attemptId: number
  attemptResult: AttemptResultResponse
}

export default QuizAttemptDetailResponse
