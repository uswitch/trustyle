/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'

import * as colors from './colors'
import * as types from './typography'

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

storiesOf('Styles|Typography', module).add('Types', () =>
  Object.entries(types).map(([key, value]) => (
    <p key={key} css={value}>
      {key}
    </p>
  ))
)
