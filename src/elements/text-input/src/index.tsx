/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
import * as ReactInputMask from 'react-input-mask'

import * as st from './styles'


const MaskedInput: any = ReactInputMask

export type InputType = 'text' | 'email' | 'tel' | 'date'
export type Width = 'half' | 'full'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | undefined
  freezable?: boolean
  hasError?: boolean
  mask?: string
  name: string
  prefix?: string
  suffix?: string
  value?: string | undefined
  width?: Width
}

export const Input: React.FC<Props> = ({
  freezable,
  hasError = false,
  mask,
  prefix,
  suffix,
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

  const childProps = {
    ...inputProps,
    css: inputs.keyboardInput,
    onBlur,
    onFocus
  }

  return (
    <FrozenInput
      text={inputProps.value || inputProps.defaultValue || ''}
      freezable={freezable}
    >
      <div css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}>
        {prefix && <span css={st.prefix(hasError, hasFocus)}>{prefix}</span>}

        {mask ? (
          <MaskedInput mask={mask} {...childProps} />
        ) : (
          <input {...childProps} />
        )}

        {suffix && <span css={st.suffix(hasError, hasFocus)}>{suffix}</span>}
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
