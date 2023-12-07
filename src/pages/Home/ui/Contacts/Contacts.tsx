import './Contacts.scss'
import Image from 'next/image'
import contactsBg from '../../../../../public/images/contacts-bg.png'

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__left">
            <h2 className="contacts__sale sales__num">-15</h2>
            <p className="contacts__desc">
              «Научитесь программировать и раскройте свой потенциал —
              присоединяйтесь к нашему курсу программирования сегодня и получите
              скидку!»
            </p>
          </div>
          <div className="contacts__right">
            <form id="reg-form" className="reg-form">
              <h4 className="reg-form__title">
                Оставьте заявку
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
                placeholder="Номер"
                type="tel"
                maxLength={13}
                required
              />
              <button className="reg-form__btn btn-oval sales__oval" type="submit">
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}