/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  large?: boolean
}

export const RadioInput: React.FC<Props> = ({
  label,
  large = false,
  ...inputProps
}) => (
  <label css={st.label}>
    <input css={st.input} type="radio" {...inputProps} />
    <span css={st.span(large)}>{label}</span>
  </label>
)
