import {useRouter} from "next/navigation";
import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {getValuesAsStringFromWatchedValues} from "@/libs/utils/reactHookFormUtils";
import StepQuizResponseWithContext from "@/services/quiz/StepQuizResponseWithContext";

export default function useQuizForm(quizDTO: StepQuizResponseWithContext) {
  const {push} = useRouter();
  const onSubmit = (questionsWithAnswerProvided: Record<string, string>) => {

    onSubmitSubjects.current && onSubmitSubjects.current(questionsWithAnswerProvided)
      .then(() => {
        push(`/quizzes/${quizDTO.id}/attempts/latest`)
      })
      .catch(() => {
        console.log('Finishing quiz failed, maybe some state inconsistency exists, reloading page...')
        window.location.reload();
      })

    // ;
  };

  const onSubmitSubjects = useRef<((_: Record<string, string>) => Promise<void>) | null>(null);
  function registerOnSubmit(onSubmit: (_: Record<string, string>) => Promise<void>): void {
    onSubmitSubjects.current = onSubmit
  }

  const onFoChangeSubjects = useRef<((_: Record<string, string>) => void) | null>(null);
  function registerOnFormChange(onFormChange: (_: Record<string, string>) => void): void {
    onFoChangeSubjects.current = onFormChange
  }

  const [questionIdsWithAnswersProvided, setQuestionIdsWithAnswersProvided] = useState(new Set<string>())

  const {handleSubmit, control, watch} = useForm();
  const watchedValues = watch();
  const prevWatchedValues = useRef<Record<string, string>>({});

  React.useEffect(() => {
    const providedAnswerIds = Object.keys(watchedValues).filter(v => watchedValues[v] !== "")
    setQuestionIdsWithAnswersProvided(new Set(providedAnswerIds))

    const changedFields = Object.keys(watchedValues).reduce((acc: Record<string, string>, key) => {
      if (watchedValues[key] !== prevWatchedValues.current[key]) {
        acc[key] = watchedValues[key] as string;
      }
      return acc;
    }, {});

    // React form triggers initially, hence contains zero or many changes and not only 1
    if (Object.values(changedFields).filter(v => v !== "").length == 1) {
      onFoChangeSubjects.current && onFoChangeSubjects.current(changedFields)
    }

    // Updating the ref with current watched fields for the next comparison
    prevWatchedValues.current = watchedValues;

    // extracting values to watch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValuesAsStringFromWatchedValues(watchedValues)]);

  return {handleSubmit: () => handleSubmit(onSubmit), control, questionIdsWithAnswersProvided, registerOnFormChange, registerOnSubmit};
}
