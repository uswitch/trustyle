/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Magnifier: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 14 14"
  >
    <path d="M8.74195 9.31669C8.88018 9.19936 9.01187 9.07461 9.13643 8.94302L9.02191 9.07901L9.03122 9.08832L8.74195 9.31669Z" />
  </svg>
)
