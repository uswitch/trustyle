/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Mobile: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M8.5 28V28.5H9H22H22.5V28V4V3.5H22H9H8.5V4V28ZM7.5 29.5V2.5H23.5V29.5H7.5Z" />
    <path d="M13.5 25.5V24.5H17.5V25.5H13.5Z" />
  </svg>
)
