/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AdBanner from './'

export default {
  title: 'compounds|AdBanner'
}

export const ExampleWithKnobs = () => {
  const title = text('title', 'Galaxy S20 Series')
  const contentText = text(
    'content',
    'A revolutionary camera with 8K video. Future-ready 5G. More memory for your memories.'
  )

  const url =
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/3OTEiajt8kWEUm8QcWI8w8/aab828afa135b4591375dc71d6a6584d/Logo_-_samsung.png?auto=compress%2Cformat&fit=fill&trim=color&ixlib=react-8.6.4&invert=true&sat=-100&con=100'

  const usp = text('usp', 'Free Galaxy Buds+ worth £159')
  const sponsorLogo = text('Sponsor Logo', url)
  const sponsorName = text('Sponsor Name', 'Samsung')
  const label = text('Badge Label', 'Uswitch Manufacturer of the Year')
  const href = text('href', 'https://www.google.com')
  const backgroundImage = text('background Image', 'https://bit.ly/2TTd2SZ')
  const backgroundColor = text('background color', 'black')
  const additionalImage = text(
    'optional additional image',
    'https://bit.ly/3d7arga'
  )
  const additionalImageTag = text(
    'optional additional image alt tag',
    'Uswitch Award'
  )
  const sponsor = { logo: sponsorLogo, name: sponsorName }
  const content = <React.Fragment>{contentText}</React.Fragment>

  return (
    <AdBanner
      title={title}
      content={content}
      usp={usp}
      sponsor={sponsor}
      label={label}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      additionalImage={additionalImage}
      additionalImageTag={additionalImageTag}
      href={href}
    />
  )
}
