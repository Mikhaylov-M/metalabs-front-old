import Image from 'next/image'
import './Hero.scss'
import contentBg from '../../../../../public/images/air.png'
import mentorTest from '@/public/images/azat.jpg'
import frontendImage from '@/public/images/frontend.png'
import jsImage from '@/public/images/JavaScript-logo.png'
import cImage from '@/public/images/c.png'
import htmlImage from '@/public/images/html-logo.png'


export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">

        <div className="hero__wrapper">
            <h1 className="hero__title">
              Учись у лучших!
            </h1>
            <p className="hero__desc">
              Курсы програмирования по направлениям:
            </p>
            <div className="hero__cards">
              <div className="card">
                <div className="card__photo">
                  <Image src={mentorTest} alt='фото ментора Азат' />
                </div>
                <h3 className="card__name">Азат Байсынов</h3>
                <h4 className="card__desc">Frontend, JavaScript</h4>
              </div>
              <div className="card">
                <div className="card__photo">
                  <Image src={mentorTest} alt='фото ментора Азат' />
                </div>
                <h3 className="card__name">Азат Байсынов</h3>
                <h4 className="card__desc">Backend, C#</h4>
              </div>
              <div className="card">
                <div className="card__photo">
                  <Image src={mentorTest} alt='фото ментора Азат' />
                </div>
                <h3 className="card__name">Азат Байсынов</h3>
                <h4 className="card__desc">Project Management</h4>
              </div>
              <div className="card">
                <div className="card__photo">
                  <Image src={mentorTest} alt='фото ментора Азат' />
                </div>
                <h3 className="card__name">Азат Байсынов</h3>
                <h4 className="card__desc">Motion Design</h4>
              </div>
            </div>
            <ul className="hero__list">
              <li className="hero__item">
                <Image src={jsImage} alt='javascript css html logos'/>
              </li>
              <p className="hero__item">
                <Image src={cImage} alt='javascript css html logos'/>
              </p>
              <p className="hero__item">
                <Image src={htmlImage} alt='javascript css html logos'/>
              </p>
              <p className="hero__item">
                <Image src={cImage} alt='javascript css html logos'/>
              </p>
            </ul>
          
          {/* <div className="hero__laptop">
            <div className="hero__img-laptop">
              <Image src={contentBg} alt="" />
            </div>
            <video className="hero__video" autoPlay>
              <source src={contentVideo} type="video/mp4;" />
            </video>
          </div> */}
        </div>

      </div>

      {/* убрал задний фон из html, поставил через css потому что это не контентое изображение */}
    </section>
  )
}