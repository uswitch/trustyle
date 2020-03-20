/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import UspTag from './'

export default {
  title: 'Elements|Usp tag'
}

export const ExampleWithKnobs = () => {
  const someText: string = text('usp', '2 months free insurance')
  return <UspTag usp={someText} />
}
