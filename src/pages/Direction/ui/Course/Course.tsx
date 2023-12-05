'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Course.scss'

export const Course = () => {
  return (
    <section className="course" id="course">
      <div className="container">
        <Tabs className="course__grid">
          <TabList className="course__list">
            <Tab className="course__navbutton">Программа курса</Tab>
            <Tab className="course__navbutton">График обучения</Tab>
            <Tab className="course__navbutton">Ментор</Tab>
          </TabList>
            <TabPanel className="tabpanel">
              <div className="program">
                <div className="program__left">
                  <p className="program__text">HTML, CSS, JavaScript:</p>
                  <p className="program__text">Базовый JavaScript</p>
                  <p className="program__text">Продвинутый JavaScript</p>
                  <p className="program__text">Подтема</p>
                  <p className="program__text">Подтема</p>
                  <p className="program__text">Подтема</p>
                </div>
                <div className="program__right">
                  <p className="program__text program__text-rigth">
                    -24 практических занятия
                  </p>
                  <p className="program__text program__text-rigth">
                    -Доступ ко всем материалам курса{" "}
                  </p>
                  <p className="program__text program__text-rigth">
                    -Общий чат с участниками курса
                  </p>
                  <p className="program__text program__text-rigth">
                    -Промежуточное тестирование
                  </p>
                  <p className="program__text program__text-rigth">
                    -Проверка домашних заданий
                  </p>
                  <p className="program__text program__text-rigth">
                    -Сертификат об окончании курса
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div className="schedule">
                <h2 className="schedule__title">Оффлайн / Онлайн</h2>
                <div className="schedule__content">
                  <p className="schedule__text">
                    Длительность: <br />6 месяцев
                  </p>
                  <p className="schedule__text">
                    Дни:
                    <br /> Пн/Ср/Пт
                  </p>
                  <p className="schedule__text">
                    Время:
                    <br />{" "}
                    <span className="schedule__text-time">19:00-21:00</span>
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div className="mentor">
                <div className="mentor__desc">
                  <p className="mentor__text">
                    Меня зовут Азат, я являюсь автором курса Meta School. Мой опыт
                    в программировании более 3х лет, работал в американском
                    стартапе, китайской компании Richfit, а также в банке веб
                    разработчиком.
                  </p>
                  <p className="mentor__text">
                    Выпустил более 100+ учеников. Мои студенты трудоустроились,
                    как в кыргызские компании, так и в зарубежные.
                  </p>
                </div>
                <div className="mentor__photo">
                  <img src="./assets/images/azat.jpg" alt="azat mentor photo" />
                </div>
              </div>
            </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}