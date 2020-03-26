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

export const multibrandOptions = {
  name: 'badge',
  themes: {
    money: {
      base: {
        paddingX: 'base',
        paddingY: [3, 5.5],
        fontSize: ['xs', 'sm'],
        fontWeight: 'bold',
        borderRadius: '50vh'
      },
      variants: {
        primary: {
          variant: 'badge.base',
          backgroundColor: 'plum',
          color: 'white'
        }
      }
    }
  }
}

export default Badge
