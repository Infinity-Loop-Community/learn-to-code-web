import React from "react";
import {indexToChar} from "@/libs/utils/stringUtils";
import {Control, Controller} from "react-hook-form";
import RadioInput from "@/components/quizzes/RadioInput";
import QuizAnswerResponse from "@/services/quiz/QuizAnswerResponse";

export default function QuestionAnswerSelectionGroup(
    {questionId, answers, control, selectedAnswer}: {
      questionId: string,
      answers: QuizAnswerResponse[],
      selectedAnswer: string | undefined
      control: Control
    },
) {

  return <div className="px-40 py-40">
    <Controller
        name={questionId}
        control={control}
        defaultValue={selectedAnswer ?? ""}
        rules={{required: 'Provide an answer to finish the quiz'}}
        render={({field, fieldState}) => (
            <>
              {
                answers.map((a, i) =>
                    <div key={a.id} className="form-radio d-flex items-center ">

                      <RadioInput field={field} value={a.id} checked={selectedAnswer === a.id} readOnly={false} labelElement={<>{indexToChar(i)}. {a.text}</>} />
                    </div>
                )
              }
              {fieldState.error &&

                  <div
                      className="d-flex items-center justify-between bg-warning-1 pl-30 pr-20 py-30 mt-20 rounded-8">
                    <div className="text-warning-2 lh-1 fw-500">{fieldState.error.message}</div>
                  </div>
              }
            </>
        )}
    />

  </div>

}
