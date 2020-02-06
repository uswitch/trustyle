/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
  return (
    <a
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: 'base',
        paddingX: 'sm',
        paddingY: 'base',
        display: 'inline-block',
        textDecoration: 'none',
        variant: `buttons.variants.${variant}`
      }}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}
