/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  width?: Width
}

export type Width = 'half' | 'full'

export const RadioInput: React.FC<Props> = ({
  label,
  value,
  width = 'full',
  ...inputProps
}) => (
  <label css={[st.label, st[width]]}>
    <input
      css={st.input}
      type="radio"
      {...inputProps}
    />
    <span css={st.span}>{label}</span>
  </label>
)
