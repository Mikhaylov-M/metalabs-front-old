'use client'

import { useEffect, useState } from 'react';
import Video from './Video/Video';
import RegForm from '@/src/global/components/Contacts/Form/RegFormClient';
import './videos.scss';

const Videos = () => {

  const [ popup, setPopup ] = useState(false)

  const handleClickPopUp = () => {
    setPopup(prev => !prev)
  }

  useEffect(() => {
    const html = document.querySelector('html')
    if (window.innerWidth < 768) {
      html.style.scrollSnapType = 'y mandatory'
    }
    return () => {
      html.style.scrollSnapType = 'none'
    }
  }, [window.innerWidth])

  return (
    <section className="video">
      <div className="container__container container">
        <ul className="video__list">
          <li className="video__title video__scroll">
            <h2 className="video-top__title">
              MetaLabs Videos
            </h2>
            <p className="video-top__text">
              Серия коротких видеороликов о курсах программирования MetaLabs
            </p>
          </li>
          <Video videoId={'W3AiplFRCek'} autoplay={1} desc={'Добро пожаловать в MetaLabs!'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'7H8KLQKUY88'} autoplay={0} desc={'Почему стоит выбрать MetaLabs?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'F9VFR8l2lm8'} autoplay={0} desc={'Из-за чего выбирают IT?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'Jgq2Gihmbl4'} autoplay={0} desc={'Frontend - MetaLabs'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'QUCclPKpYsg'} autoplay={0} desc={'Backend - MetaLabs'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'dlTIJmf-U_A'} autoplay={0} desc={'UX/UI Design - MetaLabs'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'s_wWMX7p6SI'} autoplay={0} desc={'Сложно ли учиться на программиста?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'t4zKLpKUqWU'} autoplay={0} desc={'Убедись в качестве преподавания - UX/UI'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'wBHd9anvDP8'} autoplay={0} desc={'Убедись в качестве преподавания - Backend'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'5YpLXrmT7ak'} autoplay={0} desc={'Убедись в качестве преподавания - Frontend'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'jvT_4EmXtiY'} autoplay={0} desc={'Почему стоит доверять нашим менторам?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'YMaXEhmTJMI'} autoplay={0} desc={'Чем наше обучение отличается от ВУЗов?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'BdEnGBKZFSE'} autoplay={0} desc={'MetaLabs это еще и IT - компания'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'4OHmkOWN7_Y'} autoplay={0} desc={'Как MetaLabs помогает в трудоустройстве и развитии карьеры'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
          <Video videoId={'xzykf-fd_rQ'} autoplay={0} desc={'У вас остались вопросы?'} link={'/#contacts'} handleClickPopUp={handleClickPopUp} />
        </ul>

        <div className={`video__pop-up pop-up${popup ? ' pop-up-active' : ''}`}>
          <div className="container">
            <div className="pop-up__wrapper">
              <span className="pop-up__cancel" onClick={handleClickPopUp}></span>
              <RegForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Videos;