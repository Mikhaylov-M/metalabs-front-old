import Image from 'next/image'
import Link from 'next/link'

import blackLogo from '../../../../public/images/new-logo-black.svg'
import whiteLogo from '../../../../public/images/new-logo-white.svg'

import './Header.scss'


const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <Link href="/" className="header__logo">
          {/* поменял лого, заполнил alt */}
          <Image
            className="header__black-logo"
            src={blackLogo}
            alt="metalabs logo"
          />
          <Image
            className="header__white-logo"
            src={whiteLogo}
            alt="metalabs logo"
          />
        </Link>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="#courses">Курсы</a>
            </li>
            <li className="header__item">
              <a href="#testimonials">Отзывы</a>
            </li>
            <li className="header__item">
              <a href="#footer">Контакты</a>
            </li>
          </ul>
          {/* Решили что номера будут только в footer
        <div class="header__contacts">
          <a href="tel:+996705311113" class="header__phone">+ 996 705 311 113</a>
          <a href="tel:+996990311113" class="header__phone">+ 996 990 311 113</a>
        </div>
        */}
        </nav>
        <button className="burger">
          <input type="checkbox" id="burger" hidden />
          <label htmlFor="burger" className="burger__lbl">
            <div className="burger__line" />
          </label>
          <nav className="burger__nav">
            <ul className="burger__list">
              <li className="burger__item">
                <a href="#courses">Курсы</a>
              </li>
              {/* <li class="burger__item"><a href="#">Методика</a></li>
                <li class="burger__item"><a href="#">Стоимость</a></li> */}
              <li className="burger__item">
                <a href="#testimonials">Отзывы</a>
              </li>
              <li className="burger__item">
                <a href="#footer">Контакты</a>
              </li>
            </ul>
            <div className="burger__contacts">
              <a href="tel:+996705311113" className="burger__phone">
                + 996 705 311 113
              </a>
              <a href="tel:+996990311113" className="burger__phone">
                + 996 990 311 113
              </a>
            </div>
          </nav>
        </button>
      </div>
    </header>
  )
}

export default Header