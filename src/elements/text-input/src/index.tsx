/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
import InputMask from 'react-input-mask'

import * as st from './styles'

export type InputType = 'text' | 'email' | 'tel' | 'date'
export type Width = 'half' | 'full'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  freezable?: boolean
  hasError?: boolean
  mask?: string
  name: string
  value: string | undefined
  width?: Width
}

export const Input: React.FC<Props> = ({
  freezable,
  hasError = false,
  mask,
  width = 'full',
  ...inputProps
}) => {
  const stringValue = inputProps.value || ''
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

  const childProps = {
    ...inputProps,
    css: inputs.keyboardInput,
    onBlur,
    onFocus
  }

  return (
    <FrozenInput text={stringValue} freezable={freezable}>
      <div css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}>
        {mask ? (
          <InputMask mask={mask} {...childProps} value={stringValue} />
        ) : (
          <input {...childProps} value={stringValue} />
        )}
      </div>
    </FrozenInput>
  )
}

export const TextInput: React.FC<Props> = props => (
  <Input {...props} type="text" />
)

export const EmailInput: React.FC<Props> = props => (
  <Input {...props} type="email" />
)

export const TelInput: React.FC<Props> = props => (
  <Input {...props} type="tel" />
)
