/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
const InputMask = require("react-input-mask") // Workaround for known issue: https://github.com/sanniassin/react-input-mask/issues/144

import * as st from './styles'

export type InputType = 'text' | 'email' | 'tel' | 'date'
export type Width = 'half' | 'full'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  freezable?: boolean
  hasError?: boolean
  label?: string
  mask?: string
  name: string
  value?: string
  width?: Width
}

export const Input: React.FC<Props> = ({
  freezable,
  hasError = false,
  label,
  mask,
  value,
  width = 'full',
  ...inputProps
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false)

    if (inputProps.onBlur) {
      inputProps.onBlur(event)
    }
  }
  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true)

    if (inputProps.onFocus) {
      inputProps.onFocus(event)
    }
  }

  const props = {
    css: inputs.keyboardInput,
    onBlur,
    onFocus,
    value,
    ...inputProps,
  }

  return (
    <FrozenInput fieldLabel={label} text={value} freezable={freezable}>
      <label
        css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}
        htmlFor={name}
      >
        { mask
          ? <InputMask mask={mask} {...props } />
          : <input {...props } />
        }
      </label>
    </FrozenInput>
  )
}
