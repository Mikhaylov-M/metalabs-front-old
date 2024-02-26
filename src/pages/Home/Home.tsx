import './home.scss'
import Hero from './ui/Hero/Hero'
import Author from './ui/Author/Author'
import Steps from './ui/Steps/Steps'
import Salary from './ui/Salary/Salary'
import Courses from './ui/Courses/Courses'
import Knowledges from './ui/Knowledges/Knowledges'
import Contacts from '@/src/global/components/Contacts/Contacts'

function Home () {
  return (
    <>
      <Hero />
      <Author />
      <Steps />
      <Salary />
      <Courses />
      <Knowledges />
      <Contacts />
    </>
  )
}
export default Home