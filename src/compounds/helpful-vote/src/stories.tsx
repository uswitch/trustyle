/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import HelpfulVote from './'

export default {
  title: 'compounds|Helpful Vote'
}

export const BasicExample = () => {
  return <HelpfulVote />
}

BasicExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const CustomExample = () => {
  const yesButton = {
    text: 'Accept',
    showIcon: true
  }
  const noButton = {
    text: 'Deny',
    onClick: () => console.log('Deny clicked!')
  }
  return <HelpfulVote yesButton={yesButton} noButton={noButton} />
}

CustomExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <BasicExample />
      <CustomExample />
    </AllThemes>
  )
}
