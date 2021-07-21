/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import ToolTip from '.'

export default {
  title: 'Elements/Tool Tip'
}

export const ExampleWithKnobs = () => {
  const content = 'This is tool tip content'
  const title = 'This is a tool tip title'
  return (
    <div sx={{ pt: '100px' }}>
      <ToolTip content={content} title={title} />
    </div>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const RadioButtonExample = () => {
  const content = 'This is tool tip content'
  const title = 'This is a tool tip title'
  return (
    <div sx={{ pt: '100px', pl: '300px' }}>
      <ToolTip content={content} title={title} variant={'radio'} />
    </div>
  )
}

RadioButtonExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  const content = 'This is tool tip content'
  const title = 'This is a tool tip title'

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <ToolTip content={content} title={title} key={i} />
      ))}
    </AllThemes>
  )
}
