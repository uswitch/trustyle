/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import MyComponent from './'

export default {
  title: 'Elements/MyComponent'
}

export const ExampleWithKnobs = () => {
  const until: number = new Date('December 17, 2020 03:24:00').getTime()
  return <MyComponent until={until} />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <MyComponent someText="Some text" variant={p.variant} key={i} />
      ))}
    </AllThemes>
  )
}
