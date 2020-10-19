/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AwardsTag from './'

export default {
  title: 'Elements/Awards Tag'
}

export const ExampleWithKnobs = () => {
  const awardTitle: string = text('Award', 'Uswitch Manufacturer of the Year')

  return <AwardsTag award={awardTitle} />
}

export const InlineWithKnobs = () => {
  const awardTitle: string = text('Award', 'Uswitch Manufacturer of the Year')

  return <AwardsTag award={awardTitle} inline />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithKnobs />
      <br />
      <InlineWithKnobs />
    </AllThemes>
  )
}
