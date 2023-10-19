import {describe, expect, it, vi} from "vitest";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import Quiz from "@/components/quiz/active/Quiz";
import QuizDataService from "@/services/quiz/QuizDataService";
import Attempt from "@/components/quiz/attempt/Attempt";
import {closest} from "dom7";

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  }
}));

describe('Attempt', () => {
  it('renders questions', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    const questions = await screen.findAllByText(/Question (\d+)/)
    expect(questions.length).toBe(attemptDTO.questions.length)
  });

  it('has preselected all answers', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    const checkedAnswers = await screen.queryAllByRole("radio", {checked: true})
    expect(checkedAnswers.length).toBe(attemptDTO.questions.length)
  });

  it('shows improvement count', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    await screen.findByText("10%")
  });

  it('marks correct answers green in quiz navigation', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    const quizNavigationAnswerElement = await screen.findByText("2")
    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("green")
  });

  it('marks wrong answers red in quiz navigation', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    const quizNavigationAnswerElement = await screen.findByText("1")
    expect(quizNavigationAnswerElement.closest('a')?.className).toContain("red")
  });

  it('redirects to quiz page on retry click', async () => {
    const quizDataService = new QuizDataService();
    let attemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId("1");

    render(<Attempt quizAttemptDTO={attemptDTO}/>);

    const retryQuizButton = await screen.findByText("Retry")

    expect(retryQuizButton.closest("a")?.href).toBe('http://localhost:3000/quiz/fcf7890f-9c72-46d3-931e-34494307be37')
  });
});
