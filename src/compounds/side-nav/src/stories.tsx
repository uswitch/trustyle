/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import SideNav from '../src'

storiesOf('Compounds|Side Nav', module).add('Side Nav', () => {
  const internalLinksTitle = text('Internal links title', 'In this guide')
  const internalLinks = object('Internal links', [
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
  ]);
  const additionalLinks = object('Aditional links', [
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
  ])
  return <SideNav 
    internalLinks={{
      title: internalLinksTitle,
      links: internalLinks
    }}
    additionalLinks={additionalLinks}
  />
})
