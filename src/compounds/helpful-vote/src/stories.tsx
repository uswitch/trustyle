/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import HelpfulVote from './'

export default {
  title: 'compounds|Helpful Vote'
}

export const BasicExample = () => {
  const yesButton = {
    text: 'Yes',
    showIcon: true
  }
  const noButton = {
    text: 'No',
    showIcon: true
  }
  return <HelpfulVote yesButton={yesButton} noButton={noButton} />
}

BasicExample.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const AutomatedTests = () => {
  return (
    <AllThemes>
      <BasicExample />
    </AllThemes>
  )
}
