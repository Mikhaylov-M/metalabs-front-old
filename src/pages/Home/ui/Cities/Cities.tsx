import './Cities.scss'

export const Cities = () => {
  return (
    <section className="cities">
{/*       
      <h2 className="section__title cities__title">Не важно где вы живете</h2>
      <p className="cities__desc">
        Учитесь из любой страны, города и в любое время
        <br />
        Развивайте свои профессиональные навыки в удобном онлайн-формате
      </p>
      <div className="cities__lg-slider">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper swiper-container">
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
          </div>
        </div>
      </div>
      <div className="cities__md-slider">
        <div className="swiper mySwiper1">
          <div className="swiper-wrapper swiper-container">
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
          </div>
        </div>
      </div>
      <div className="cities__sm-slider">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper swiper-container">
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
            <div className="swiper-slide">Эр-Рияд</div>
            <div className="swiper-slide">Москва</div>
            <div className="swiper-slide">Стамбул</div>
            <div className="swiper-slide">Бишкек</div>
            <div className="swiper-slide">Сан-Паулу</div>
            <div className="swiper-slide">Ош</div>
            <div className="swiper-slide">Афины</div>
            <div className="swiper-slide">Берн</div>
            <div className="swiper-slide">Брюссель</div>
            <div className="swiper-slide">Варшава</div>
            <div className="swiper-slide">Дублин</div>
            <div className="swiper-slide">Лондон</div>
            <div className="swiper-slide">Минск</div>
            <div className="swiper-slide">Осло</div>
          </div>
        </div>
      </div> */}

    </section>
  )
}