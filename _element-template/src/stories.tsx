/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import MyComponent from './'

export default {
  title: 'Elements|MyComponent'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('Some text', 'example')
  return <MyComponent someText={someText} />
}
