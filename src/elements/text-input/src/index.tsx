import * as React from 'react'

import { Input, Width } from './common'

export interface TextInputProps {
  hasError?: boolean
  name: string
  maxLength?: number
  onBlur: () => void
  onChange: (value: string) => void
  placeholder?: string
  value: string
  width?: Width
}

export interface DateInputProps {
  hasError?: boolean
  name: string
  maxDate?: string
  minDate?: string
  onBlur: () => void
  onChange: (value: string) => void
  value: string
  width?: Width
}

export interface EmailInputProps {
  freezable?: boolean
  hasError?: boolean
  name: string
  onBlur: () => void
  onChange: (value: string) => void
  value: string
  width?: Width
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
