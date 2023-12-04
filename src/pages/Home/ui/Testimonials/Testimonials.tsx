'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Testimonials.scss'

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section__title testimonials__title">
          Отзывы об авторе курса
        </h2>
        <Swiper className="swiper testimonials__swiper">
          {/* <div className="swiper-wrapper"> */}
            <SwiperSlide className="swiper-slide">
              <div className="student">
                <div className="student__video">
                  <video
                    muted
                    autoPlay
                    loop
                    src="./assets/images/t2.mp4"
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
                    muted
                    autoPlay
                    loop
                    src="./assets/images/t3.mp4"
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
                    muted
                    autoPlay
                    loop
                    src="./assets/images/t4.mp4"
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
                    muted
                    autoPlay
                    loop
                    src="./assets/images/t1.mp4"
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
          {/* </div> */}
          {/* <div className="swiper-pagination" /> */}
        </Swiper>
      </div>
    </section>
  )
}