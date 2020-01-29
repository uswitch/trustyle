/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

import Breadcrumbs from './'

export default {
  title: 'Elements|Breadcrumbs'
}

export const ExampleWithTitle = () => {
  const crumbs = [
    {
      fields: {
        path: '/gas-electricity/',
        displayText: 'Gas & Electricity'
      }
    },
    {
      fields: {
        path: '/gas-electricity/guides',
        displayText: 'Guides'
      }
    }
  ]

  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
    />
  )
}

export const ExampleWithoutTitle = () => {
  const crumbs = [
    {
      fields: {
        path: '/gas-electricity/',
        displayText: 'Gas & Electricity'
      }
    },
    {
      fields: {
        path: '/gas-electricity/guides',
        displayText: 'Guides'
      }
    }
  ]

  return <Breadcrumbs crumbs={crumbs} />
}

export const NoCrumbsAndTitle = () => {
  return (
    <Breadcrumbs
      crumbs={[]}
      title="Understanding energy bills and electricity bills - FAQs and more"
    />
  )
}

export const NoCrumbsAndNoTitle = () => {
  return <Breadcrumbs crumbs={[]} />
}

export const AllWithCustomSeparator = () => {
  const crumbs = [
    {
      fields: {
        path: '/gas-electricity/',
        displayText: 'Gas & Electricity'
      }
    },
    {
      fields: {
        path: '/gas-electricity/guides',
        displayText: 'Guides'
      }
    }
  ]

  const separator = (
    <span
      sx={{
        display: 'inline-block',
        width: '0.9em'
      }}
    >
      <Icon glyph="caret" direction="right" color="#6F7175" />
    </span>
  )

  const backIcon = (
    <span
      sx={{
        display: 'inline-block',
        width: '0.9em'
      }}
    >
      <Icon glyph="caret" direction="left" color="#000000" />
    </span>
  )

  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      separator={separator}
      backIcon={backIcon}
    />
  )
}

export const NothingWithCustomSeparator = () => {
  const separator = (
    <span
      sx={{
        display: 'inline-block',
        width: '0.9em'
      }}
    >
      <Icon glyph="caret" direction="right" color="#6F7175" />
    </span>
  )

  const backIcon = (
    <span
      sx={{
        display: 'inline-block',
        width: '0.9em'
      }}
    >
      <Icon glyph="caret" direction="left" color="#000000" />
    </span>
  )

  return <Breadcrumbs crumbs={[]} separator={separator} backIcon={backIcon} />
}
