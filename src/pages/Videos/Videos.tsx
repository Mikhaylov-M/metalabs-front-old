'use client'

import React, { useState, useRef, useEffect } from 'react';
import './videos.scss';

const Videos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="video">
      <div className="video__container container">
        <div className="video__top video-top">
          <h2 className="video-top__title">
            Title
          </h2>
          <p className="video-top__text">
            Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle
          </p>
          <div className="video-top__wrapper">
            <div className="video-top__video">
            {/* THIS PLACE FOR VIDEO */}
            </div>      
            <div className="video-top__inner">
              <p className="video-top__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video-top__link" href="#">Подробнее</a>
            </div>
          </div>
          <button className="video-top__btn">Оставить заявку</button>
        </div>
        <ul className="video__list">
            <li className="video__card">
              <div className="video__wrapper">
                {/* here will be your teg for video */}
              </div>
              <div className="video__desc-wrapper">
                <p className="video__desc">
                  Знакомство с языком программирования - <a href="#">C#</a>
                </p>
                <a className="video__link" href="#">Подробнее</a>
              </div>
            </li>
            <li className="video__card">
              <div className="video__wrapper">
                {/* here will be your teg for video */}
              </div>
              <div className="video__desc-wrapper">
                <p className="video__desc">
                  Знакомство с языком программирования - <a href="#">C#</a>
                </p>
                <a className="video__link" href="#">Подробнее</a>
              </div>
            </li>
            <li className="video__card">
              <div className="video__wrapper">
                {/* here will be your teg for video */}
              </div>
              <div className="video__desc-wrapper">
                <p className="video__desc">
                  Знакомство с языком программирования - <a href="#">C#</a>
                </p>
                <a className="video__link" href="#">Подробнее</a>
              </div>
            </li>
            <li className="video__card">
              <div className="video__wrapper">
                {/* here will be your teg for video */}
              </div>
              <div className="video__desc-wrapper">
                <p className="video__desc">
                  Знакомство с языком программирования - <a href="#">C#</a>
                </p>
                <a className="video__link" href="#">Подробнее</a>
              </div>
            </li>
            <li className="video__card">
              <div className="video__wrapper">
                {/* here will be your teg for video */}
              </div>
              <div className="video__desc-wrapper">
                <p className="video__desc">
                  Знакомство с языком программирования - <a href="#">C#</a>
                </p>
                <a className="video__link" href="#">Подробнее</a>
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Videos;