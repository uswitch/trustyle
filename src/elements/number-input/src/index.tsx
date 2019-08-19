/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { inputs } from '@uswitch/trustyle.styles'

import * as st from './styles'

type Parser = 'float' | 'integer' | 'string'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  hideInFullstory?: boolean
  name: string
  onChange: (value: any) => void
  parser?: Parser
  prefix?: string
  suffix?: string
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
  hideInFullstory = false,
  name,
  onBlur,
  onChange,
  parser = 'float',
  prefix,
  suffix,
  value,
  ...inputProps
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
        data-pii={hideInFullstory || undefined}
        name={name}
        type="tel"
        value={value === null ? '' : value}
        onFocus={() => setHasFocus(true)}
        onBlur={(event) => {
          setHasFocus(false)
          onBlur && onBlur(event)
        }}
        onChange={event => {
          const { value } = event.currentTarget
          onChange && onChange(parseValue(parser, value))
        }}
        {...inputProps}
      />
      {suffix && <span css={st.suffix(hasError, hasFocus)}>{suffix}</span>}
    </label>
  )
}
