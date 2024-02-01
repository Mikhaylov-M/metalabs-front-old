import type { Metadata } from 'next'
import { FacebookPixel } from '@/src/global/components/FacebookPixel'
import { Inter, Raleway, Nunito, Prosto_One, Rubik } from 'next/font/google'
import Header from '../global/components/Header/Header'
import Footer from '../global/components/Footer/Footer'
import Social from '../global/components/Social/Social'

import '../global/styles/_reset.scss'
import '../global/styles/globals.scss'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: '500',
  display: 'swap',
  variable: '--font-inter'
})

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-raleway'
})

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-nunito'
})
const prostoOne = Prosto_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
  variable: '--font-prosto-one'
})
const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: '600',
  display: 'swap',
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'MetaLabs - Твой путь к успеху',
  description: 'Курсы программирования в Бишкеке. Обучения с нуля. Гарантированное трудоустройство и полная подготовка к собеседованию'
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={`
    ${inter.variable} 
    ${raleway.variable}
    ${nunito.variable}
    ${prostoOne.variable}
    ${rubik.variable}
    `}>
      <body>
        <Header />
        <Social />
        {children}
        <FacebookPixel />
        <Footer />
      </body>
    </html>
  )
}