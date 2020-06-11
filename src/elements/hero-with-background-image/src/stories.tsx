/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import HeroWithBackgroundImage from './'

export default {
  title: 'Elements|HeroWithBackgroundImage'
}

const imageUrl = require('../../../../static/hero-with-background-image/wallet.png')

export const ExampleWithKnobs = () => {
  return <HeroWithBackgroundImage imageUrl={imageUrl} />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <HeroWithBackgroundImage/>
    </AllThemes>
  )
}
