/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import ProgressCircle from '.'

storiesOf('Elements|Progress Circle', module).add('Example', () => {
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <ProgressCircle />
    </div>
  )
})
