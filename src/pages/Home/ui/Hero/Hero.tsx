'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
              Учись у лучших!
            </h1>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              // spaceBetween={0}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <Image className='swiper-img' src={azatPhoto} alt="фотография ментора Азата" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image className='swiper-img' src={dimaPhoto} alt="фотография ментора Азата" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image className='swiper-img' src={tarielPhoto} alt="фотография ментора Азата" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image className='swiper-img' src={alibekPhoto} alt="фотография ментора Азата" />
              </SwiperSlide>
            </Swiper>
        </div>

      </div>

      {/* убрал задний фон из html, поставил через css потому что это не контентое изображение */}
    </section>
  )
}