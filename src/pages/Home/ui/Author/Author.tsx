import Image from 'next/image'
// import azatPhoto from '../../../../../public/images/azat.jpg'
import azatFirst from '../../../../../public/images/azat-1.jpg'
import azatSecond from '../../../../../public/images/azat-2.jpg'
import azatThird from '../../../../../public/images/azat-3.jpeg'
import './Author.scss'

export const Author = () => {
  return (
    <section className="author" id="author">
      <div className="container">
        <div className="author__top">
          <div className="author__content">
            <h2 className="section__title author__title">Об авторе курса</h2>
            <p className="author__desc">
              Меня зовут Азат Байсынов, я являюсь автором курса MetaLabs. Мой опыт в программировании более 3х лет и я хочу поделиться теми практическими знаниями, которые систематизировал в этом курсе для Вас. 
              <br />
              <br />
              Мои студенты трудоустроились, как в
              кыргызские компании, так и в зарубежные.
            </p>
          </div>
          <div className="author__images">
              {/* <Image src={azatPhoto} alt="фотография ментора Азата" /> */}
            <div className="author__img author__img--first">
              <Image src={azatFirst} alt="фотография ментора Азата" />
            </div>
            <div className="author__img author__img--second">
              <Image src={azatSecond} alt="фотография ментора Азата" />
            </div>
            <div className="author__img author__img--third">
              <Image src={azatThird} alt="фотография ментора Азата" />
            </div>
          </div>
        </div>

        <div className="author__bottom">
          <div className="author__block">
            <h4 className="author__sm-title">Опыт работы</h4>
            <p className="author__sm-desc">Китайская компания Richfit</p>
            <p className="author__sm-desc">Американский стартап</p>
            <p className="author__sm-desc">Банк Компаньон</p>
          </div>
          <div className="author__block">
            <h4 className="author__sm-title">Опыт преподавания</h4>
            <p className="author__sm-desc">
            Опыт преподавания более 2 лет
            </p>
            <p className="author__sm-desc">
            Выпустил 100+ учеников
            </p>
          </div>
          <div className="author__block">
            <h4 className="author__sm-title">Направления</h4>
            <p className="author__sm-desc">Frontend</p>
            <p className="author__sm-desc">Backend</p>
            <p className="author__sm-desc">Freelance</p>
          </div>
        </div>

      </div>
    </section>
  )
}