/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import StandardP0Ad from '.'

export default {
  title: 'Compounds|ad-standard-p0'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'Great value deal for less than a fiver')
  const imgSrc = text(
    'Image Url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/IGxORpSI6sQYQImKyikiw/734923430782cf1d24bd47bd6bb85bd7/Simage_-_vodafone.png'
  )
  const imgAlt = text('Image Alt', 'vodafone sim card')
  const usp = text('USP', '2 months free insurance')
  const href = text('href', 'https://www.uswitch.com/mobiles/')
  const target = text('target', '_blank')

  return (
    <StandardP0Ad
      title={title}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      informationDetails={[
        {
          prefix: '',
          value: '4',
          suffix: 'GB',
          label: 'data'
        },
        {
          prefix: '£',
          value: '4.99',
          label: 'per month'
        }
      ]}
      usp={usp}
      href={href}
      target={target}
    />
  )
}
