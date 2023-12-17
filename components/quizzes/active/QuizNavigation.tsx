import React, {useEffect, useState} from "react";
import QuizNavigationElement from "@/components/quizzes/active/QuizNavigationElement";
import QuizCompletionBar from "@/components/quizzes/active/QuizCompletionBar";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export default function QuizNavigation({quizDTO, questionIdsWithAnswersProvided}: {
                                             quizDTO: StepQuizResponseWithContext,
                                             questionIdsWithAnswersProvided: Set<string>,
                                           }) {

  const [answersProvidedPercentage, setAnswersProvidedPercentage] = useState(0)
  let quizAnswerCount = quizDTO.questions.length;
  useEffect(() => {
    setAnswersProvidedPercentage(questionIdsWithAnswersProvided.size / quizAnswerCount)
  }, [questionIdsWithAnswersProvided, quizAnswerCount])

  return <div className="col-xl-3 col-lg-3">
    <div className="row y-gap-30">
      <div className="col-12">
        <QuizCompletionBar answersProvidedPercentage={answersProvidedPercentage}/>
      </div>

      <div className="col-12">
        <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
          <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

          <div className="row x-gap-10 y-gap-10">

            {quizDTO.questions.map((question, index) =>
                <QuizNavigationElement
                    key={`quiz-nav-${question.id}`} questionId={question.id}
                    isAnswered={questionIdsWithAnswersProvided.has(question.id)}
                    num={index + 1}/>
            )}
          </div>

          <button className="button -md -dark-1 text-white -dark-button-white mt-30" type="submit">
            Finish
          </button>


        </div>
      </div>
    </div>
  </div>

}
