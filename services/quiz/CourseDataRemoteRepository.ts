import {CourseResponse} from "@/services/quiz/CourseResponse";
import configuration from "@/config/configuration";
import BackendDataService from "@/services/BackendDataService";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";
import CourseDataRepository from "@/services/quiz/CourseDataRepository";
import StepQuizResponse from "@/services/quiz/StepQuizResponse";

export const COURSE_ID = "ed86d338-84a0-4486-a314-b99b17175875";
export const QUIZ_ID = "fcf7890f-9c72-46d3-931e-34494307be37";

export default class CourseDataRemoteRepository implements CourseDataRepository{

  private backendDataService = new BackendDataService()

  constructor(backendDataService?: BackendDataService) {

    if (backendDataService) {
      this.backendDataService = backendDataService
    }
  }

  async fetchCourse(cookieValue?: string): Promise<CourseResponse> {
    let courseResponse = await this.backendDataService.send<CourseResponse>(
        `${configuration.url.backend}/courses/${COURSE_ID}`,
        "GET",
        undefined,
        cookieValue,
        true
    );

    return courseResponse
  }

  async fetchCourseQuizData(quizId: String, cookieValue?: string): Promise<StepQuizResponseWithContext> {
    let courseResponse = await this.backendDataService.send<CourseResponse>(
        `${configuration.url.backend}/courses/${COURSE_ID}`,
        "GET",
        undefined,
        cookieValue,
        true
    );

    let courseQuizzes: {quiz: StepQuizResponse, stepName: string}[] = []

    courseResponse.steps.forEach(s => {
      s.quizzes.forEach(q => {
        courseQuizzes.push({
          quiz: q,
          stepName: s.name
        })
      })
    })

    const stepQuizMatch = courseQuizzes.find(q => q.quiz.id === quizId)!!

    const stepQuizResponseWithStepName: StepQuizResponseWithContext = {
      ...stepQuizMatch.quiz,
      stepName: stepQuizMatch.stepName,
      courseName: courseResponse.name,
    }

    return stepQuizResponseWithStepName
  }

}
