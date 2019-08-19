/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
import InputMask from 'react-input-mask'

import * as st from './styles'

export type InputType = 'text' | 'email' | 'tel' | 'date'
export type Width = 'half' | 'full'

export interface DataProps {
  [key: string]: boolean | number | string | null
}
interface Props {
  dataProps?: DataProps
  freezable?: boolean
  hasError?: boolean
  label?: string
  name: string
  maxDate?: string
  minDate?: string
  mask?: string
  maxLength?: number
  onBlur: () => void
  onChange: (value: string) => void
  onFocus?: () => void
  placeholder?: string
  type?: InputType
  value: string
  width?: Width
}

const prependDataProps = (dataProps: DataProps) => Object.keys(dataProps)
  .reduce((props, key) => ({
    ...props,
    [`data-${key}`]: dataProps[key]
  }), {})

export const Input: React.FC<Props> = ({
  dataProps = {},
  freezable,
  hasError = false,
  label,
  name,
  maxDate,
  minDate,
  mask,
  maxLength,
  onBlur,
  onChange,
  onFocus = () => {},
  placeholder,
  type,
  value,
  width = 'full'
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const inputProps = {
    css: inputs.keyboardInput,
    name,
    onBlur: () => {
      setHasFocus(false)
      onBlur()
    },
    onChange: (event: React.FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value),
    onFocus: () => {
      setHasFocus(true)
      onFocus()
    },
    placeholder,
    type,
    value: value === null ? '' : value,
    ...(type === 'date' ? { max: maxDate, min: minDate } : {}),
    ...(type === 'text' ? { maxLength } : {}),
    ...prependDataProps(dataProps)
  }

  return (
    <FrozenInput fieldLabel={label} text={value} freezable={freezable}>
      <label
        css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}
        htmlFor={name}
      >
        { mask
          ? <InputMask mask={mask} {...inputProps } />
          : <input {...inputProps } />
        }
        <input {...inputProps} />
      </label>
    </FrozenInput>
  )
}
