/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { number, select } from '@storybook/addon-knobs'

import FunnelProgress from './'

export default {
  title: 'Elements|Funnel Progress'
}

const progressKnob = (name: string) =>
  number(name, 0.25, {
    range: true,
    min: 0,
    max: 1,
    step: 0.05
  })

export const Example = () => {
  const phase = select('phase', ['Current plan', 'Results', 'Apply'], 'Results')
  return (
    <FunnelProgress
      phases={[
        {
          title: 'Current plan',
          open: phase === 'Current plan',
          complete: phase !== 'Current plan',
          progress: progressKnob('Current plan')
        },
        {
          title: 'Results',
          open: phase === 'Results',
          complete: phase !== 'Current plan' && phase !== 'Results',
          progress: progressKnob('Results')
        },
        {
          title: 'Apply',
          open: phase === 'Apply',
          complete: false,
          progress: progressKnob('Apply')
        }
      ]}
    />
  )
}
