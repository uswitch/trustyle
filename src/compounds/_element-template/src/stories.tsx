/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Test from './'

export default {
  title: 'Elements/Test'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('Some text', 'example')
  return <Test someText={someText} />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Test someText="Some text" />
    </AllThemes>
  )
}
