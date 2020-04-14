/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { darken } from '@theme-ui/color'
import get from '@uswitch/trustyle-utils.get'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'continue'
  | 'inverse'
  | 'reversed'
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
  const variantStyle = get(theme, `buttons.variants.${variant}`)
  const chosenStyle = inverse ? invertTheme(theme, variantStyle) : variantStyle

  return (
    <button
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',

        fontSize: get(theme, `buttons.base.btnSize.${size}.fontSize`, 'base'),
        paddingX: get(theme, `buttons.base.btnSize.${size}.paddingX`, 'sm'),
        paddingY: get(theme, `buttons.base.btnSize.${size}.paddingY`, 'base'),
        height: get(theme, `buttons.base.btnSize.${size}.height`, 'base'),
        variant: get(theme, `buttons.variants.${variant}`),

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
