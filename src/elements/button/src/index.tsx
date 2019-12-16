/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { JustifyContentProperty } from 'csstype'

import * as st from './styles'

export type Variant = 'primary' | 'secondary' | 'outline'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  justifyContent?: JustifyContentProperty
  variant: Variant
  href?: string
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  justifyContent,
  variant,
  href,
  onClick,
  ...props
}) =>
  href ? (
    <a css={css(st.button(variant, disabled, justifyContent))} href={href}>
      {children}
    </a>
  ) : (
    <button
      css={css(st.button(variant, disabled, justifyContent))}
      disabled={disabled}
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
