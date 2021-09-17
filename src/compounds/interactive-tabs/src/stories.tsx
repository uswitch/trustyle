/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import { InteractiveTab, InteractiveTabs } from './'

export default {
  title: 'Compounds/InteractiveTabs'
}

const interactiveTab = (imageUrl: string) => (
  <InteractiveTab
    title="Take control of your bills"
    description="Explore energy, broadband, mobile and credit card deals all in one place"
    icon="check"
  >
    <img src={imageUrl} alt="kitten" />
  </InteractiveTab>
)

const titleElement = (
  <h2>
    Get more when you switch{' '}
    <span css={{ color: 'grey' }}>with the Uswitch App</span>
  </h2>
)

export const Example = () => {
  return (
    <InteractiveTabs>
      {interactiveTab('/contentful/kitten200x200-1.jpeg')}
      {interactiveTab('/contentful/kitten200x200-2.jpeg')}
      {interactiveTab('/contentful/kitten200x200-3.jpeg')}
    </InteractiveTabs>
  )
}

export const ExampleWithTitle = () => {
  return (
    <InteractiveTabs titleElement={titleElement}>
      {interactiveTab('/contentful/kitten200x200-1.jpeg')}
      {interactiveTab('/contentful/kitten200x200-2.jpeg')}
      {interactiveTab('/contentful/kitten200x200-3.jpeg')}
    </InteractiveTabs>
  )
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <InteractiveTabs key={i}>
          {interactiveTab('/contentful/kitten200x200-1.jpeg')}
          {interactiveTab('/contentful/kitten200x200-2.jpeg')}
          {interactiveTab('/contentful/kitten200x200-3.jpeg')}
        </InteractiveTabs>
      ))}
    </AllThemes>
  )
}
