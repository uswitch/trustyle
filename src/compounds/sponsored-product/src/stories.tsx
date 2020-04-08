/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import SponsoredProduct from '.'

export default {
  title: 'Compounds|Sponsored product'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'Apple iPhone XR 64Gb')
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
  const enhanced = text(
    'Enhanced image url',
    'https://media-exp1.licdn.com/dms/image/C4E12AQE4xoCnD9YOYg/article-cover_image-shrink_600_2000/0?e=1591833600&v=beta&t=M5KsjSiq_qa5od-ZpqhcdesChm8pRobpp6RT-fHzo1s'
  )
  const brandCaptionText = text(
    'Brand caption',
    'No landline needed. No engineer needed. Forget fibre. Join the party.'
  )

  return (
    <div>
      <SponsoredProduct
        title={title}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        usp={usp}
        href={href}
        target={target}
        sponsorSrc={sponsorSrc}
        award={award}
        enhancedImgSrc={enhanced}
        brandCaption={brandCaptionText}
        informationDetails={[
          {
            prefix: '',
            value: text('value', '30'),
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
      />
    </div>
  )
}
