/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AdBanner from './'

export default {
  title: 'Compounds/AdBanner'
}

export const ExampleWithKnobs = () => {
  const title = text('title', 'Galaxy S20 Series')
  const contentText = text(
    'content',
    'A revolutionary camera with 8K video. Future-ready 5G. More memory for your memories.'
  )

  const url =
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/3OTEiajt8kWEUm8QcWI8w8/aab828afa135b4591375dc71d6a6584d/Logo_-_samsung.png?auto=compress&trim=color&invert=true&sat=-100&con=100'

  const usp = text('usp', 'Free Galaxy Buds+ worth £159')
  const sponsorLogo = text('Sponsor Logo', url)
  const sponsorName = text('Sponsor Name', 'Samsung')
  const label = text('Badge Label', 'Uswitch Manufacturer of the Year')
  const href = text('href', 'https://www.google.com')
  const backgroundImage = text('background Image', '/contentful/note10.jpg')
  const backgroundColor = text('background color', '')
  const textColor = text('text color', '')
  const additionalImage = text(
    'optional additional image',
    '/contentful/uswitch-manufacturer-award-image.png'
  )
  const additionalImageTag = text(
    'optional additional image alt tag',
    'Uswitch Award'
  )
  const sponsor = { logo: sponsorLogo, name: sponsorName }
  const content = <React.Fragment>{contentText}</React.Fragment>
  const uspColor = text('usp color', '')

  return (
    <AdBanner
      title={title}
      content={content}
      usp={usp}
      sponsor={sponsor}
      awardLabel={label}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      desktopAwardImage={additionalImage}
      desktopAwardImageTag={additionalImageTag}
      href={href}
      textColor={textColor}
      uspColor={uspColor}
    />
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
