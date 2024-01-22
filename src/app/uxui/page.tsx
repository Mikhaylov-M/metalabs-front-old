import { Direction, DirectionContentProps } from '@/src/pages/Direction'
import './uxui.scss'

import aboutImg from '@/public/images/uxui-phone.png'
import mentorImg from '@/public/images/hero-2.jpg'

const UXUI = () => {

  const contentProps: DirectionContentProps = {
    bannerTitle: 'UX/UI',
    bannerDesc: 'Вы научитесь верстать сайты на HTML и CSS, изучите JavaScript. Сможете разрабатывать на PHP серверную часть сайта — и сделаете первые проекты для портфолио.',
    aboutTitle: 'Чем занимаются UX/UI дизайнеры',
    aboutText: ['UX/UI дизайнеры занимаются проектированием пользовательского интерфейса (UI) и опыта пользователя (UX) для цифровых продуктов, таких как веб-сайты, мобильные приложения, программное обеспечение и другие интерактивные системы', 'Начинающий UX/UI дизайнер: Месячная зарплата может варьироваться от 20,000 до 40,000 сомов.', 'Средний UX/UI дизайнер (2-5 лет опыта): Зарплата может составлять примерно от 40,000 до 70,000 сомов в месяц.', 'Опытный UX/UI дизайнер (более 5 лет опыта): Опытные специалисты могут ожидать зарплату в пределах 70,000 сомов и выше в месяц, в зависимости от опыта и навыков.'],
    aboutList: [],
    aboutImg: aboutImg,
    aboutImgAlt: 'frontend abstract',
    benefitsTitle: 'Почему UX/UI дизайн ?',
    benefitsText1: 'Низкий порог входа в профессию',
    benefitsText2: 'Широкий выбор вакансий',
    benefitsText3: 'Высокая оплата труда',
    skills: ['Figma', 'UX', 'Bechans', 'UI', 'UX Research', 'Design System', 'Userflow', 'Auto layout', 'WACAG'],
    course: {
      programLeft: [
        'UX Аналитика', 'UI Дизайн', 'Создание Userflow', 'UX Research', 'WACAG Руководство', 'Цвет и Шрифт'],
      programRight: 
      ['- 24 практических занятия', '- Доступ ко всем материалам курса ', '- Общий чат с участниками курса', '- Промежуточное тестирование', '- Проверка домашних заданий', '- Сертификат об окончании курса'],
      scheduleDuration: ['2 месяцa'],
      scheduleDays: ['Пн / Ср / Пт'],
      scheduleTime: ['17:00 - 18:30'],
      mentorText: ['Меня зовут Диаз я являюсь UX/UI дизайнером с опытом более трех лет , работал во множестве местных и зарубежных компаний таких как “Codify” , “League Design Agency” , “MITI”, “SHOP WALLET” , “ISOFT”', 'Правильно и интересно доношу информацию Получаю удовольствие от менторства и успехов студентов', 'Выпустил и трудоустроил более 100 студентов в местные и зарубежные компании'],
      mentorImg: mentorImg,
      mentorImgAlt: 'фотография ментора Диаз',
    },
    costPrice: '15 000 сом в месяц'
  }

  return (
    <>
      <Direction {...contentProps} />
    </>
  )
}

export default UXUI