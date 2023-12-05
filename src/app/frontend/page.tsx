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
    costPrice: '100 000 сом в день'
  }

  return (
    <Direction {...contentProps} />
  )
}

export default Frontend