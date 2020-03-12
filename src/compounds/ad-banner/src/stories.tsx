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
  const content: string = text(
    'content',
    'A revolutionary camera with 8K video. Future-ready 5G. More memory for your memories.'
  )
  const usp: string = text('usp', 'Free Galaxy Buds+ worth £159')
  const provider = { logo: 'https://bit.ly/2THNlVA', name: 'Samsung' }
  return (
    <AdBanner title={title} content={content} usp={usp} provider={provider} />
  )
}
