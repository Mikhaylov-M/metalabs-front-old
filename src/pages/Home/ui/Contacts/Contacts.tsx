import './Contacts.scss'

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__left">
            <h2 className="contacts__sale sales__num">-15</h2>
            <p className="contacts__desc">
              Не знаешь программирование твоё или нет? Тогда приходи на бесплатное пробное занятие!
            </p>
          </div>
          <div className="contacts__right">
            <form id="reg-form" className="reg-form">
              <h4 className="reg-form__title">
                <span className="reg-form__title reg-form__title-bold">Оставьте заявку</span>
                <br />и мы обязательно свяжемся с Вами
              </h4>
              <input
                className="reg-form__inp"
                id="reg-form-name"
                placeholder="Имя"
                type="text"
                required
              />
              <input
                className="reg-form__inp"
                id="reg-form-phone"
                placeholder="+996"
                type="tel"
                maxLength={13}
                required
              />
              <button className="reg-form__btn" type="submit">
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}