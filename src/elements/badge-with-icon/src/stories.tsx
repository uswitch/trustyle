/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import BadgeWithIcon from './'

export default {
  title: 'Elements|Badge with icon'
}

export const ExampleWithKnobs = () => {
  const label: string = text('Some text', 'Uswitch Manufacturer of the Year')
  return <BadgeWithIcon label={label} />
}
