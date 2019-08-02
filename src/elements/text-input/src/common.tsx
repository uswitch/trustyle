/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'

import * as st from './styles'

export type Width = 'half' | 'full'
export type InputType = 'text' | 'email' | 'tel' | 'date'

interface Props {
  freezable?: boolean
  hasError?: boolean
  label?: string
  name: string
  maxDate?: string
  minDate?: string
  maxLength?: number
  onBlur: () => void
  onChange: (value: string) => void
  placeholder?: string
  type?: InputType
  value: string
  width?: Width
}

export const Input: React.FC<Props> = ({
  freezable,
  hasError = false,
  label,
  name,
  maxDate,
  minDate,
  maxLength,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
  width = 'full'
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  return (
    <FrozenInput fieldLabel={label} text={value} freezable={freezable}>
      <label
        css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}
        htmlFor={name}
      >
        <input
          css={inputs.keyboardInput}
          name={name}
          onFocus={() => setHasFocus(true)}
          onBlur={() => {
            setHasFocus(false)
            onBlur()
          }}
          onChange={event => onChange(event.currentTarget.value)}
          placeholder={placeholder}
          type={type}
          value={value === null ? '' : value}
          {...(type === 'date' ? { max: maxDate, min: minDate } : {})}
          {...(type === 'text' ? { maxLength } : {})}
        />
      </label>
    </FrozenInput>
  )
}
