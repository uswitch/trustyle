/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Facebook2: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: 'none'
    }}
    viewBox="0 0 9 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 0V3.6H7.2C6.6 3.6 6.3 4.3 6.3 5V7.2H9V10.8H6.3V18H2.7V10.8H0V7.2H2.7V3.6C2.7 1.6 4.3 0 6.3 0H9Z" />
  </svg>
)
