/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Calendar: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M24.5 5V5.5H25H29.5V29.5H2.5V12V10V5.5H7H7.5V5V2.5H8.5V5V5.5H9H23H23.5V5V2.5H24.5V5ZM4 6.5H3.5V7V10V10.5H4H28H28.5V10V7V6.5H28H4ZM3.5 28V28.5H4H28H28.5V28V12V11.5H28H4H3.5V12V28Z" />
    <path d="M6.5 25.5V21.5H12.5V25.5H6.5Z" />
  </svg>
)
