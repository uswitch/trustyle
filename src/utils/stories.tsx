/** @jsx jsx */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'

import theme from './theme-selector'

const swatch = {
  padding: '10px',
  display: 'inline-block',
  fontFamily: 'monospace',
  width: '100px',
  verticalAlign: 'top'
}

const swatchBlock = {
  width: '100px',
  height: '100px',
  border: '1px #e2e2e2 solid'
}

storiesOf('Global Styles|Colours', module).add('Swatches', () => (
  <div css={css({ margin: '-10px' })}>
    {Object.entries(theme().colors).map(([key, value]) => (
      <div key={key} sx={swatch}>
        <div
          sx={{
            backgroundColor: value,
            ...swatchBlock
          }}
        />
        {key}
      </div>
    ))}
  </div>
))

const typeNames = {
  h1: 'Heading level 1',
  h2: 'Heading level 2',
  h3: 'Heading level 3',
  h4: 'Heading level 4',
  a: 'Anchor'
}

storiesOf('Global Styles|Typography', module).add('Types', () =>
  Object.keys(theme().styles).map(key => {
    const Tag = /^\.|body|root/.test(key) ? 'p' : key
    const className = key.startsWith('.') ? key.slice(1) : null
    return (
      <Tag key={key} className={className}>
        {text(`Text ${key}`, typeNames[key] || key)}
      </Tag>
    )
  })
)
