/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { select } from '@storybook/addon-knobs'

import Breadcrumbs from './'

type Variant = 'base' | 'light'
const variants = ['base', 'light']

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
  const variant = select('Variant', variants, 'base') as Variant

  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      variant={variant}
    />
  )
}

export const ExampleWithoutTitle = () => {
  const variant = select('Variant', variants, 'base') as Variant

  return <Breadcrumbs crumbs={crumbs} variant={variant} />
}

export const NoCrumbsAndTitle = () => {
  const variant = select('Variant', variants, 'base') as Variant

  return (
    <Breadcrumbs
      crumbs={[]}
      title="Understanding energy bills and electricity bills - FAQs and more"
      variant={variant}
    />
  )
}

export const NoCrumbsAndNoTitle = () => {
  const variant = select('Variant', variants, 'base') as Variant

  return <Breadcrumbs crumbs={[]} variant={variant} />
}

export const AllWithCustomSeparator = () => {
  const variant = select('Variant', variants, 'base') as Variant

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
      variant={variant}
    />
  )
}

export const NothingWithCustomSeparator = () => {
  const variant = select('Variant', variants, 'base') as Variant

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
      variant={variant}
    />
  )
}

export const CustomHomeIcon = () => {
  const variant = select('Variant', variants, 'base') as Variant

  const homeIcon = 'Uswitch.com'

  return (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      customHomeIcon={homeIcon}
      variant={variant}
    />
  )
}
