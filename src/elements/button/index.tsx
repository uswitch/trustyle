/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'

import { cobaltBlue } from '../../styles/colors'
import { Icon } from '../icon'

import * as st from './styles'

export type Variant = 'primary' | 'secondary'

interface Props {
  disabled?: boolean
  label: string
  variant: Variant
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({
  disabled = false,
  label,
  variant,
  onClick
}) => (
  <button
    css={css(st.button(variant, disabled))}
    disabled={disabled}
    type={onClick ? 'button' : 'submit'}
    onClick={onClick}
  >
    <span css={st.text}>{label}</span>
    {variant === 'secondary' && (
      <span css={st.arrow}>
        <Icon glyph="arrow" color={cobaltBlue} direction="right" />
      </span>
    )}
  </button>
)
