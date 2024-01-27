import './Steps.scss'

function Steps () {
  return (
    <section className="steps" id="steps">
      <div className="container">
        <h2 className="section__title steps__title">Курс подойдет вам, если</h2>
        <div className="steps__container">
          <div className="steps__block">
            <h2 className="steps__num">1</h2>
            <p className="steps__desc">
              Хотите сменить профессию и стать веб-разработчиком
            </p>
          </div>
          <div className="steps__block">
            <h2 className="steps__num">2</h2>
            <p className="steps__desc">
              Мечтаете работать удаленно и расти в карьере и зарплате
            </p>
          </div>
          <div className="steps__block">
            <h2 className="steps__num">3</h2>
            <p className="steps__desc">
              Хотите решать интересные задачи, создавать большие и полезные сайты
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Steps