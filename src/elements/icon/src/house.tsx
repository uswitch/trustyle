/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const House: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 56 57"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M55.5 24.23V30.1H48H47.5V30.6V56.1H32.5V42.6V42.1H32H24H23.5V42.6V56.1H8.5V30.6V30.1H8H0.5V24.23L28 0.658539L55.5 24.23ZM11.5 52.6V53.1H12H20H20.5V52.6V39.1H35.5V52.6V53.1H36H44H44.5V52.6V27.1H52H52.5V26.6V25.8V25.5702L52.3257 25.4206L28.3257 4.82055L28 4.54102L27.6743 4.82055L3.67434 25.4206L3.5 25.5702V25.8V26.6V27.1H4H11.5V52.6Z" />
  </svg>
)
