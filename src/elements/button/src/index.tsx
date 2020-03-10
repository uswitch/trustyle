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
  size?: string
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
  size = 'large',
  inverse = false,
  ...props
}) => {
  const { theme }: any = useThemeUI()
  const variantStyle = theme.buttons?.variants[variant]
  const chosenStyle = inverse ? invertTheme(theme, variantStyle) : variantStyle

  const btnSize = theme.buttons?.base?.btnSize

  return (
    <button
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',

        fontSize: btnSize ? btnSize[size].fontSize : 'base',
        paddingX: btnSize ? btnSize[size].paddingX : 'sm',
        paddingY: btnSize ? btnSize[size].paddingY : 'base',
        height: btnSize ? btnSize[size].height : 'base',
        variant: `buttons.variants.${variant}`,

        justifyContent: 'center',
        alignItems: 'center',
        ...chosenStyle,

        ...(iconPosition
          ? {
              display: 'flex',
              justifyContent:
                iconPosition === 'left'
                  ? 'flex-start'
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
