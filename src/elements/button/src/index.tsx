/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { JustifyContentProperty } from 'csstype'
import { useTheme } from '@uswitch/trustyle.theme-utils'

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
}) => {
  const theme = useTheme()
  return href ? (
    <a
      css={css(st.button(variant, disabled, justifyContent, theme))}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      css={css(st.button(variant, disabled, justifyContent, theme))}
      disabled={disabled}
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
