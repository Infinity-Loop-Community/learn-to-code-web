import Preloader from '@/components/common/Preloader'
import React from 'react'
import QuizDataService from "@/services/quiz/QuizDataService";
import Attempt from "@/components/quiz/attempt/Attempt";
import {PagePropsWithParameters} from "@/utils/nextUtils";

export const metadata = {
  title: 'Dashboard-quiz || Learn-to-Code - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Learn-to-Code, the most impressive LMS template for online courses, education and LMS platforms.',
  
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





