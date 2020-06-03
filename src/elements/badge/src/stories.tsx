/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Badge from '.'

export default {
  title: 'Elements|Badge'
}

export const ExampleWithKnobs = () => {
  const content: string = text('content', 'Optional Badge')
  return (
    <div>
      <Badge>{content}</Badge>
      <Badge variant="inverse">{content}</Badge>
    </div>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <Badge sx={{ marginRight: 'sm' }}>Optional badge</Badge>
      <Badge variant="inverse">Optional inverse badge</Badge>
    </AllThemes>
  )
}
