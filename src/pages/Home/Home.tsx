import './home.scss'
import Hero from './ui/Hero/Hero'
import Advantages from './ui/Advantages/Advantages'
import Author from './ui/Author/Author'
import Steps from './ui/Steps/Steps'
import Salary from './ui/Salary/Salary'
import Courses from './ui/Courses/Courses'
import About from './ui/About/About'
// import Testimonials from './ui/Testimonials/Testimonials'
import Knowledges from './ui/Knowledges/Knowledges'
import Cities from './ui/Cities/Cities'
import Contacts from '@/src/global/components/Contacts/Contacts'

// import Hero from './ui/Hero'

function Home () {
  return (
    <>
      <Hero />
      <Advantages />
      <Author />
      <Steps />
      <Salary />
      <Courses />
      {/* <About />  */}
      {/* <Testimonials />  */}
      <Knowledges />
      {/*  <Cities />  */}
      <Contacts />
    </>
  )
}
export default Home