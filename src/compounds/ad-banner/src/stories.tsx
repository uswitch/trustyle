/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AdBanner from './'

export default {
  title: 'compounds|AdBanner'
}

export const ExampleWithKnobs = () => {
  const badgeIcon = (
    <div
      sx={{
        marginRight: 'xs',
        py: 'xxs',
        display: 'flex',
        marginTop: '2px'
      }}
    >
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-0.000966623 8.09716L8.05078 22.1208L21.9964 14.024L13.9447 0.000335086L-0.000966623 8.09716Z"
          fill="#ACAAFF"
        />
        <path
          d="M13.9475 22.1206L21.9993 8.09692L8.05364 9.82571e-05L0.00188873 14.0238L13.9475 22.1206Z"
          fill="#7ED2E9"
        />
        <path
          d="M19.0498 2.96484H2.94629V19.1585H19.0498V2.96484Z"
          fill="#141423"
        />
        <path
          d="M6.30542 12.1831V5.34229H8.37293V12.2014C8.37293 13.9269 9.30664 14.7439 10.8709 14.7439C12.4352 14.7439 13.3689 13.9269 13.3689 12.2014V5.34229H15.4364V12.1831C15.4364 15.0365 13.672 16.5425 10.8709 16.5425C8.12434 16.5486 6.30542 15.0365 6.30542 12.1831Z"
          fill="white"
        />
      </svg>
    </div>
  )
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
  const backgroundImage = text('background Image', 'https://bit.ly/2TTd2SZ')
  const backgroundColor = text('background color', 'black')
  const textColor = text('text color', 'white')
  const additionalImage = text(
    'optional additional image',
    'https://uswitch-cms.imgix.net/uswitch-assets-eu/mobiles-comparison-uf/uswitch-manufacturer-award-image.png'
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
      awardLabel={label}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      desktopAwardImage={additionalImage}
      desktopAwardImageTag={additionalImageTag}
      href={href}
      badgeIcon={badgeIcon}
      textColor={textColor}
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
