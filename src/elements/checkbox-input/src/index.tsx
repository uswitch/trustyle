/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  slim?: boolean
}

export const CheckboxInput: React.FC<Props> = ({
  label,
  slim = false,
  ...inputProps
}) => (
  <label css={st.label(slim)}>
    <input css={st.input(slim)} type="checkbox" {...inputProps} />
    <span css={st.span(slim)}>{label}</span>
  </label>
)
