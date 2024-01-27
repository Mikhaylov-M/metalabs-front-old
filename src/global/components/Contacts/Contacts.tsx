import './Contacts.scss'
import RegForm from './Form/RegFormClient'

function Contacts () {
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
            <RegForm />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts