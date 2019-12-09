/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  label: string
  name: string
  type?: 'radio' | 'checkbox'
}

export const TileInput: React.FC<Props> = ({
  children,
  label,
  type = 'radio',
  ...inputProps
}) => (
  <label>
    <input css={st.input(type)} type={type} {...inputProps} />
    <span css={st.container(type)}>
      <span css={st.content}>
        <span />
        <span css={st.childrenWrapper}>{children}</span>
        {label}
      </span>
    </span>
  </label>
)
