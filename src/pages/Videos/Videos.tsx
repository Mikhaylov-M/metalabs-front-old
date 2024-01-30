'use client'

import React, { useState, useRef, useEffect } from 'react';
import './videos.scss';

interface AccordionProps {
  index: number;
  title: string;
  videoId: string;
  openIndex: number;
  setOpenIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Accordion: React.FC<AccordionProps> = ({ index, title, videoId, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0';
    }
  }, [isOpen]);

  const handleToggle = () => {
    setOpenIndex(isOpen ? -1 : index);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion__header" onClick={handleToggle}>
        <h3>{title}</h3>
      </div>
      <div
        ref={contentRef}
        className={`accordion__content ${isOpen ? 'open' : ''}`}
      >
        {isOpen && (
          <div className="accordion__iframe-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
        )}
      </div>
    </div>
  );
};

const Videos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="container">
      <div className="app">
        <Accordion index={0} title="приветствие" videoId="M3AGJUwBH0k" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={1} title="Почему стоит выбрать MetaLabs" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={3} title="Из-за чего выбирают IT" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={4} title="Какие направления в IT актуальны" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={5} title="Сложно ли учиться на программиста" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={6} title="Убедись в качестве преподавания на 3 минуты" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={7} title="Почему стоит доверять нашим менторам" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={8} title="Чем наше обучение отличается от вузов" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={9} title="MetaLabs - это еще и IT компания" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={10} title="Как MetaLabs помогает в трудоустройстве и развитии карьеры" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Accordion index={11} title="У вас остались вопросы?" videoId="u31qwQUeGuM" openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </div>
    </div>
  );
};

export default Videos;