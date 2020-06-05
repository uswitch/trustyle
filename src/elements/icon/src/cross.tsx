/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Cross: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 32 32"
  >
    <polygon points="28.72 4.83 27.3 3.41 15.78 14.93 4.7 3.85 3.28 5.26 14.37 16.35 3.98 26.74 5.39 28.16 15.78 17.76 26.61 28.59 28.02 27.17 17.2 16.35 28.72 4.83"></polygon>
  </svg>
)
