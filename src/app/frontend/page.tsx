import { Direction, DirectionContentProps } from '@/src/pages/Direction'
import './frontend.scss'

const Frontend = () => {

  const contentProps: DirectionContentProps = {
    title: 'Frontend',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quibusdam, aut asperiores esse enim accusantium.',
    aboutDesc: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, soluta.']
  }

  return (
    <Direction {...contentProps} />
  )
}

export default Frontend