/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { inputs } from '@uswitch/trustyle.styles'

import * as st from './styles'

type Parser = 'float' | 'integer' | 'string'

type Value = number | string | null

interface Props {
  hasError?: boolean
  onBlur: () => void
  onChange: (value: Value) => void
  name: string
  parser?: Parser
  placeholder?: string
  prefix?: string
  suffix?: string
  value: Value
}

const parseValue = (parser: Parser, value: string) => {
  if (parser === 'integer') {
    const parsed = parseInt(value)
    return isNaN(parsed) ? null : parsed
  }
  if (parser === 'float') {
    const parsed = parseFloat(value)
    return isNaN(parsed) ? null : parsed
  }
  if (parser === 'string') {
    return value === '' ? null : value
  }
  return null
}

export const NumberInput: React.FC<Props> = ({
  hasError = false,
  onBlur,
  onChange,
  name,
  parser = 'float',
  placeholder,
  prefix,
  suffix,
  value
}) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <label
      css={inputs.keyboardInputContainer(hasError, hasFocus)}
      htmlFor={name}
    >
      {prefix && <span css={st.prefix(hasError, hasFocus)}>{prefix}</span>}
      <input
        css={inputs.keyboardInput}
        name={name}
        type="number"
        value={value === null ? '' : value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => {
          setHasFocus(false)
          onBlur()
        }}
        placeholder={placeholder}
        onChange={event => {
          const { value } = event.currentTarget
          onChange(parseValue(parser, value))
        }}
      />
      {suffix && <span css={st.suffix(hasError, hasFocus)}>{suffix}</span>}
    </label>
  )
}
