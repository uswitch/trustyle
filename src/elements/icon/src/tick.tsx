/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Tick: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 32 32"
  >
    <polygon points="12.67 24.62 3.53 15.46 4.95 14.05 12.67 21.79 27.05 7.38 28.47 8.79 12.67 24.62"></polygon>
  </svg>
)
