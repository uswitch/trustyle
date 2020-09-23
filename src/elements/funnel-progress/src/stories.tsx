/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { number, select } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import FunnelProgress from './'

export default {
  title: 'Elements/Funnel Progress'
}

const phases = [
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
]

export const Example = () => (
  <FunnelProgress
    phases={phases}
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

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

const Spacer = () => <div css={css({ minHeight: 20 })} />

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    progress: [0, 0.25, 0.5, 0.75, 1]
  })

  return (
    <AllThemes themes={['uswitch', 'journey']}>
      {permutations.map((p, i) => (
        <React.Fragment key={i}>
          <FunnelProgress
            phases={phases}
            currentPhaseKey={
              p.progress < 0.3
                ? 'currentPlan'
                : p.progress < 0.8
                ? 'results'
                : 'apply'
            }
            progress={p.progress}
          />
          <Spacer />
        </React.Fragment>
      ))}
    </AllThemes>
  )
}
