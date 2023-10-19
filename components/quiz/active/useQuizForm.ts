import {QuizDTO} from "@/services/quiz/QuizDTO";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {getValuesAsStringFromWatchedValues} from "@/utils/reactHookFormUtils";

export default function useQuizForm(quizDTO: QuizDTO) {
  const {push} = useRouter();
  const onSubmit = () => {
    push(`/quiz/${quizDTO.id}/attempt/1`);
  };

  const [questionIdsWithAnswersProvided, setQuestionIdsWithAnswersProvided] = useState(new Set<string>())

  const {handleSubmit, control, watch} = useForm();
  const watchedValues = watch();

  React.useEffect(() => {
    const providedAnswerIds = Object.keys(watchedValues).filter(v => watchedValues[v] !== "")
    setQuestionIdsWithAnswersProvided(new Set(providedAnswerIds))

  }, [getValuesAsStringFromWatchedValues(watchedValues)]);

  return {handleSubmit: () => handleSubmit(onSubmit), control, questionIdsWithAnswersProvided};
}