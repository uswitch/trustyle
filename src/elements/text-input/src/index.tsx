import * as React from 'react'

import { Input, Width } from './common'

export interface CommonInputProps {
  freezable?: boolean
  hasError?: boolean
  label?: string
}
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, CommonInputProps {
  mask?: string
  maxLength?: number
  name: string
  value?: string
  width?: Width
}

export interface DateInputProps extends CommonInputProps {
  maxDate?: string
  minDate?: string
  name: string
}

export interface EmailInputProps extends CommonInputProps {
  name: string
}

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
