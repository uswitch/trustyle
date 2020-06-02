/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  variant?: string
}

const Badge: React.FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <div
      sx={{
        display: 'inline-block',
        variant: `badge.variants.${variant}`
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge
