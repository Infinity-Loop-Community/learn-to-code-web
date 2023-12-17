import {describe, expect, it, vi} from "vitest";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import Quiz from "@/components/quizzes/active/Quiz";
import CourseDataService, {QUIZ_ID} from "@/services/quiz/CourseDataService";

let mockPushFn = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockPushFn
    };
  }
}));

vi.mock("@/services/participant/ParticipantDataService", () => {
  const ParticipantDataService = vi.fn(() => ({
    sendParticipantEvent: vi.fn(),
    getQuizOverview: vi.fn(),
    getQuizLatestAttemptDetail: vi.fn(),
  }))
  return { ParticipantDataService }
});

describe('Quiz', () => {
  it('renders questions', async () => {
    let quizResponse = await renderQuiz();

    const questions = await screen.findAllByText(/Question (\d+)/)
    expect(questions.length).toBe(quizResponse.questions.length)
  });

  it('has no preselected answers', async () => {
    await renderQuiz();

    const checkedAnswer = screen.queryByRole("radio", {checked: true})
    expect(checkedAnswer).toBeNull()
  });

  it('increases completion bar on answer selection', async () => {
    await renderQuiz();

    await selectAnswerForQuestions(2);

    await screen.findByText("10%")
  });

  it('marks selected answers green in quiz navigation', async () => {
    await renderQuiz();

    const quizNavigationAnswerElement = await screen.findByText("1")
    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("light")

    await selectAnswerForQuestions(2);

    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("green")
  });

  it('requires all answers selected', async () => {
    let quizDTO = await renderQuiz();

    const finishQuizButton = await screen.findByText("Finish")
    fireEvent.click(finishQuizButton)

    const requiredSelectionMessage = await screen.findAllByText("Provide an answer to finish the quiz")
    expect(requiredSelectionMessage.length).toBe(quizDTO.questions.length)
  });

  it('redirects on selection', async () => {
    let quizDTO = await renderQuiz();
    await selectAnswerForQuestions(quizDTO.questions.length);

    const finishQuizButton = await screen.findByText("Finish")
    fireEvent.click(finishQuizButton)

    await waitFor(() => expect(mockPushFn).toBeCalled())
  });
});

async function renderQuiz() {
  const quizDataService = new CourseDataService();
  let quizDTO = await quizDataService.fetchCourseQuizData(QUIZ_ID);

  render(<Quiz quizDTO={quizDTO} selectedAnswers={{}} userId={"test-user"}/>);
  return quizDTO;
}


async function selectAnswerForQuestions(questionCount: number) {
  const uncheckedAnswers = await screen.findAllByRole("radio", {checked: false})

  for (let i = 0; i < questionCount; i++) {
    fireEvent.click(uncheckedAnswers[4 * i])
  }
}
