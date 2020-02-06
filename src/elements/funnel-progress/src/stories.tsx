/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { number, select } from '@storybook/addon-knobs'

import FunnelProgress from './'

export default {
  title: 'Elements|Funnel Progress'
}

export const Example = () => (
  <FunnelProgress
    phases={[
      {
        key: 'currentPlan',
        title: 'Current plan'
      },
      {
        key: 'results',
        title: 'Results'
      },
      {
        key: 'apply',
        title: 'Apply'
      }
    ]}
    currentPhaseKey={select(
      'phase',
      ['currentPlan', 'results', 'apply'],
      'results'
    )}
    progress={number(name, 0.25, {
      range: true,
      min: 0,
      max: 1,
      step: 0.05
    })}
  />
)
