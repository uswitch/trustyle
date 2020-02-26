/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Plus: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 17 17"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeLinecap="square"
      strokeWidth="1.71"
    >
      <path d="M8.522 1.021v15.04M16.024 8.522H.984" />
    </g>
  </svg>
)
