/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
  name,
  type = 'radio',
  ...inputProps
}) => {
  return (
    <label>
      <input sx={st.input(type)} type={type} name={name} {...inputProps} />
      <span sx={st.container(type)}>
        <span sx={st.content}>
          <span sx={st.childrenWrapper}>{children}</span>
          {label}
        </span>
      </span>
    </label>
  )
}
