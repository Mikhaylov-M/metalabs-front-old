'use client'

import { useEffect } from 'react';
import Video from './Video/Video';
import './videos.scss';

const Videos = () => {

  useEffect(() => {
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    body.style.backgroundColor = 'var(--color-black)'
    if (window.innerWidth < 768) {
      html.style.scrollSnapType = 'y mandatory'
    }
    return () => {
      html.style.scrollSnapType = 'none'
      body.style.backgroundColor = 'var(--color-light)'
    }
  }, [window.innerWidth])

  return (
    <section className="video">
      <div className="container__container container">
        <ul className="video__list">
          <li className="video__title video__scroll">
            <h2 className="video-top__title">
              Приветствуем Вас!
            </h2>
            <p className="video-top__text">
              Здесь находятся короткие ролики, в которых мы разобрали все аспекты обучения в нашей компании Meta Labs!
            </p>
            <p className="video-top__text">
              Мы затронули все спектры - начиная от преподавательского состава и до того, почему мы - Ваш ключ к успешной карьере!
            </p>
            <p className="video-top__text">
              Выбирай интересующую тему и листай видео
            </p>
            <p className="video-top__text">
              Приятного просмотра!
            </p>
          </li>
          <Video videoId={'W3AiplFRCek'} autoplay={1} desc={'Добро пожаловать в MetaLabs!'} link={'/#contacts'} />
          <Video videoId={'7H8KLQKUY88'} autoplay={0} desc={'Почему стоит выбрать MetaLabs?'} link={'/#contacts'} />
          <Video videoId={'F9VFR8l2lm8'} autoplay={0} desc={'Из-за чего выбирают IT?'} link={'/#contacts'} />
          <Video videoId={'Jgq2Gihmbl4'} autoplay={0} desc={'Frontend - MetaLabs'} link={'/#contacts'} />
          <Video videoId={'QUCclPKpYsg'} autoplay={0} desc={'Backend - MetaLabs'} link={'/#contacts'} />
          <Video videoId={'dlTIJmf-U_A'} autoplay={0} desc={'UX/UI Design - MetaLabs'} link={'/#contacts'} />
          <Video videoId={'s_wWMX7p6SI'} autoplay={0} desc={'Сложно ли учиться на программиста?'} link={'/#contacts'} />
          <Video videoId={'t4zKLpKUqWU'} autoplay={0} desc={'Убедись в качестве преподавания - UX/UI'} link={'/#contacts'} />
          <Video videoId={'wBHd9anvDP8'} autoplay={0} desc={'Убедись в качестве преподавания - Backend'} link={'/#contacts'} />
          <Video videoId={'5YpLXrmT7ak'} autoplay={0} desc={'Убедись в качестве преподавания - Frontend'} link={'/#contacts'} />
          <Video videoId={'jvT_4EmXtiY'} autoplay={0} desc={'Почему стоит доверять нашим менторам?'} link={'/#contacts'} />
          <Video videoId={'YMaXEhmTJMI'} autoplay={0} desc={'Чем наше обучение отличается от ВУЗов?'} link={'/#contacts'} />
          <Video videoId={'BdEnGBKZFSE'} autoplay={0} desc={'MetaLabs это еще и IT - компания'} link={'/#contacts'} />
          <Video videoId={'4OHmkOWN7_Y'} autoplay={0} desc={'Как MetaLabs помогает в трудоустройстве и развитии карьеры'} link={'/#contacts'} />
          <Video videoId={'xzykf-fd_rQ'} autoplay={0} desc={'У вас остались вопросы?'} link={'/#contacts'} />
        </ul>
      </div>
    </section>
  )
}

export default Videos;