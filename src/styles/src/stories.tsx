/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/react'
import { storiesOf } from '@storybook/react'

import * as colors from './colors'
import * as types from './typography'

const swatch = css({
  padding: '10px',
  display: 'inline-block',
  fontFamily: 'monospace'
})

storiesOf('Legacy Styles/Colours', module).add('Swatches', () => (
  <React.Fragment>
    {Object.entries(colors).map(([key, value]) => (
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
    ))}
  </React.Fragment>
))

storiesOf('Legacy Styles/Typography', module).add('Types', () => (
  <React.Fragment>
    {Object.entries(types).map(([key, value]) => (
      <p key={key} css={value}>
        {key}
      </p>
    ))}
  </React.Fragment>
))
