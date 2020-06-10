/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import LogoCollection from '.'

export default {
  title: 'Elements|Logo Collection'
}

const images = [
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten1"
  />,
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten2"
  />,
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten3"
  />
]

export const ExampleWithKnobs = () => {
  return <LogoCollection logoImage={images} />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}
