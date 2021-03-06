/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Four: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="-1 -1 54 54"
  >
    <path d="M32.9731 28.328H30.6931V17.912H27.1411L19.1491 27.992V31.064H27.4531V35H30.6931V31.064H32.9731V28.328ZM27.5251 21.392V28.328H22.0291L27.5251 21.392Z" />
    <path d="M26 48C13.8497 48 4 38.1503 4 26H0C0 40.3594 11.6406 52 26 52V48ZM48 26C48 38.1503 38.1503 48 26 48V52C40.3594 52 52 40.3594 52 26H48ZM26 4C38.1503 4 48 13.8497 48 26H52C52 11.6406 40.3594 0 26 0V4ZM26 0C11.6406 0 0 11.6406 0 26H4C4 13.8497 13.8497 4 26 4V0Z" />
  </svg>
)
