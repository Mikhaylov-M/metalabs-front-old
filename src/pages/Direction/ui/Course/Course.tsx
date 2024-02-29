'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './Course.scss'
import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

export interface CourseProps {
  courseBg: string,
  programLeft: string[], programRight: string[],
  scheduleDuration: string[],
  scheduleDays: string[],
  scheduleTime: string[],
  mentorText: string[],
  mentorImg: StaticImageData,
  mentorImgAlt: string
}

const Course:FC<CourseProps> = ({
  courseBg,
  programLeft, programRight,
  scheduleDuration,
  scheduleDays,
  scheduleTime,
  mentorText,
  mentorImg,
  mentorImgAlt,
}) => {
  return (
    <section className="course" id="course">
      <div className="container">
        <Tabs className={`course__grid ${courseBg}`}>
          <TabList className="course__list">
            <Tab className="course__navbutton">Программа курса</Tab>
            <Tab className="course__navbutton">График обучения</Tab>
            <Tab className="course__navbutton">Ментор</Tab>
          </TabList>
            <TabPanel className="tabpanel">
              <div className="program">
                <div className="program__left">
                  {programLeft?.map((el, index) => <p key={index} className="program__text">{el}</p>)}
                </div>
                <div className="program__right">
                  {programRight?.map((el, index) => <p key={index} className="program__text program__text-rigth">{el}</p>)}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div className="schedule">
                <h2 className="schedule__title">Оффлайн / Онлайн</h2>
                <div className="schedule__content">
                  <ul className="schedule__text">
                    <p>Длительность:</p>
                    {scheduleDuration?.map((el, index) => 
                    <li key={index}>{el}</li>)}
                  </ul>
                  <ul className="schedule__text">
                    Дни:
                    {scheduleDays?.map((el, index) => 
                    <li key={index}>{el}</li>)}
                  </ul>
                  <ul className="schedule__text">
                    Время:
                    {scheduleTime?.map((el, index) => 
                    <><br /><span key={index} className="schedule__text-time">{el}</span></>)}
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel">
              <div className="mentor">
                <div className="mentor__desc">
                  {mentorText?.map((el, index) => <p key={index} className="mentor__text">{el}</p> )}
                </div>
                <div className="mentor__photo">
                  <Image src={mentorImg} alt={mentorImgAlt} />
                </div>
              </div>
            </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default Course