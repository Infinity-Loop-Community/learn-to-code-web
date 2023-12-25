"use client";

import React, {useEffect} from "react";
import FooterNine from "@/components/layout/footers/FooterNine";
import Question from "@/components/quizzes/active/Question";
import QuizNavigation from "@/components/quizzes/active/QuizNavigation";
import useQuizForm from "@/components/quizzes/active/useQuizForm";
import PageLinks from "@/components/common/PageLinks";
import {ParticipantDataService} from "@/services/participant/ParticipantDataService";
import FinishQuiz from "@/services/participant/event/FinishQuiz";
import SelectAnswer from "@/services/participant/event/SelectAnswer";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

const participantDataService = new ParticipantDataService()

export default function Quiz({quizDTO, selectedAnswers, userId}: {
  quizDTO: StepQuizResponseWithContext,
  selectedAnswers: Record<string, string>,
  userId: string
}) {
  const {handleSubmit, control, questionIdsWithAnswersProvided, registerOnFormChange, registerOnSubmit} = useQuizForm(quizDTO);

  useEffect(() => {
      if (userId) {
        registerOnFormChange((change) => {
          Object.entries(change).forEach(entry => {
            let selectAnswerCommand = new SelectAnswer(quizDTO.id, entry[0], entry[1]);

            retryStoreSelectAnswerCommand(
                3, async () => await participantDataService.sendParticipantEvent(userId, selectAnswerCommand)
            )

          })
        })

        registerOnSubmit(async _ => {
          let finishQuizCommand = new FinishQuiz(quizDTO.id);
          await participantDataService.sendParticipantEvent(userId, finishQuizCommand)
        })
      }
  }, [quizDTO.id, registerOnFormChange, registerOnSubmit])

  return (
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Quiz</h1>
              <PageLinks courseTitle={quizDTO.courseName} courseStepTitle={quizDTO.stepName} />
            </div>
          </div>

          <form onSubmit={handleSubmit()}>
            <div className="row y-gap-30">
              <div className="col-xl-9">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Quiz</h2>
                  </div>

                  <div className="py-30 px-30">

                    {quizDTO.questions.map((questionDTO, i) =>
                        <Question num={i + 1} key={questionDTO.id} quizQuestionResponse={questionDTO}
                                  control={control}
                                  selectedAnswer={selectedAnswers[questionDTO.id]}/>
                    )}

                  </div>
                </div>
              </div>

              <QuizNavigation quizDTO={quizDTO}
                              questionIdsWithAnswersProvided={questionIdsWithAnswersProvided}
              />
            </div>
          </form>
        </div>

        <FooterNine/>
      </div>
  );
}

function retryStoreSelectAnswerCommand(times: number, fn: () => Promise<void>, currentTry = 1) {
  fn().catch(onRejected => {
    console.error(`Storing select answer command failed (try ${currentTry}/${times}: ${onRejected}, trying again in 3 se`)

    if (currentTry < times) {

      setTimeout(
          () => retryStoreSelectAnswerCommand(times, fn, currentTry + 1),
          1000
      )

    }
  })
}
