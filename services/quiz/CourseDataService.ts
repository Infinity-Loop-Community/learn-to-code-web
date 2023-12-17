import {CourseResponse} from "@/services/quiz/CourseResponse";
import configuration from "@/config/configuration";
import BackendDataService from "@/services/BackendDataService";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export const COURSE_ID = "ed86d338-84a0-4486-a314-b99b17175875";
export const QUIZ_ID = "fcf7890f-9c72-46d3-931e-34494307be37";

export default class CourseDataService {

  constructor(private backendDataService = new BackendDataService()) {
  }

  async fetchCourseQuizData(quizId: String, cookieValue?: string, logContext: string = "default"): Promise<StepQuizResponseWithContext> {
    let courseResponse = await this.backendDataService.send<CourseResponse>(
        `${configuration.url.backend}/courses/${COURSE_ID}`,
        "GET",
        undefined,
        cookieValue,
        true
    );

    const stepQuizResponse = courseResponse.steps[0].quizzes.find(q => q.id === quizId)!!

    const stepQuizResponseWithStepName: StepQuizResponseWithContext = {
      ...stepQuizResponse,
      stepName: courseResponse.steps[0].name,
      courseName: courseResponse.name,
    }

    return stepQuizResponseWithStepName
  }

}
