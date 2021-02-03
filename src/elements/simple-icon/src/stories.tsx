/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import SimpleIcon from './'

export default {
  title: 'Elements/Simple Icon'
}

export const ExampleWithKnobs = () => {
  return <SimpleIcon glyph={'book-closed'} color="red" />
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
        <SimpleIcon glyph={'book-closed'} color="red" key={i} />
      ))}
    </AllThemes>
  )
}
