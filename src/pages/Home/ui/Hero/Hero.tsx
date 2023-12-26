'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper/modules';

import Image from 'next/image'
import azatPhoto from '../../../../../public/images/hero-1.jpg'
import dimaPhoto from '../../../../../public/images/hero-2.jpg'
import tarielPhoto from '../../../../../public/images/hero-3.jpg'
import alibekPhoto from '../../../../../public/images/hero-4.jpg'
import text from '../../../../../public/images/hero-text.png'

import './Hero.scss'
import contentBg from '../../../../../public/images/air.png'
import mentorTest from '@/public/images/azat.jpg'
import frontendImage from '@/public/images/frontend.png'
import jsImage from '@/public/images/JavaScript-logo.png'
import cImage from '@/public/images/c.png'
import htmlImage from '@/public/images/html-logo.png'


export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__text-wrapper"> 
            <Image className='swiper-img' src={text} alt="" />
          </div>
            <h1 className="hero__title">
              Открой новые горизонты в программировании
            </h1>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              navigation={true}
              loop={true}
              mousewheel
              keyboard
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={azatPhoto} alt=''/>
                <h2>Азат</h2>
                <p>ментор пo JS</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={dimaPhoto} alt=''/>
                <h2>Дима</h2>
                <p>ментор пo C#</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={alibekPhoto} alt=''/>
                <h2>Алибек</h2>
                <p>ментор пo JS</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={tarielPhoto} alt=''/>
                <h2>Тариель</h2>
                <p>ментор пo JS</p>
              </SwiperSlide>
            </Swiper>
        </div>

      </div>

      {/* убрал задний фон из html, поставил через css потому что это не контентое изображение */}
    </section>
  )
}