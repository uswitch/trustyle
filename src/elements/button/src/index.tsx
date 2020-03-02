/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

export type Variant = 'primary' | 'secondary' | 'continue' | 'hollow'
type IconPosition = 'left' | 'center' | 'right' | null

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  iconPosition?: IconPosition
  size?: string
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  variant,
  iconPosition = null,
  onClick,
  size = 'large',
  ...props
}) => {
  const { theme }: any = useThemeUI()

  return (
    <button
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        paddingX: 'sm',
        paddingY: 'base',
        variant: `buttons.variants.${variant}`,
        width: theme.buttons.base.btnSize
          ? theme.buttons.base.btnSize[size]
          : theme.buttons.variants[variant].width,
        justifyContent: 'center',
        alignItems: 'center',

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
