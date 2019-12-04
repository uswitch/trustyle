/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'

import * as colors from './colors'
import {
  H2,
  H3,
  P,
  Label,
  Small,
  A
} from './typography'

const swatch = css({
  padding: '10px',
  display: 'inline-block',
  fontFamily: 'monospace'
})

storiesOf('Styles|Colours', module).add('Swatches', () =>
  Object.entries(colors).map(([key, value]) => (
    <div key={key} css={swatch}>
      <div
        css={css({
          backgroundColor: value,
          width: '100px',
          height: '100px'
        })}
      />
      {key}
    </div>
  ))
)

storiesOf('Styles|Typography', module).add('Types', () => (
  <div>
    <H2>This is a h2</H2>
    <H3>This is a h3</H3>
    <P>This is a p tag</P>
    <Label>Label</Label>
    <div>
      <A href='#'>Just a link</A>
    </div>
    <Small>This is a small</Small>
  </div>
))
