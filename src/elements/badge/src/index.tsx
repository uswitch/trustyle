/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import money from './themes/money'

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

export const multibrandOptions = {
  name: 'badge',
  themes: {
    money
  }
}

export default Badge
