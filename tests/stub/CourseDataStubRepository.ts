import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";
import CourseDataRepository from "@/services/quiz/CourseDataRepository";
import {QUIZ_ID} from "@/services/quiz/CourseDataRemoteRepository";
import {CourseResponse} from "@/services/quiz/CourseResponse";


export default class CourseDataStubRepository implements CourseDataRepository {

  async fetchCourseQuizData(): Promise<StepQuizResponseWithContext> {

    return Promise.resolve(
        {
          id: QUIZ_ID,
          questions: [
            {
              id: 'q-id-1',
              answers: [
                {
                  id: 'a-1-1',
                  text: 'a-text-1-1',
                  description: 'desc-1-1',
                  isCorrect: true
                },
                {
                  id: 'a-1-2',
                  text: 'a-text-1-2',
                  description: 'desc-1-2',
                  isCorrect: false
                }
              ],
              difficulty: 'easy',
              rating: 1,
              text: 'q-text',
              ratingCount: 1
            }, {
              id: 'q-id-2',
              answers: [
                {
                  id: 'a-2-1',
                  text: 'a-text-2-1',
                  description: 'desc-2-1',
                  isCorrect: true
                },
                {
                  id: 'a-2-2',
                  text: 'a-text-2-2',
                  description: 'desc-2-2',
                  isCorrect: false
                }
              ],
              difficulty: 'easy',
              rating: 1,
              text: 'q-text',
              ratingCount: 1
            }
          ],
          courseName: "courseName",
          stepName: "stepName"
        } as StepQuizResponseWithContext
    )
  }

  fetchCourse(_cookieValue?: string): Promise<CourseResponse> {
    return Promise.resolve({
      id: "course-id",
      name: "course-name",
      steps: [
        {
          id: "step-id",
          name: "step-name",
          quizzes: []
        }
      ]
    } as CourseResponse)
  }

}
