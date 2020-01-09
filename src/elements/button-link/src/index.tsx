/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: string
  href?: string
}

export const ButtonLink: React.FC<Props> = ({
  children,
  variant,
  href,
  ...props
}) => {
  const { theme }: any = useThemeUI()

  return (
    <a
      sx={{
        ...theme.buttons.base,
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        paddingX: 'sm',
        paddingY: 'base',
        display: 'inline-block',
        textDecoration: 'none',
        variant: `buttons.${variant}`
      }}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}
