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


function getQuizAttemptDetailResponseFor(quizResponse: StepQuizResponseWithContext, correctAnswers = true) {
  let questionsWithAnswer: Record<string, string> = {}
  quizResponse.questions.forEach(q => {
    questionsWithAnswer[q.id] = q.answers.find(a => a.isCorrect === correctAnswers)!!.id
  })

  let quizAttemptDetailResponse: QuizAttemptDetailResponse = {
    attemptId: 1,
    attemptStatus: "finished",
    questionsWithAnswer: questionsWithAnswer,
    attemptResult: {
      comparedToCorrectRatioLastTryPercentage: 1,
      comparedToTimeAveragePercentage: 1,
      pass: true,
      timeTakenMins: 1,
      questionCorrectRatio: 1
    }
  };
  return quizAttemptDetailResponse;
}
