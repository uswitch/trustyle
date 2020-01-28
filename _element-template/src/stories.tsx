/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import MyComponent from './'

storiesOf('Elements|MyComponent', module).add('Example with knobs', () => {
  const someText = text('Some text', 'example')
  return <MyComponent someText={someText} />
})
