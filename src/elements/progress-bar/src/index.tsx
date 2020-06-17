/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props {
  current: number
  max: number
  className?: string
}

export const ProgressBar: React.FC<Props> = ({ current, max, className }) => {
  return (
    <span
      sx={{
        display: 'block',
        height: ['3px', '7.4px'],
        width: '100%',
        variant: 'progressBar.main'
      }}
      className={className}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={max + 1}
    >
      <span
        sx={{
          display: 'block',
          height: '100%',
          width: `${(current / max) * 100}%`,
          variant: 'progressBar.progress'
        }}
      />
    </span>
  )
}
