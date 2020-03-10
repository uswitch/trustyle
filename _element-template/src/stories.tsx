/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import MyComponent from './'

export default {
  title: 'Elements|MyComponent'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('Some text', 'example')
  return <MyComponent someText={someText} />
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    someText: ['Text one', 'Text two']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <MyComponent someText={p.someText} key={i} />
      ))}
    </AllThemes>
  )
}
