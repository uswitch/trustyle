/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

export type Variant = 'primary' | 'secondary' | 'continue'
type IconPosition = 'left' | 'center' | 'right' | null

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  iconPosition?: IconPosition
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  variant,
  iconPosition = null,
  onClick,
  ...props
}) => {
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
