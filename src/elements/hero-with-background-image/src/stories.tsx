/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import { Container } from '../../../layout/flex-grid/src'

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

export const HeroWithCustomContainer = () => {
  const Container = () => <div sx={{ width: 100, height: 100, margin: 'auto' }}></div>
  return <HeroWithBackgroundImage imageUrl={imageUrl} container={Container} />
}

HeroWithCustomContainer.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const HeroWithFlexGridContainer = () => {
  const Foo = () => <Container sx={{ height: 500 }} />
  return <HeroWithBackgroundImage imageUrl={imageUrl} container={Foo} />
}

HeroWithFlexGridContainer.story = {
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
