/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Clock: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M2.5 16C2.5 8.57614 8.57614 2.5 16 2.5C23.4239 2.5 29.5 8.57614 29.5 16C29.5 23.4239 23.4239 29.5 16 29.5C8.57614 29.5 2.5 23.4239 2.5 16ZM3.5 16C3.5 22.8761 9.12386 28.5 16 28.5C22.8761 28.5 28.5 22.8761 28.5 16C28.5 9.12386 22.8761 3.5 16 3.5C9.12386 3.5 3.5 9.12386 3.5 16Z" />
    <path d="M16.5 17V17.5H17H23.5V18.5H15.5V18.1V17V8.5H16.5V17Z" />
  </svg>
)
