'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.scss'

import vid1 from '@/public/images/t1.mp4'
import vid2 from '@/public/images/t2.mp4'
import vid3 from '@/public/images/t3.mp4'
import vid4 from '@/public/images/t4.mp4'

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section__title testimonials__title">
          Отзывы об авторе курса
        </h2>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          navigation={true}
          mousewheel
          keyboard
          modules={[ Navigation, Keyboard ]}
          className="swiper testimonials__swiper"
          >
          <SwiperSlide className="swiper-slide">
            <div className="student">
              <div className="student__video">
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  src={vid2}
                />
              </div>
              <div className="student__content">
                <h4 className="student__name">Аяна</h4>
                <p className="student__testimonial">
                  “Он очень доброжелательный, всегда старается все понятно
                  объяснить...”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="student">
              <div className="student__video">
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  src={vid3}
                />
              </div>
              <div className="student__content">
                <h4 className="student__name">Карим</h4>
                <p className="student__testimonial">
                  “Как я о нем узнал? Мне его посоветовали, он очень хорошо
                  объясняет...”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="student">
              <div className="student__video">
                <video
                  muted={true}
                  // autoPlay={true}
                  loop={true}
                  src={vid4}
                />
              </div>
              <div className="student__content">
                <h4 className="student__name">Кубаныч</h4>
                <p className="student__testimonial">
                  “За время нашего занятия и общения он начал делиться своим
                  опытом...”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="student">
              <div className="student__video">
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  src={vid1}
                />
              </div>
              <div className="student__content">
                <h4 className="student__name">Али</h4>
                <p className="student__testimonial">
                  “Мне нравится, то как наш ментор проводит обучение, проводит
                  уроки...”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}