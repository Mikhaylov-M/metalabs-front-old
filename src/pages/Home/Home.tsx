import './home.scss'
import Hero from './ui/Hero/Hero'
import Advantages from './ui/Advantages/Advantages'
import Author from './ui/Author/Author'
import Steps from './ui/Steps/Steps'
import Salary from './ui/Salary/Salary'
import Courses from './ui/Courses/Courses'
import About from './ui/About/About'
import Testimonials from './ui/Testimonials/Testimonials'
import Knowledges from './ui/Knowledges/Knowledges'
import Cities from './ui/Cities/Cities'
import Contacts from '@/src/global/components/Contacts/Contacts'
import { Wix_Madefor_Display } from 'next/font/google'

// import Hero from './ui/Hero'

function Home () {
  return (
    <>

    <div className="social">
      <a className="social__links social__links-telegram" href="https://t.me/MetaLabs23" target='_blank'></a>
      <a className="social__links social__links-whatsapp" href="https://wa.me/996705311113" target='_blank'></a>
    </div>

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