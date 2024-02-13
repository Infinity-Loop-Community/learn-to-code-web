import {describe, expect, it, vi} from "vitest";
import {render, screen} from '@testing-library/react';
import {QUIZ_ID} from "@/services/quiz/CourseDataRemoteRepository";
import Attempt from "@/components/quizzes/attempt/Attempt";
import QuizAttemptDetailResponse from "@/services/participant/response/QuizAttemptDetailResponse";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";
import CourseDataRepository from "@/services/quiz/CourseDataRepository";
import CourseDataStubRepository from "@/tests/stub/CourseDataStubRepository";

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  }
}));

const courseDataRepository: CourseDataRepository = new CourseDataStubRepository()

describe('Attempt', () => {

  describe('percentage improvement', () => {

    it('does not show percentage improvement for the first attempt', async () => {
      let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
      let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

      render(<Attempt quizResponse={quizResponse}
                      quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

      const query = screen.queryByText("improved")
      expect(query).toBeNull()
    });

    it('does show percentage improvement for the >1 attempt', async () => {
      let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
      let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse, true, 2);

      render(<Attempt quizResponse={quizResponse}
                      quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

      const query = screen.queryByText("improved")
      expect(query).not.toBeNull()
    });

  });

  describe('time taken', () => {

    it('uses below average if time is less than average', async () => {
      let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
      let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse, true, 1, -90);

      render(<Attempt quizResponse={quizResponse}
                      quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

      await screen.findByText("below average")

      const timeTaken = (await screen.findByTestId("metrics-time-taken")).innerHTML
      expect(timeTaken).toBe("90%")
    });

    it('uses above average if time is more than average', async () => {
      let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
      let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse, true, 1, 90);

      render(<Attempt quizResponse={quizResponse}
                      quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

      const query = screen.findByText("above average")
      expect(query).not.toBeNull()
    });

  });

  it('renders questions', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    const questions = await screen.findAllByText(/Question (\d+)/)
    expect(questions.length).toBe(quizResponse.questions.length)
  });

  it('has preselected all answers', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    const checkedAnswers = await screen.queryAllByRole("radio", {checked: true})
    expect(checkedAnswers.length).toBe(quizResponse.questions.length)
  });

  it('shows improvement count', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    await screen.findByText("100%")
  });

  it('marks correct answers green in quiz navigation', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    const quizNavigationAnswerElement = await screen.findByText("2")
    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("green")
  });

  it('marks wrong answers red in quiz navigation', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse, false);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    const quizNavigationAnswerElement = await screen.findByText("1")
    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("red")
  });

  it('redirects to quiz page on retry click', async () => {
    let quizResponse = await courseDataRepository.fetchCourseQuizData(QUIZ_ID);
    let quizAttemptDetailResponse = getQuizAttemptDetailResponseFor(quizResponse);

    render(<Attempt quizResponse={quizResponse} quizAttemptDetailResponse={quizAttemptDetailResponse}/>);

    const retryQuizButton = await screen.findByText("Retry")

    expect(retryQuizButton.closest("a")?.href).toContain(`quizzes/${quizResponse.id}`)
  });
});


function getQuizAttemptDetailResponseFor(
    quizResponse: StepQuizResponseWithContext,
    correctAnswers = true,
    attemptId = 1,
    comparedToTimeAveragePercentage = 1
) {

  let questionsWithAnswer: Record<string, string> = {}
  quizResponse.questions.forEach(q => {
    questionsWithAnswer[q.id] = q.answers.find(a => a.isCorrect === correctAnswers)!!.id
  })

  let quizAttemptDetailResponse: QuizAttemptDetailResponse = {
    attemptId: attemptId,
    attemptStatus: "finished",
    questionsWithAnswer: questionsWithAnswer,
    attemptResult: {
      comparedToCorrectRatioLastTryPercentage: 1,
      comparedToTimeAveragePercentage: comparedToTimeAveragePercentage,
      pass: true,
      timeTakenMins: 1,
      questionCorrectRatio: 1
    }
  };
  return quizAttemptDetailResponse;
}
