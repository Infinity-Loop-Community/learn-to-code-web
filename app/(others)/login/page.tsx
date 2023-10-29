import Preloader from '@/components/common/Preloader'

import AuthImageMove from '@/components/others/AuthImageMove'
import LoginForm from '@/components/others/LoginForm'
import React from 'react'
import {getProviders} from "next-auth/react";
export const metadata = {
  title: 'Login || Learn-to-Code - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Learn-to-Code, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default async function page() {
  const providers = await getProviders();

  return (
    <div className="main-content  ">
      <Preloader/>

        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
              <LoginForm providers={providers}/>
            </section>
           
            
            
        </div>

    </div>
  )
}
