/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { object, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'
import SideNav from '../src'

export default {
  title: 'Compounds/Side Nav'
}

const defaultInternalLinks = [
  {
    text: 'Put money aside for a deposit',
    url: '#heading1',
    isActive: true
  },
  {
    text: 'Work out your budget',
    url: '#heading2'
  },
  {
    text: 'Get a mortgage agreed in principle',
    url: '#heading3'
  }
]

const defaultAdditionalLinks = [
  {
    title: 'Related articles',
    links: [
      {
        text: 'This is a link',
        url: '/'
      },
      {
        text: 'This is a link 2',
        url: '/'
      },
      {
        text: 'This is a link 3',
        url: '/'
      }
    ]
  },
  {
    title: 'Compare',
    links: [
      {
        text: 'This is a link',
        url: '/'
      },
      {
        text: 'This is a link 2',
        url: '/'
      },
      {
        text: 'This is a link 3',
        url: '/'
      }
    ]
  }
]

export const ExampleWithKnobs = () => {
  const internalLinksTitle = text('Internal links title', 'In this guide')
  const internalLinks = object('Internal links', defaultInternalLinks)
  const additionalLinks = object('Aditional links', defaultAdditionalLinks)
  return (
    <SideNav
      internalLinks={{
        title: internalLinksTitle,
        links: internalLinks
      }}
      additionalLinks={additionalLinks}
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
    <AllThemes themes={['uswitch', 'money']}>
      <SideNav
        internalLinks={{
          title: 'In this guide',
          links: defaultInternalLinks
        }}
        additionalLinks={defaultAdditionalLinks}
      />
    </AllThemes>
  )
}
