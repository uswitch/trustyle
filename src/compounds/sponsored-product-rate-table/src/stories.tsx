/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import SponsoredRateTable from '.'

export default {
  title: 'Compounds/Sponsored Product Rate Table'
}

export const ExampleWithKnobs = () => {
  const title = text(
    'Title',
    '2 months free insurance with an Apple iPhone XR 64Gb'
  )
  const imgSrc = text('Image Url', '/contentful/iphone-11-grey-front.png')
  const imgAlt = text('Image Alt', 'iPhone 11')
  const usps = [
    { text: text('USP', 'Free insurance for 2 months') },
    {
      text: text('USP2', 'Second USP'),
      color: 'linear-gradient(90deg, #C1B0E6 0%, #C1C0FF 100%)',
      beforeColor: '#141424',
      uspSx: { '> span': { color: '#141424' } }
    }
  ]
  const backgroundColor = text('Background Colour', '#ff55c4')
  const href = text('href', 'https://www.uswitch.com/mobiles/')
  const target = text('target', '_blank')
  const sponsorName = text('Sponsor name', 'Three')
  const sponsorSrc = text('Sponsor url', '/contentful/three.png')
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
        usps={usps}
        href={href}
        target={target}
        sponsorName={sponsorName}
        sponsorLogoSrc={sponsorSrc}
        award={award}
        campaignImgSrc={campaignImage}
        backgroundColor={backgroundColor}
        campaignImgHeight={'160px'}
      />
    </div>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithKnobs />
    </AllThemes>
  )
}
