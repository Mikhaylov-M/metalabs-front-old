'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Course.scss'
import { FC } from 'react'

export interface CourseProps {
  programLeft: string[], programRight: string[],
  scheduleDuration: string[],
  scheduleDays: string[],
  scheduleTime: string[],
}

export const Course:FC<CourseProps> = ({
  programLeft, programRight,
  scheduleDuration,
  scheduleDays,
  scheduleTime,
}) => {
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
                  {programLeft.map(el => <p className="program__text">{el}</p>)}
                </div>
                <div className="program__right">
                  {programRight.map(el => <p className="program__text program__text-rigth">{el}</p>)}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div className="schedule">
                <h2 className="schedule__title">Оффлайн / Онлайн</h2>
                <div className="schedule__content">
                  <p className="schedule__text">
                    Длительность:
                    {scheduleDuration.map(el => 
                    <><br />el</>)}
                  </p>
                  <p className="schedule__text">
                    Дни:
                    {scheduleDays.map(el => 
                    <><br />el</>)}
                  </p>
                  <p className="schedule__text">
                    Время:
                    {scheduleTime.map(el => 
                    <><br /><span className="schedule__text-time">{el}</span></>)}
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