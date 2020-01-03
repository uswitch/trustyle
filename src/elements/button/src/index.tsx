/** @jsx jsx */

import * as React from 'react'
import { jsx , useThemeUI } from 'theme-ui'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string
  href?: string
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  variant,
  onClick,
  ...props
}) => {
  const { theme } = useThemeUI();
  
  return (
    <button
      sx={{
        ...theme.buttons.base,
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        paddingX: 'sm',
        paddingY: 'base',
        variant: `buttons.${variant}`
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
