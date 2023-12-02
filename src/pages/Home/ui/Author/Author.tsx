import Image from 'next/image'
import azatPhoto from '../../../../../public/images/azat.jpg'
import './Author.scss'

export const Author = () => {
  return (
    <section className="author" id="author">
      <div className="container">
        <div className="author__top">
          <div className="author__content">
            <h2 className="section__title author__title">Об авторе курса</h2>
            <p className="author__desc">
              Меня зовут Азат, я являюсь автором курса Meta School. Мой опыт в
              программировании более 3х лет, работал в американском стартапе,
              китайской компании Richfit, а также в банке веб-разработчиком.
              <br />
              <br />
              Выпустил более 100+ учеников. Мои студенты трудоустроились, как в
              кыргызские компании, так и в зарубежные.
            </p>
          </div>
          <div className="author__img">
            <Image src={azatPhoto} alt="фотография ментора Азата" />
          </div>
        </div>
        <div className="author__bottom">
          <div className="author__block">
            <h4 className="author__sm-title">Опыт работы</h4>
            <p className="author__sm-desc">-Китайская компания Ричфит</p>
            <p className="author__sm-desc">-Американский стартап</p>
            <p className="author__sm-desc">-Банк Компаньон</p>
          </div>
          <div className="author__block">
            <h4 className="author__sm-title">Опыт преподавания</h4>
            <p className="author__sm-desc">
              - Обучаю 2 года в двух разных IT школах
            </p>
            <p className="author__sm-desc">
              -Преподавал по методике Американского bootcamp колледжа
            </p>
          </div>
          <div className="author__block">
            <h4 className="author__sm-title">Направления</h4>
            <p className="author__sm-desc">-Frontend</p>
            <p className="author__sm-desc">-Backend</p>
            <p className="author__sm-desc">-Freelance</p>
          </div>
        </div>
      </div>
    </section>
  )
}