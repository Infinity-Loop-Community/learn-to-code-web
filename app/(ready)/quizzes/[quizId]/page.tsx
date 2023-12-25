import Preloader from '@/components/common/Preloader'
import React from 'react'
import CourseDataRemoteRepository from "@/services/quiz/CourseDataRemoteRepository";
import Quiz from "@/components/quizzes/active/Quiz";
import {PageProps} from "@/libs/utils/nextUtils";
import {ParticipantDataService} from "@/services/participant/ParticipantDataService";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import StartQuiz from "@/services/participant/event/StartQuiz";
import {redirect} from "next/navigation";
import {headers} from "next/headers";
import QuizOverviewResponse from "@/services/participant/response/QuizOverviewResponse";

export async function generateMetadata({ params }: PageProps) {
  const quizId = params['quizId']
  const cookieValue = headers().get('Cookie') ?? undefined
  const quizResponse = await quizDataService.fetchCourseQuizData(quizId, cookieValue)

  return {
    title: `${quizResponse.stepName} Quiz | Learn-to-Code`,
    description:
        'Challenge yourself with our software engineering quiz on Learn to Code. Crafted by industry experts, each question is designed to test your understanding and proficiency. Dive in, measure your grasp, and get instant feedback to enhance your learning journey.',

  }
}

const quizDataService = new CourseDataRemoteRepository()
const participantDataService = new ParticipantDataService()

export default async function page(props: PageProps) {

  const quizId = props.params['quizId']
  const cookieValue = headers().get('Cookie') ?? undefined

  const quizResponsePromise = quizDataService.fetchCourseQuizData(quizId, cookieValue)

  const serverSessionPromise = getServerSession(authOptions)

  const [quizResponse, serverSession] = await Promise.all([quizResponsePromise, serverSessionPromise])

  if (!serverSession) {
    redirect('/login')
  }

  const participantQuizOverview = await participantDataService.getQuizOverview(serverSession?.user.id!!, headers().get('Cookie')!!)

  let selectedAnswers = {}
  if (!getIsContinuedQuiz(participantQuizOverview, quizId)) {
    let startQuizCommand = new StartQuiz(quizResponse.id, quizResponse.questions.map(q => q.id));
    await participantDataService.sendParticipantEvent(serverSession.user.id, startQuizCommand, cookieValue)
  } else {
    const attemptDetails = await participantDataService.getQuizLatestAttemptDetail(serverSession.user.id, quizId, cookieValue ?? undefined)

    if (attemptDetails.attemptStatus === "ongoing") {
      selectedAnswers = attemptDetails.questionsWithAnswer
    }
  }

  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <Quiz quizDTO={quizResponse} selectedAnswers={selectedAnswers} userId={serverSession!!.user.id}/>
          </div>
        </main>
    </div>
  )
}

function getIsContinuedQuiz(quizOverviewResponse: QuizOverviewResponse, quizId: string) {
  return !!quizOverviewResponse.activeQuizzes[quizId]
}
