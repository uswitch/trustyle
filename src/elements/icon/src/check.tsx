/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Check: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color,
      strokeWidth: 0.1
    }}
    viewBox="0 0 12 9"
  >
    <path d="M4.5 8.66667L0 4.08333L1.16667 2.91667L4.5 6.33333L10.8333 0L12 1.16667L4.5 8.66667Z" />
  </svg>
)
