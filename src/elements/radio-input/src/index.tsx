/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

type Value = string | number | boolean

export interface DataProps {
  [key: string]: boolean | number | string | null
}

interface Props {
  dataProps?: DataProps
  label: string
  name: string
  onBlur: () => void
  onChange: (value: Value) => void
  onFocus?: () => void
  selected: Value
  width?: Width
  value: Value
}

const prependDataProps = (dataProps: DataProps) =>
  Object.keys(dataProps).reduce(
    (props, key) => ({
      ...props,
      [`data-${key}`]: dataProps[key]
    }),
    {}
  )

export type Width = 'half' | 'full'

export const RadioInput: React.FC<Props> = ({
  dataProps = {},
  label,
  name,
  onBlur,
  onChange,
  onFocus = () => {},
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
        onFocus={onFocus}
        {...prependDataProps(dataProps)}
      />
      <span css={st.span}>{label}</span>
    </label>
  )
}
