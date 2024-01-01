import React from 'react'
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import PageLinks from "@/components/common/PageLinks";
import PageHeading from "@/components/courseList/PageHeading";
import FooterOne from "@/components/layout/footers/FooterOne";
import QuizList from "@/components/quizList/QuizList";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {ParticipantDataService} from "@/services/participant/ParticipantDataService";
import {headers} from "next/headers";
import CourseDataRemoteRepository from "@/services/quiz/CourseDataRemoteRepository";
import CourseDataRepository from "@/services/quiz/CourseDataRepository";

export const metadata = {
  title: `Quiz Overview | Learn-to-Code`,
  description:
      'Explore a wide range of interactive quizzes at learn-to-code.io. Test your coding skills, reinforce your learning, and track your progress in a fun and engaging way. From beginner to advanced levels, find quizzes for many different areas. Start practicing today and elevate your coding expertise.',
}

const participantDataService = new ParticipantDataService()
const courseDataeRepository: CourseDataRepository = new CourseDataRemoteRepository()

export default async function page() {

  const serverSession = await getServerSession(authOptions)

  if (!serverSession) {
    redirect('/login')
  }

  const participantQuizOverview = await participantDataService.getQuizOverview(serverSession?.user.id!!, headers().get('Cookie')!!)
  const courseResponse = await courseDataeRepository.fetchCourse(headers().get('Cookie')!!)

  return (
      <div className="main-content  ">
        <Preloader/>
        <Header/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
          <PageLinks courseStepTitle={"TODO"} courseTitle={"TODO"}/>
          <PageHeading/>
          <QuizList participantQuizOverview={participantQuizOverview} courseResponse={courseResponse}/>

          <FooterOne/>
        </div>
      </div>
  )
}

