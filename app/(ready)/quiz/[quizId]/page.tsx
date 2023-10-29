import Preloader from '@/components/common/Preloader'
import React from 'react'
import QuizDataService from "@/services/quiz/QuizDataService";
import Quiz from "@/components/quiz/active/Quiz";
import {PagePropsWithParameters} from "@/libs/utils/nextUtils";

export const metadata = {
  title: 'Dashboard-quiz || Learn-to-Code - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Learn-to-Code, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

const quizDataService = new QuizDataService()


export default async function page(props: PagePropsWithParameters) {

  const quizId = props.params['quizId']

  const quizDTO = await quizDataService.fetchQuizDataByQuizId(quizId)

  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <Quiz quizDTO={quizDTO}/>
          </div>
        </main>
    </div>
  )
}





