import { Direction, DirectionContentProps } from '@/src/pages/Direction'

import aboutImg from '@/public/images/abstract-frontend.png'
import mentorImg from '@/public/images/azat.jpg'

import './frontend.scss'

const contentProps: DirectionContentProps = {
  bannerTitle: 'Frontend',
  bannerDesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quibusdam, aut asperiores esse enim accusantium.',
  aboutTitle: 'Lorem ipsum dolor sit amet.',
  aboutText: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, soluta.'],
  aboutList: ['Lorem, ipsum dolor.', 'Lorem ipsum dolor sit amet.'],
  aboutImg: aboutImg,
  aboutImgAlt: 'frontend abstract',
  benefitsTitle: 'Преимущества курса',
  benefitsText1: "Lorem, ipsum dolor.",
  benefitsText2: 'test test tets tet',
  benefitsText3: 'Lorem ipsum dolor sit amet',
  skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
  course: {
    programLeft: [
      'HTML, CSS, JavaScript:', 'Базовый JavaScript', 'Продвинутый JavaScript'],
    programRight: 
    ['-24 практических занятия', '-Доступ ко всем материалам курса'],
    scheduleDuration: ['8 месяцев', '12 месяцев', '15 лет'],
    scheduleDays: ['Пн/Ср/Пт', 'Пн/Вт/Ср/Чт/Пт/Сб', 'Вс'],
    scheduleTime: ['24/7', '10:00 - 22:00', '17:00 - 17:30'],
    mentorText: ['Меня зовут Дима и я являюсь разработчиком и менеджером с более, чем 3.5 годами опыта работы как в местных компаниях "Blast Maker", "TimelySoft", "Salyk Service", так и в международных с заказчиками из США "EPAM" и "Akvelon"', 'Получаю удовольствие от преподавания и поэтому уроки всегда на высшем уровне 🔝', 'Выпустил в районе 50 учеников, которые трудоустроились как в кыргызские, так и зарубежные'],
    mentorImg: mentorImg,
    mentorImgAlt: 'Фотография Ментора Азата'
  },
  costPrice: '100 000 сом в день'
}

const Frontend = () => {

  return (
    <Direction {...contentProps} />
  )
}

export default Frontend