/** @jsx jsx */
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'

import IconCard from './'

export default {
  title: 'Elements|Icon Card'
}

export const ExampleWithKnobs = () => {
  const title = text('Card Title', 'This is a title')
  const description = text(
    'Card description',
    'simple icon card with title, image and descripton'
  )
  const icon = select('Icon', ['Tick', 'Tv', 'Smile', 'Receipt'], 'Tick')
  const orientation = select('orientation', ['left', 'top'], 'left')

  const imgAlt = 'image description goes here.'

  return (
    <IconCard
      title={title}
      description={description}
      imgSrc={require(`../../../../static/energy-homepage-icons/${icon}.svg`)}
      imgAlt={imgAlt}
      orientation={orientation}
    />
  )
}
