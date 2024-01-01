import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";
import {CourseResponse} from "@/services/quiz/CourseResponse";

export default interface CourseDataRepository {

  // eslint-disable-next-line unused-imports/no-unused-vars
  fetchCourseQuizData(quizId: String, cookieValue?: string): Promise<StepQuizResponseWithContext>

  // eslint-disable-next-line unused-imports/no-unused-vars
  fetchCourse(cookieValue?: string): Promise<CourseResponse>

}
