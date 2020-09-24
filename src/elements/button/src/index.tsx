/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { darken } from '@theme-ui/color'
import get from '@uswitch/trustyle-utils.get'

import { Glyph, Icon } from '@uswitch/trustyle.icon'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'continue'
  | 'inverse'
  | 'reversed'
  | 'link'
  | 'hero'
  | 'hero.centered'
type IconPosition = 'left' | 'center' | 'right' | null

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  iconPosition?: IconPosition
  inverse?: boolean
  size?: string
  beforeIcon?: string
  afterIcon?: string
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
    '@media (hover: hover)': {
      // prevents sticky hover bug on iOS
      ':hover': {
        backgroundColor: hoverColor
      },
      ':hover:not(:disabled)': {
        backgroundColor: hoverColor
      }
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
  beforeIcon,
  afterIcon,
  ...props
}) => {
  const { theme }: any = useThemeUI()
  const variantStyle = get(theme, `elements.buttons.variants.${variant}`)
  const chosenStyle = inverse ? invertTheme(theme, variantStyle) : variantStyle

  return (
    <button
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',

        fontSize: get(
          theme,
          `elements.buttons.base.btnSize.${size}.fontSize`,
          'base'
        ),
        paddingX: get(
          theme,
          `elements.buttons.base.btnSize.${size}.paddingX`,
          'sm'
        ),
        paddingY: get(
          theme,
          `elements.buttons.base.btnSize.${size}.paddingY`,
          'base'
        ),
        variant: get(theme, `elements.buttons.variants.${variant}`),

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
      {beforeIcon && (
        <Icon color="white" glyph={beforeIcon as Glyph} direction="left" />
      )}
      {children}
      {afterIcon && (
        <Icon color="white" glyph={afterIcon as Glyph} direction="right" />
      )}
    </button>
  )
}
