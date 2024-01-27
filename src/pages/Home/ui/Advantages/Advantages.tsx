import Image from 'next/image'
import './Advantages.scss'
import advantagesFirst from '../../../../../public/images/advantages-1.svg'
import advantagesSecond from '../../../../../public/images/advantages-2.svg'
import advantagesThird from '../../../../../public/images/advantages-3.svg'
import advantagesFourth from '../../../../../public/images/advantages-4.svg'

function Advantages () {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages__container">
          <div className="advantages__block">
            <div className="advantages__icons">
              <Image src={advantagesFirst} alt="" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Старт</h4>
              <p className="advantages__desc">5 декабря</p>
            </div>
          </div>
          <div className="advantages__block ml-50">
            <div className="advantages__icons">
              <Image src={advantagesSecond} alt="" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Формат</h4>
              <p className="advantages__desc">online & offline</p>
            </div>
          </div>
          <div className="advantages__block">
            <div className="advantages__icons">
              <Image src={advantagesThird} alt="" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Длительность</h4>
              <p className="advantages__desc">8 месяцев</p>
            </div>
          </div>
          <div className="advantages__block">
            <div className="advantages__icons">
              <Image src={advantagesFourth} alt="" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Уровень</h4>
              <p className="advantages__desc">С нуля</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages