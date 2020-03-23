/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'
import PrimaryInfoBlock from '@uswitch/trustyle.primary-info-block'
import UspTag from '@uswitch/trustyle.usp-tag'

import MobileAd from '.'

export default {
  title: 'Compounds|Mobile ad'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'Great value deal for less than a fiver')
  const image = (
    <img
      src="https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/IGxORpSI6sQYQImKyikiw/734923430782cf1d24bd47bd6bb85bd7/Simage_-_vodafone.png?auto=compress%2Cformat&fit=clip&ixlib=react-8.6.4"
      alt="Vodafone"
    />
  )

  const primaryInfoBlock = (
    <PrimaryInfoBlock prefix={''} value={'4'} suffix={'GB'} label={'data'} />
  )

  const secondBlock = (
    <PrimaryInfoBlock prefix={'£'} value={'4.99'} label={'per month'} />
  )

  const uspTag = <UspTag usp={'2 months free insurance'} />

  return (
    <MobileAd
      title={title}
      image={image}
      firstInfoBlock={primaryInfoBlock}
      secondInfoBlock={secondBlock}
      uspTag={uspTag}
    />
  )
}
