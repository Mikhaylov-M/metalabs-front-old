'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
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
              slidesPerView={1}
              navigation={true}
              loop={true}
              mousewheel
              keyboard
              coverflowEffect={{
                rotate: 60,
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
              breakpoints={{
                // Когда ширина экрана больше 768px
                768: {
                  slidesPerView: 3,
                }
              }}
            >
              <SwiperSlide>
                <div className="swiper__img-wrapper">
                  <Image src={azatPhoto} alt='фотография Азата'/>
                </div>
                <h2 className='hero__swiper-name'>Азат</h2>
                <p className='hero__swiper-direction'>ментор пo JavaScript</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__img-wrapper">
                  <Image src={dimaPhoto} alt='фотография Дмитрия'/>
                </div>
                <h2 className='hero__swiper-name'>Дмитрий</h2>
                <p className='hero__swiper-direction'>ментор пo C#</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__img-wrapper">
                  <Image src={alibekPhoto} alt='фотография Алибека'/>
                </div>
                <h2 className='hero__swiper-name'>Алибек</h2>
                <p className='hero__swiper-direction'>ментор пo JavaScript</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__img-wrapper">
                  <Image src={tarielPhoto} alt='фотография Тариэля'/>
                </div>
                <h2 className='hero__swiper-name'>Тариель</h2>
                <p className='hero__swiper-direction'>ментор пo JavaScript </p>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  )
}