/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AwardsTag from './'

export default {
  title: 'Elements|Awards Tag'
}

export const ExampleWithKnobs = () => {
  const awardTitle: string = text('Award', 'Uswitch Manufacturer of the Year')

  return <AwardsTag award={awardTitle} />
}
