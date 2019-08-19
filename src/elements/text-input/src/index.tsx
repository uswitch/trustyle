import * as React from 'react'

import { DataProps, Input, Width } from './common'

export interface CommonInputProps {
  dataProps?: DataProps
  freezable?: boolean
  hasError?: boolean
  name: string
  onBlur: () => void
  onChange: (value: string) => void
  onFocus?: () => void
  placeholder?: string
  value: string
  width?: Width
}
export interface TextInputProps extends CommonInputProps {
  mask?: string
  maxLength?: number
}

export interface DateInputProps extends CommonInputProps {
  maxDate?: string
  minDate?: string
}

export interface EmailInputProps extends CommonInputProps {}

export const TextInput: React.FC<TextInputProps> = props => (
  <Input {...props} type="text" />
)

export const DateInput: React.FC<DateInputProps> = props => (
  <Input {...props} type="date" />
)

export const EmailInput: React.FC<EmailInputProps> = props => (
  <Input {...props} type="email" />
)

export const TelInput: React.FC<TextInputProps> = props => (
  <Input {...props} type="tel" />
)
