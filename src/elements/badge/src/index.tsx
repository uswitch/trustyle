/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string
  color?: string
  variant?: string
}

const Badge: React.FC<Props> = ({ content, variant = 'primary' }) => {
  return (
    <div
      sx={{
        variant: `badge.variants.${variant}`
      }}
    >
      {content}
    </div>
  )
}

export default Badge
