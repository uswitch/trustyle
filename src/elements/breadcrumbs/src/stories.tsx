/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

import Breadcrumbs from './'

export default {
  title: 'Elements|Breadcrumbs'
}

const crumbs = [
  {
    fields: {
      path: '/',
      displayText: 'Home'
    }
  },
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

export const ExampleWithTitle = () => {
  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
    />
  )
}

export const ExampleWithoutTitle = () => {
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
      customSeparator={separator}
      customBackIcon={backIcon}
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

  return (
    <Breadcrumbs
      crumbs={[]}
      customSeparator={separator}
      customBackIcon={backIcon}
    />
  )
}

export const CustomHomeIcon = () => {
  const homeIcon = 'Uswitch.com'

  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      customHomeIcon={homeIcon}
    />
  )
}
