/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { darken } from '@theme-ui/color'

export type Variant = 'primary' | 'secondary' | 'continue'
type IconPosition = 'left' | 'center' | 'right' | null

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  iconPosition?: IconPosition
  inverse?: boolean
}

const invertTheme = (theme: any, variant: any = {}) => {
  const backgroundColor = variant.color
  const color = variant.backgroundColor || 'white'
  const borderColor = color

  const hoverColor = theme.colors[backgroundColor]
    ? darken(theme.colors[backgroundColor], '0.1')
    : null

  return {
    ...variant,
    backgroundColor,
    color,
    borderColor,
    borderWidth: 2,
    borderStyle: 'solid',
    ':hover': {
      backgroundColor: hoverColor
    },
    ':hover:not(:disabled)': {
      backgroundColor: hoverColor
    }
  }
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  variant,
  iconPosition = null,
  onClick,
  inverse = false,
  ...props
}) => {
  const { theme }: any = useThemeUI()
  const variantStyle = theme.buttons?.variants[variant]
  const chosenStyle = inverse ? invertTheme(theme, variantStyle) : variantStyle

  return (
    <button
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        paddingX: 'sm',
        paddingY: 'base',
        ...chosenStyle,
        ...(iconPosition
          ? {
              display: 'flex',
              justifyContent:
                iconPosition === 'left'
                  ? 'align-left'
                  : iconPosition === 'right'
                  ? 'space-between'
                  : 'center'
            }
          : {})
      }}
      disabled={disabled}
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
