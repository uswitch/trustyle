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
  const confirmButton = {
    text: 'Accept',
    showIcon: true
  }
  const dismissButton = {
    text: 'Deny',
    onClick: () => console.log('Deny clicked!')
  }
  return (
    <HelpfulVote
      question="Do you accept terms?"
      confirmButton={confirmButton}
      dismissButton={dismissButton}
    />
  )
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
