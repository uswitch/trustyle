/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { /* select, */ text } from '@storybook/addon-knobs'

// import AllThemes from '../../../utils/all-themes'

import SocialSharing from './'

export default {
  title: 'Elements/SocialSharing'
}

export const ExampleWithKnobs = () => {
  // const variant = select(
  //   'Variant',
  //   { left: 'left', centered: 'centered', unset: '' },
  //   ''
  // )

  const label = text('Label', 'Share this guide')
  const shareUrl = text('URL to share', 'https://www.google.com/')
  const twitterMessage = text('Twitter message', 'A great resource')
  const mailSubject = text('Email subject', 'Title of the great resource')

  return (
    <SocialSharing
      labelText={label}
      shareUrl={shareUrl}
      twitterMessage={twitterMessage}
      mailSubject={mailSubject}
    />
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}
