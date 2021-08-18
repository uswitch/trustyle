/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import WireFrameCell from './'

export default {
  title: 'Elements/WireFrameCell'
}

export const ExampleWithKnobs = () => {
  const styles = {
    width: '1000px',
    height: '20px'
  }

  return <WireFrameCell styles={styles} />
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
    </AllThemes>
  )
}
