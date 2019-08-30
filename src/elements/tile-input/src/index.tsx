/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  label: string
  name: string
  selected: string
}

export const TileInput: React.FC<Props> = ({
  children,
  label,
  selected,
  ...inputProps
}) => (
  <label css={st.label}>
    <input
      css={st.input}
      type="radio"
      checked={selected === inputProps.value}
      {...inputProps}
    />
    <span css={st.container}>
      <span css={st.content}>
        <span />
        <span css={st.childrenWrapper}>{children}</span>
        {label}
      </span>
    </span>
  </label>
)
