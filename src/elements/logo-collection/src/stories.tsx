/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import LogoCollection from '.'

export default {
  title: 'Elements/Logo Collection'
}

const images = [
  <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" key="kitten1" />,
  <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" key="kitten2" />,
  <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" key="kitten3" />
]

export const ExampleWithLogos = () => {
  return <LogoCollection logoImage={images} />
}

ExampleWithLogos.story = {
  parameters: {
    percy: { skip: true }
  }
}

const largeLogoImages = Array(5)
  .fill(null)
  .map((_el, i) => (
    <img
      src="/contentful/kitten200x200-9.jpeg"
      alt="Salman"
      key={`kitten-${i}`}
    />
  ))

export const LargeLogosVariant = () => (
  <LogoCollection logoImage={largeLogoImages} variant="large" />
)

LargeLogosVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}
