import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export default interface CourseDataRepository {

  // eslint-disable-next-line unused-imports/no-unused-vars
  fetchCourseQuizData(quizId: String, cookieValue?: string): Promise<StepQuizResponseWithContext>

}
