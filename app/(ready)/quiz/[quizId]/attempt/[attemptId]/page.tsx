import Preloader from '@/components/common/Preloader'
import React from 'react'
import QuizDataService from "@/services/quiz/QuizDataService";
import Attempt from "@/components/quiz/attempt/Attempt";
import {PagePropsWithParameters} from "@/utils/nextUtils";

export async function generateMetadata({ params }: PagePropsWithParameters) {
  const attemptId = params['attemptId']
  const quizAttemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId(attemptId)

  return {
    title: `${quizAttemptDTO.courseStep.title} | Quiz Attempt ${quizAttemptDTO.attempt} | Learn-to-Code`,
    description:
        'Revisit your personal quiz attempt on Learn to Code. Analyze your responses, understand areas of strength and improvement, and chart your journey in mastering software engineering concepts with insights from our expert-led content.',

  }
}

const quizDataService = new QuizDataService()

export default async function page(props: PagePropsWithParameters) {
  const attemptId = props.params['attemptId']
  const quizAttemptDTO = await quizDataService.fetchQuizAttemptDataByAttemptId(attemptId)

  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
                <Attempt quizAttemptDTO={quizAttemptDTO}/>
          </div>
        </main>
    </div>
  )
}





