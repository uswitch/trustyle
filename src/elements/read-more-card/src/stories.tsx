/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import ReadMoreCard from './'

export default {
  title: 'Elements/Read More Card'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('Some text', 'Example')
  const variant: string = select('Variant', ['default', 'cupcard'], 'default')

  return <ReadMoreCard text={someText} href="" variant={variant} />
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
        <ReadMoreCard text="Click here to read more" href="" key={i} />
      ))}
    </AllThemes>
  )
}
