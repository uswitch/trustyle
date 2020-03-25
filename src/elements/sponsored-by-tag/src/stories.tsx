/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import SponsoredByTag from '.'

export default {
  title: 'Elements|Sponsored by tag'
}

export const ExampleWithKnobs = () => {
  const providerLogo: string = text(
    'Provider logo url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/5eyE4LyswwqIYk0mIsE820/dc0774e3e62d7b39ddeb1729d823a8da/Logo_-_three.png'
  )
  return <SponsoredByTag providerLogoSrc={providerLogo} />
}
