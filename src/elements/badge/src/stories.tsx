/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import Badge from '.'

export default {
  title: 'Elements|Badge'
}

export const ExampleWithKnobs = () => {
  const content: string = text('content', 'Optional Badge')
  return <Badge>{content}</Badge>
}
