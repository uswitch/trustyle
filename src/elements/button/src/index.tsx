/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

export type Variant = 'primary' | 'secondary'

interface Props {
  children: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant: Variant
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  variant,
  onClick
}) => (
  <button
    css={css(st.button(variant, disabled))}
    disabled={disabled}
    type={onClick ? 'button' : 'submit'}
    onClick={onClick}
  >
    {children}
  </button>
)
