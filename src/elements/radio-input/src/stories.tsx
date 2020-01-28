/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import { RadioInput } from './.'

const wrapper = css({ padding: number('Padding', 10), 'margin-top': 5 })

storiesOf('Elements|Radio Input', module).add('Example', () => (
  <React.Fragment>
    <div css={wrapper}>
      <RadioInput label="Radio input field" name="radio-name" />
    </div>
    <div css={wrapper}>
      <RadioInput
        label="Radio input field with a bit of extra text making it span across two lines"
        name="radio-name"
      />
    </div>
  </React.Fragment>
))
