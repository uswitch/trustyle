/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

type Value = string | number | boolean

interface Props {
  label: string
  name: string
  onBlur: () => void
  onChange: (value: Value) => void
  selected: Value
  width?: Width
  value: Value
}

export type Width = 'half' | 'full'

export const RadioInput: React.FC<Props> = ({
  label,
  name,
  onBlur,
  onChange,
  selected,
  value,
  width = 'full'
}) => {
  const domSafeValue = typeof value === 'boolean' ? String(value) : value

  return (
    <label css={[st.label, st[width]]} key={domSafeValue}>
      <input
        css={st.input}
        name={name}
        type="radio"
        value={domSafeValue}
        checked={selected === value}
        onBlur={onBlur}
        onChange={event => {
          const { value } = event.currentTarget
          const isBoolean = value === 'true' || value === 'false'
          onChange(isBoolean ? value === 'true' : value)
        }}
      />
      <span css={st.span}>{label}</span>
    </label>
  )
}
