import Preloader from '@/components/common/Preloader'
import React from 'react'
import QuizDataService from "@/services/quiz/QuizDataService";
import Quiz from "@/components/quiz/active/Quiz";
import {PagePropsWithParameters} from "@/libs/utils/nextUtils";

export async function generateMetadata({ params }: PagePropsWithParameters) {
  const quizId = params['quizId']
  const quizDTO = await quizDataService.fetchQuizDataByQuizId(quizId)

  return {
    title: `${quizDTO.courseStep.title} Quiz | Learn-to-Code`,
    description:
        'Challenge yourself with our software engineering quiz on Learn to Code. Crafted by industry experts, each question is designed to test your understanding and proficiency. Dive in, measure your grasp, and get instant feedback to enhance your learning journey.',

  }
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





