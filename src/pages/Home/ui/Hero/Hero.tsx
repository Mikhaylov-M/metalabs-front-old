import './Hero.scss'
import contentBg from '../../../../../public/images/air.png'
// import contentVideo from '../../../../../public/images/'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">

        <div className="hero__wrapper">
          <div className="hero__content">
            <h4 className="hero__uptitle">Профессия</h4>
            <h1 className="hero__title">
              Frontend <br />
              Web Developer
            </h1>
            <p className="hero__desc">
              Создание современного веб-интерфейса с помощью фронтенд-разработки
            </p>
            <div className="hero__list">
              <p className="hero__item">
                <span>·</span> освоить JavaScript и React с нуля
              </p>
              <p className="hero__item">
                <span>·</span> создавать свои веб-проекты
              </p>
              <p className="hero__item">
                <span>·</span> найти стабильную работу
              </p>
            </div>
            <div className="hero__controll">
              <button className="hero__btn btn-oval btn-enroll">
                Записаться на курс
              </button>
              {/* <button id="test-starter" class="hero__btn btn-oval hero__btn_sunny">Пройти тест</button> */}
            </div>
          </div>
        <div className="hero__laptop">
            <div className="hero__img-laptop">
              <Image src={contentBg} alt="" />
            </div>
            <video className="hero__video" autoPlay>
              {/* <source src={contentVideo} type="video/mp4;" /> */}
            </video>
          </div>
        </div>

      </div>

      {/* убрал задний фон из html, поставил через css потому что это не контентое изображение */}
    </section>
  )
}