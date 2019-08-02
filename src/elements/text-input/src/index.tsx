import React from 'react'

import { Input, Width } from './common'

interface TextProps {
  hasError?: boolean
  name: string
  maxLength?: number
  onBlur: () => void
  onChange: (value: string) => void
  value: string
  width?: Width
}

interface DateProps {
  hasError?: boolean
  name: string
  maxDate?: string
  minDate?: string
  onBlur: () => void
  onChange: (value: string) => void
  value: string
  width?: Width
}

interface EmailProps {
  freezable?: boolean
  hasError?: boolean
  name: string
  onBlur: () => void
  onChange: (value: string) => void
  value: string
  width?: Width
}

export const TextInput: React.FC<TextProps> = props => (
  <Input {...props} type="text" />
)

export const DateInput: React.FC<DateProps> = props => (
  <Input {...props} type="date" />
)

export const EmailInput: React.FC<EmailProps> = props => (
  <Input {...props} type="email" />
)

export const TelInput: React.FC<TextProps> = props => (
  <Input {...props} type="tel" />
)
