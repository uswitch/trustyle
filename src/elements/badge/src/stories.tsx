/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import Badge from '.'

export default {
  title: 'Elements|Badge'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('Some text', 'example')
  return <Badge someText={someText} />
}
