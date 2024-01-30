import Image from 'next/image'
import metaLogo from '../../../../public/images/new-logo-white.svg'
import './Footer.scss'
import Link from 'next/link'

function Footer () {
  return (
    <footer className='footer' id='footer'>
      <div className="footer__container container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__items">
              <h3 className="footer__title">Social</h3>
              <a className="footer__links footer__links-inst" href="#">
                Instagram
              </a>
              <a className="footer__links footer__links-tiktok" href="#">
                TikTok
              </a>
            </li>
            <li className="footer__items">
              <h3 className="footer__title">О нас</h3>
              <a className="footer__links" href="#">
                Об авторе  
              </a>
              <a className="footer__links" href="#courses">
                направления 
              </a>
              <a className="footer__links" href="#">
                Отзывы 
              </a>
              <a className="footer__links" href="#">
                Набор знаний 
              </a>
            </li>
            <li className="footer__items">
              <h3 className="footer__title">Контакты</h3>
              <a className="footer__links footer__links-phone" href="tel:+996705311113">
                + 996 705 311 113
              </a>
              <a className="footer__links footer__links-phone" href="tel:+996990311113">
                + 996 990 311 113
              </a>
              <a className="footer__links footer__links-telegram" href="https://t.me/MetaLabs23" target='_blank'>
                Telegram 
              </a>
              <a className="footer__links footer__links-whatsapp" href="https://wa.me/996705311113" target='_blank'>
                WhatsApp 
              </a>
              <a className="footer__links footer__links-email" href="mailto:metalabs.kg@gmail.com" target='_blank'>
                metalabs.kg@gmail.com 
              </a>
              <a className="footer__links footer__links-address" href="mailto:metalabs.kg@gmail.com" target='_blank'>
                г.Бишкек, ул. Уметалиева 113/Рыскулова 34
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__copy-wrapper container">
          <Link className="footer__logo-wrapper" href="/">
            <Image src={metaLogo} alt="" />
          </Link>
          <p className='footer__copy-text'>
            © 2023 | ОсОО «MetaLabs» | Все права защищены.
            Копирование материалов запрещено.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer