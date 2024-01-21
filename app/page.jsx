// import HomeOne from "@/components/homes/home";
import  Header  from "../components/layout/headers/Header";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../components/homes/heros/HomeHero";

import Categories from "../components/homes/categories/Categories";
import Courses from "../components/homes/courses/Courses";
import TestimonialsOne from "../components/common/TestimonialsOne";
import FeaturesOne from "../components/homes/features/FeaturesOne";
import WhyCourse from "../components/homes/WhyCourse";
import Instructors from "../components/common/Instructors";
import GetApp from "../components/homes/getApp/GetApp";
import Join from "../components/homes/join/Join";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import {redirect} from "next/navigation";

export const metadata = {
  title: 'Learn-to-Code: Expert-Led Software Engineering Education Platform',

  description:
    'Dive into the world of software engineering with Learn to Code. Access key knowledge for free, and explore advanced features with a subscription. Join our community-driven platform, crafted with modern, state-of-the-art AI tools, and led by seasoned experts from top tech companies.',
  
}

export default function HomePage() {
  redirect('/quizzes/')
  return (
    
    <>
    <Preloader/>
    <Header />
    
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
    
      <HomeHero />
      {/*<Brands/>*/}
      <Categories />
      <Courses/>
      <TestimonialsOne/>
      <FeaturesOne/>
      <WhyCourse/>
      <Instructors/>
      <GetApp/>
      {/*<Blog/>*/}
      <Join/>
      <FooterOne/>
      
      
    </div>
  </>
  );
}
