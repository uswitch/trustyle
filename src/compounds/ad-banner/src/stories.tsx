/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AdBanner from './'

export default {
  title: 'compounds|AdBanner'
}

export const ExampleWithKnobs = () => {
  const title: string = text('title', 'Galaxy S20 Series')
  const content: React.ReactElement = (
    <React.Fragment>
      A revolutionary camera with 8K video.
      <br /> Future-ready 5G. More memory for your memories.
    </React.Fragment>
  )

  const url =
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/3OTEiajt8kWEUm8QcWI8w8/aab828afa135b4591375dc71d6a6584d/Logo_-_samsung.png?auto=compress%2Cformat&fit=fill&trim=color&ixlib=react-8.6.4&invert=true&sat=-100&con=100'

  const usp: string = text('usp', 'Free Galaxy Buds+ worth £159')
  const sponsorLogo: string = text('Sponsor Logo', url)
  const sponsorName: string = text('Sponsor Name', 'Samsung')
  const label: string = text('Badge Label', 'Uswitch Manufacturer of the Year')
  const backgroundImage: string = text(
    'background Image',
    'https://bit.ly/2TTd2SZ'
  )

  const sponsor = { logo: sponsorLogo, name: sponsorName }
  return (
    <AdBanner
      title={title}
      content={content}
      usp={usp}
      sponsor={sponsor}
      label={label}
      backgroundImage={backgroundImage}
    />
  )
}
