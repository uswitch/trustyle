/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { select, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import CTA from './'

type Variant = 'base' | 'hero' | 'hero-white-bg'
const variants = ['base', 'hero', 'hero-white-bg']

export default {
  title: 'Elements|CTA'
}

export const Example = () => {
  const variant = select('Variant', variants, 'base') as Variant

  const titleText = text(
    'CTA title',
    'Find the best credit card for your needs'
  )
  const textText = text(
    'CTA text',
    "Find the best credit card for you, whether you're looking for a 0% card for balance transfers or purchases or day to day spending and rewards."
  )
  const buttonText = text('Button text', 'Compare credit cards')

  return (
    <CTA
      title={titleText}
      text={textText}
      buttonText={buttonText}
      buttonLink="https://google.com"
      variant={variant}
    />
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <CTA
        title="Find the best credit card for your needs"
        text="Find the best credit card for you, whether you're looking for a 0% card for balance transfers or purchases or day to day spending and rewards."
        buttonText="Compare credit cards"
        buttonLink="https://google.com"
      />
    </AllThemes>
  )
}
