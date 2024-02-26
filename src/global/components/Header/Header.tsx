'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import blackLogo from '@/public/images/new-logo-black.svg'
import whiteLogo from '@/public/images/new-logo-white.svg'
import './Header.scss'

function Header () {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const url = usePathname()

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    if (e.target.checked === true) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
      document.body.style.overscrollBehavior = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
      document.body.style.overscrollBehavior = ''
    }
  }

  const offBurger = () => {
    setIsChecked(false)
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    document.body.style.overscrollBehavior = '';
  }

  return (
    <header className="header" id="header">
      <div className="container">
        <Link href="/" className="header__logo">
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
          {url === '/' ?
            <ul className="header__list">
              <li className="header__item">
                <a href="#courses">Направления</a>
              </li>
              <li className="header__item">
                <a href="#contacts">Записаться</a>
              </li>
              <li className="header__item">
                <a href="#footer">Контакты</a>
              </li>
            </ul>
          :
            <ul className="header__list">
              <li className="header__item">
                <a href="#course">О курсе</a>
              </li>
              <li className="header__item">
                <a href="#cost">Стоимость</a>
              </li>
              <li className="header__item">
                <a href="#footer">Контакты</a>
              </li>
            </ul>
          }
        </nav>
        <button className="burger">
          <input type="checkbox" id="burger" hidden 
          onChange={handleCheckbox} checked={isChecked} />
          <label htmlFor="burger" className="burger__lbl">
            <div className="burger__line" />
          </label>
          <nav className="burger__nav">
            {url === '/' ?
              <ul className="burger__list">
                <li className="burger__item">
                  <a href="#courses" onClick={offBurger}>Направления</a>
                </li>
                <li className="burger__item">
                  <a href="#contacts" onClick={offBurger}>Записаться</a>
                </li>
                <li className="burger__item">
                  <a href="#footer" onClick={offBurger}>Контакты</a>
                </li>
              </ul>
              :
              <ul className="burger__list">
                <li className="burger__item">
                  <a href="#course" onClick={offBurger}>О курсе</a>
                </li>
                <li className="burger__item">
                  <a href="#cost" onClick={offBurger}>Стоимость</a>
                </li>
                <li className="burger__item">
                  <a href="#footer" onClick={offBurger}>Контакты</a>
                </li>
              </ul>
            }
            <div className="burger__contacts">
              <a href="tel:+996705311113" className="burger__phone">
                + 996 705 311 113
              </a>
              <a href="tel:+996990311113" className="burger__phone">
                + 996 990 311 113
              </a>
            </div>
          </nav>
          <div className="burger__div" onClick={offBurger}></div>
        </button>
      </div>
    </header>
  )
}

export default Header