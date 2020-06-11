/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import SlideReveal from './'

export default {
  title: 'Elements|Slide Reveal'
}

export const ExampleWithKnobs = () => {
  const isOpen = boolean('Open?', true)
  return (
    <SlideReveal open={isOpen}>
      <p sx={{ marginTop: 0 }}>test content</p>
      <p>test content</p>
      <p>test content</p>
      <p>test content</p>
      <img
        src="https://placekitten.com/408/287?image=5"
        sx={{ maxWidth: '100%' }}
      />
    </SlideReveal>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    open: [true, false]
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <SlideReveal open={p.open} key={i}>
          {open ? 'This should appear' : 'This should not appear'}
        </SlideReveal>
      ))}
    </AllThemes>
  )
}
