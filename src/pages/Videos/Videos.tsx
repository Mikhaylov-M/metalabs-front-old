'use client'
// import './videos.scss'

// const Videos = () => {
//   return (
//     <>
//       <div className="video">
//         <div className="container">

//           <div className="block">
//             <div className="block__item">
//               <div className="block__title">
//                 TITLE 1
//               </div>
//               <div className="block__text">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis quod voluptatum doloribus saepe aliquam aperiam, quas ea quasi mollitia.
//               </div>
//             </div>
//             <div className="block__item">
//               <div className="block__title">
//                 TITLE 2
//               </div>
//               <div className="block__text">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis quod voluptatum doloribus saepe aliquam aperiam, quas ea quasi mollitia.
//               </div>
//             </div>
//             <div className="block__item">
//               <div className="block__title">
//                 TITLE 3
//               </div>
//               <div className="block__text">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis quod voluptatum doloribus saepe aliquam aperiam, quas ea quasi mollitia.
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }
// export default Videos


import React, { useState } from 'react';
import './videos.scss'

const Videos = () => {
  const numBlocks = 10; // Укажите желаемое количество блоков
  const [openIndex, setOpenIndex] = useState(null); // Инициализация состояния открытого блока

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      <div className="block">
        {Array.from({ length: numBlocks }, (_, index) => (
          <div key={index} className={`block__item ${openIndex === index ? 'open' : ''}`}>
            <div
              className={`block__title ${openIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              TITLE {index + 1}
            </div>
            <div className={`block__video ${openIndex === index ? 'visible' : ''}`}>
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/u31qwQUeGuM?si=lU_JPMT0XpEmCu4K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
