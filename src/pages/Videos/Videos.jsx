'use client'

import { useEffect } from 'react';
import Video from './Video/Video';
import './videos.scss';

const Videos = () => {

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
          <Video videoId={'W3AiplFRCek'} autoplay={1} desc={'Добро пожаловать в MetaLabs'} link={'/#contacts'} />
          <Video videoId={'Vm7LyY6RT1g'} autoplay={0} desc={'Second video'} link={'/#contacts'} />
          <Video videoId={'DrNlnCjMM3s'} autoplay={0} desc={'Third video'} link={'/#contacts'} />
        </ul>
      </div>
    </section>
  )
}

export default Videos;