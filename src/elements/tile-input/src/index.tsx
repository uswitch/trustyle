/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  children: React.ReactNode
  label: string
  onBlur: () => void
  onChange: (value: string) => void
  name: string
  selected: string
  value: string
}

export const TileInput: React.FC<Props> = ({
  children,
  label,
  onBlur,
  onChange,
  name,
  selected,
  value
}) => {
  return (
    <label css={st.label} key={value}>
      <input
        css={st.input}
        name={name}
        type="radio"
        value={value}
        checked={selected === value}
        onBlur={onBlur}
        onChange={e => onChange(e.currentTarget.value)}
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
}
