/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import SponsoredByTag from '.'

export default {
  title: 'Elements/Sponsored by tag'
}

export const ExampleWithDefaultText = () => {
  const providerLogo: string = text(
    'Provider logo url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/5eyE4LyswwqIYk0mIsE820/dc0774e3e62d7b39ddeb1729d823a8da/Logo_-_three.png'
  )

  return <SponsoredByTag providerLogoSrc={providerLogo} />
}

export const ExampleWithTextProp = () => {
  const providerLogo: string = text(
    'Provider logo url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/5eyE4LyswwqIYk0mIsE820/dc0774e3e62d7b39ddeb1729d823a8da/Logo_-_three.png'
  )

  const providerText: string = text('Text to display', 'This is example text')
  return (
    <React.Fragment>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerText={providerText}
      />
    </React.Fragment>
  )
}

ExampleWithDefaultText.story = {
  parameters: {
    percy: { skip: true }
  }
}

ExampleWithTextProp.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithDefaultText />
      <ExampleWithTextProp />
    </AllThemes>
  )
}
