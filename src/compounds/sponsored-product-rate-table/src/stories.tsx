/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import SponsoredRateTable from '.'

export default {
  title: 'Compounds|Sponsored Product Rate Table'
}

export const ExampleWithKnobs = () => {
  const title = text(
    'Title',
    '2 months free insurance with an Apple iPhone XR 64Gb'
  )
  const imgSrc = text(
    'Image Url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/3PNmGXJpUL26qMX2odn7XI/d0d1311039c02d3e34cd501b9cbfa5ed/iphone-11-grey-front.png'
  )
  const imgAlt = text('Image Alt', 'iPhone 11')
  const usp = text('USP', 'Free insurance for 2 months')
  const href = text('href', 'https://www.uswitch.com/mobiles/')
  const target = text('target', '_blank')
  const sponsorSrc = text(
    'Sponsor url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/5eyE4LyswwqIYk0mIsE820/dc0774e3e62d7b39ddeb1729d823a8da/Logo_-_three.png'
  )
  const award = text('Award', 'Uswitch Manufacturer of the Year')
  const campaignImage = text(
    'Enhanced image url',
    'https://academy.alchemysystems.com/wp-content/uploads/2017/03/roundtable-banner-image-1400x350.jpg'
  )

  return (
    <div>
      <SponsoredRateTable
        productName={title}
        productImgSrc={imgSrc}
        productImgAlt={imgAlt}
        informationDetails={[
          {
            prefix: '',
            value: '30',
            suffix: 'GB',
            label: 'data'
          },
          {
            prefix: '£',
            value: '30.00',
            suffix: '',
            label: 'per month'
          }
        ]}
        usp={usp}
        href={href}
        target={target}
        sponsorLogoSrc={sponsorSrc}
        award={award}
        campaignImgSrc={campaignImage}
      />
    </div>
  )
}
