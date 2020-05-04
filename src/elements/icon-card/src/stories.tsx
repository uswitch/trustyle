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
    'simple icon card with title, image and description'
  )

  const orientation = select('orientation', ['left', 'top'], 'left')

  const imgSrc = `https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg`
  const imgAlt = 'Picture of kitten.'

  return (
    <IconCard
      title={title}
      description={description}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      orientation={orientation}
    />
  )
}
