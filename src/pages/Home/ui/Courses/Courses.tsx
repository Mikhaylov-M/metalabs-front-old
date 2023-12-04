import Image from 'next/image'
import Link from 'next/link'
import cardBg1 from '../../../../../public/images/card-bg1.png'
import cardBg2 from '../../../../../public/images/card-bg2.png'
import './Courses.scss'

export const Courses = () => {
  return (
    <section className="courses" id="courses">
{/* 
      <div className="container">
        <h2 className="courses__title section__title">Наши курсы</h2>
        <div className="courses__row">
          <div className="courses__card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={1206}
              height={1024}
              viewBox="0 0 1206 1024"
              fill="none"
            >
              <g filter="url(#filter0_f_616_814)">
                <path
                  d="M746.223 523.79C638.662 660.808 544.688 704.271 434.8 680.374C-11.4015 653.055 255.314 395.8 313.8 269.247C345.593 123.052 640.363 101.593 750.25 125.489C896.78 137.066 835.536 372.522 746.223 523.79Z"
                  fill="white"
                  fillOpacity="0.2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_616_814"
                  x="-185.934"
                  y="-250.175"
                  width="1391.57"
                  height="1304.09"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="183.662"
                    result="effect1_foregroundBlur_616_814"
                  />
                </filter>
              </defs>
            </svg>
            <Image
              src={cardBg1}
              alt="card background"
              className="courses__bg"
            />
            <div className="courses__content">
              <h2 className="courses__topic section__title">frontend</h2>
              <p className="courses__desc">
                Создание современного веб-интерфейса с помощью фронтенд-разработки
              </p>
              <span className="courses__skill">
                освоить PHP и JavaScript с нуля
              </span>
              <span className="courses__skill">создавать свои веб-проекты</span>
              <span className="courses__skill">найти стабильную работу</span>
            </div>
            <Link href='/frontend' className="courses__btn sales__oval" id="left-btn">
              Подробнее
            </Link>
          </div>
          <div className="courses__card card-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={1215}
              height={907}
              viewBox="0 0 1215 907"
              fill="none"
            >
              <g filter="url(#filter0_f_615_802)">
                <path
                  d="M924.369 448.886C815.395 566.301 717.125 601.143 599.214 575.502C123.235 533.32 396.769 315.471 453.935 205.384C481.903 76.7759 794.759 69.5416 912.669 95.1831C1069.08 111.349 1013.35 318.079 924.369 448.886Z"
                  fill="#9ACEF4"
                  fillOpacity="0.18"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_615_802"
                  x="0.797058"
                  y="-239.819"
                  width="1333.61"
                  height="1146.41"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="161.569"
                    result="effect1_foregroundBlur_615_802"
                  />
                </filter>
              </defs>
            </svg>
            <Image
              src={cardBg2}
              alt="card background"
              className="courses__bg"
            />
            <div className="courses__content">
              <h2 className="courses__topic-dark section__title">backend</h2>
              <p className="courses__desc-dark">
                Создание современного веб-интерфейса с помощью бэкенд-разработки
              </p>
              <span className="courses__skill-dark">
                освоить PHP и JavaScript с нуля
              </span>
              <span className="courses__skill-dark">
                создавать свои веб-проекты
              </span>
              <span className="courses__skill-dark">найти стабильную работу</span>
            </div>
            <Link href='/backend' className="courses__btn sales__oval" id="right-btn">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
       */}
    </section>
  )
}