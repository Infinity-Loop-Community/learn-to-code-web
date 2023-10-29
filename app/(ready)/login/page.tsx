import Preloader from '@/components/common/Preloader'

import AuthImageMove from '@/components/others/AuthImageMove'
import LoginForm from '@/components/others/LoginForm'
import React from 'react'
import {getProviders} from "next-auth/react";

export const metadata = {
  title: 'Login to Access Expert Software Engineering Content | Learn-to-Code',
  description:
      'Sign in to your Learn to Code account and unlock a treasure trove of software engineering knowledge. From foundational concepts to advanced AI-based tools, step into a world led by industry veterans from premier tech companies.',
}

export default async function page() {
  const providers = await getProviders();

  return (
      <div className="main-content  ">
        <Preloader/>

        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <section className="form-page js-mouse-move-container">
            <AuthImageMove/>
            <LoginForm providers={providers}/>
          </section>

        </div>

      </div>
  )
}
