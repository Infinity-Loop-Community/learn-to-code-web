import Preloader from '@/components/common/Preloader'
import React from 'react'
import CourseDataService from "@/services/quiz/CourseDataService";
import Attempt from "@/components/quizzes/attempt/Attempt";
import {PageProps} from "@/libs/utils/nextUtils";
import {headers} from "next/headers";
import FinishQuiz from "@/services/participant/event/FinishQuiz";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {ParticipantDataService} from "@/services/participant/ParticipantDataService";

const participantDataService = new ParticipantDataService()

export async function generateMetadata({ params }: PageProps) {
  const quizId = params['quizId']

  const cookieValue = headers().get('Cookie') ?? undefined

  const quizResponse = await quizDataService.fetchCourseQuizData(quizId, cookieValue)

  return {
    title: `${quizResponse.stepName} | Quiz Attempt | Learn-to-Code`,
    description:
        'Revisit your personal quiz attempt on Learn to Code. Analyze your responses, understand areas of strength and improvement, and chart your journey in mastering software engineering concepts with insights from our expert-led content.',

  }
}

const quizDataService = new CourseDataService()

export default async function page(props: PageProps) {
  const quizId = props.params['quizId']

  const serverSession = await getServerSession(authOptions)

  if (!serverSession) {
    redirect('/login')
  }

  const cookieValue = headers().get('Cookie') ?? undefined

  const quizAttemptDetailResponse = await participantDataService.getQuizLatestAttemptDetail(serverSession.user.id, quizId, cookieValue)

  const quizResponse = await quizDataService.fetchCourseQuizData(quizId, cookieValue)

  if (quizAttemptDetailResponse.attemptStatus === "ongoing") {
    let finishQuizCommand = new FinishQuiz(quizId);
    await participantDataService.sendParticipantEvent(serverSession.user.id, finishQuizCommand, cookieValue ?? undefined)
  }

  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
                <Attempt quizAttemptDetailResponse={quizAttemptDetailResponse}  quizResponse={quizResponse}/>
          </div>
        </main>
    </div>
  )
}





