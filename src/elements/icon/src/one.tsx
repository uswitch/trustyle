/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const One: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="-1 -1 54 54"
  >
    <path d="M29.3051 17.912H26.7371C26.2091 20.36 24.7211 21.032 22.5131 21.176L22.1291 21.2V23.48H26.0651V35H29.3051V17.912Z" />
    <path d="M26 48C13.8497 48 4 38.1503 4 26H0C0 40.3594 11.6406 52 26 52V48ZM48 26C48 38.1503 38.1503 48 26 48V52C40.3594 52 52 40.3594 52 26H48ZM26 4C38.1503 4 48 13.8497 48 26H52C52 11.6406 40.3594 0 26 0V4ZM26 0C11.6406 0 0 11.6406 0 26H4C4 13.8497 13.8497 4 26 4V0Z" />
  </svg>
)
