'use client'

import React, { useState, useRef, useEffect } from 'react';
import './videos.scss';
import Link from 'next/link';

const Videos: React.FC = () => {

  return (
    <section className="video container">
      <ul className="video__list">
        <li className="video__title video__scroll">
          <h2 className="video-top__title">
            This is Video Page
          </h2>
          <p className="video-top__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus accusantium adipisci laudantium culpa rerum, earum odio doloremque asperiores ea autem facilis dolor amet delectus aliquid velit sunt. Fugiat, labore? Tenetur, maxime ea est nihil sint mollitia in fuga cupiditate neque unde nemo id consequuntur perferendis saepe accusamus eum natus.
          </p>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
        <li className="video__card video__scroll">
          <div className="video__wrapper">
          </div>
          <div className="video__card-desc">
            <div className="video__desc-wrapper">
              <p className="video__desc">
                Знакомство с языком программирования - <a href="#">C#</a>
              </p>
              <a className="video__link" href="#">Подробнее</a>
            </div>
            <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Videos;