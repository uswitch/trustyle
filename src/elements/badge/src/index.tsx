/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  variant?: string
}

const Badge: React.FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <div
      sx={{
        display: 'inline-block',
        variant: `badge.variants.${variant}`
      }}
    >
      {children}
    </div>
  )
}

export const themes = {
  money: {
    foo: 'bar'
  }
}

export default Badge
