/** @jsx jsx */
import * as React from 'react'
import { number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import { RadioInput } from './.'

const wrapper = css({ padding: number('Padding', 10), marginTop: 5 })

export default {
  title: 'Elements|Radio Input'
}

export const AllVariants = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <React.Fragment>
      <div css={wrapper}>
        <RadioInput label="Radio input field" name="radio-name" />
      </div>
      <div css={wrapper}>
        <RadioInput checked label="Radio input checked" name="radio-name" />
      </div>
      <div css={wrapper}>
        <RadioInput
          label="Radio input field with a bit of extra text making it span across two lines"
          name="radio-name"
        />
      </div>
    </React.Fragment>
  </div>
)
