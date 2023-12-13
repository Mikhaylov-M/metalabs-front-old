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
import { Contacts } from '@/src/global/components/Contacts'

// import Hero from './ui/Hero'

export const Home = () => {
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
      {/* 
      <About />
       */}
        
      <Testimonials />
      <Knowledges />
      {/* <Cities /> */}
      <Contacts />
    </>
  )
}