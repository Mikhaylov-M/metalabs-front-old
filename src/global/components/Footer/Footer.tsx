'use client'

import Image from 'next/image'
import metaLogo from '../../../../public/images/new-logo-white.svg'
import './Footer.scss'
import Link from 'next/link'
import * as pixel from "@/src/lib/fpixel";

function Footer () {
  return (
    <footer className='footer' id='footer'>
      <div className="footer__container container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__items">
              <h3 className="footer__title">Social</h3>
              <a className="footer__links footer__links-inst" href="https://www.instagram.com/metalabs.kg?igsh=bmFkczV5NjV2Zzhw&utm_source=qr">
                Instagram
              </a>
              <a className="footer__links footer__links-tiktok" href="https://www.tiktok.com/@metalabs.kg">
                TikTok
              </a>
            </li>
            <li className="footer__items">
              <h3 className="footer__title">О нас</h3>
              <Link className="footer__links" href="/#author">
                Об авторе  
              </Link>
              <Link className="footer__links" href="/#courses">
                направления 
              </Link>
              <Link className="footer__links" href="/#knowledges">
                Набор знаний 
              </Link>
            </li>
            <li className="footer__items">
              <h3 className="footer__title">Контакты</h3>
              <a 
                className="footer__links footer__links-phone"
                href="tel:+996705311113"
                onClick={() =>
                {pixel.event('Contact', {contact_form: 'phone'})}}
                >
                + 996 705 311 113
              </a>
              <a 
                className="footer__links footer__links-phone"
                href="tel:+996990311113"
                onClick={() => 
                  {pixel.event('Contact', {contact_form: 'phone'})}}
              >
                + 996 990 311 113
              </a>
              <a 
                className="footer__links footer__links-telegram"
                href="https://t.me/MetaLabs23"
                target='_blank'
                onClick={() => 
                  {pixel.event('Contact', {contact_form: 'telegram'})}}
              >
                Telegram 
              </a>
              <a
                className="footer__links footer__links-whatsapp"
                href="https://wa.me/996705311113"
                target='_blank'
                onClick={() => 
                  {pixel.event('Contact', {contact_form: 'whatsapp'})}}
              >
                WhatsApp 
              </a>
              <a
                className="footer__links footer__links-email" href="mailto:metalabs.kg@gmail.com"
                target='_blank'
                onClick={() =>
                  {pixel.event('Contact', {contact_form: 'email'})}}
              >
                metalabs.kg@gmail.com 
              </a>
              <a 
                className="footer__links footer__links-address"
                href="https://go.2gis.com/vm71g"
                target='_blank'
                onClick={() => {pixel.event('FindLocation')}}>
                г.Бишкек, ул. Уметалиева 113/Рыскулова 34
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__copy-wrapper container">
          <Link className="footer__logo-wrapper" href="/">
            <Image src={metaLogo} alt="metalabs logo" />
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