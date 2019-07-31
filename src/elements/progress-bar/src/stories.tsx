import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { ProgressBar } from './'

const max = 10

const label = 'Current Value'
const defaultValue = 7
const options = {
  range: true,
  min: 1,
  max,
  step: 1
}

storiesOf('Elements|Progress Bar', module).add('Example', () => {
  const current = number(label, defaultValue, options)
  return (
    <div>
      <ProgressBar current={current} max={max} />
    </div>
  )
})
