import './home.scss'
import { Hero } from './ui/Hero'
import { Advantages } from './ui/Advantages'
import { Author } from './ui/Author'
import { Steps } from './ui/Steps'
import { Salary } from './ui/Salary'
import { Courses } from './ui/Courses'
import { About } from './ui/About'
import { Testimonials } from './ui/Testimonials'
import { Knowledges } from './ui/Knowledges'
import { Cities } from './ui/Cities'
import { Contacts } from './ui/Contacts'

// import Hero from './ui/Hero'

export const Home = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Author />
      <Steps />
      <Salary />
      <Courses />
      {/* 
      <About />
       */}
        
      <Testimonials />
      
      <Knowledges />
            
      <Cities />
      
      <Contacts />
    </>
  )
}