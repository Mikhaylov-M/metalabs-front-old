import { Direction, DirectionContentProps } from '@/src/pages/Direction'

import aboutImg from '@/public/images/abstract-frontend.png'

import './frontend.scss'


const Frontend = () => {

  const contentProps: DirectionContentProps = {
    bannerTitle: 'Frontend',
    bannerDesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quibusdam, aut asperiores esse enim accusantium.',
    aboutTitle: 'Lorem ipsum dolor sit amet.',
    aboutText: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, soluta.'],
    aboutList: ['Lorem, ipsum dolor.', 'Lorem ipsum dolor sit amet.'],
    aboutImg: aboutImg,
    aboutImgAlt: 'frontend abstract',
    benefitsTitle: 'Преимущества курса',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
    course: {
      programLeft: [
        'HTML, CSS, JavaScript:', 'Базовый JavaScript', 'Продвинутый JavaScript'],
      programRight: 
      ['-24 практических занятия', '-Доступ ко всем материалам курса'],
      scheduleDuration: ['8 месяцев', '12 месяцев', '15 лет'],
      scheduleDays: ['Пн/Ср/Пт', 'Пн/Вт/Ср/Чт/Пт/Сб', 'Вс'],
      scheduleTime: ['24/7', '10:00 - 22:00', '17:00 - 17:30']
    },
    costPrice: '100 000 сом в день'
  }

  return (
    <Direction {...contentProps} />
  )
}

export default Frontend