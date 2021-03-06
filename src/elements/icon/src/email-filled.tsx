/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const EmailFilled: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 22 20"
  >
    <path
      d="M10.6922 11.619L11 11.8595L11.3078 11.619L18.5078 5.99401L18.8941 5.6922L18.6 5.3L17.7 4.1L17.3954 3.69393L16.994 4.00457L11 8.64278L5.00599 4.00457L4.60455 3.69393L4.3 4.1L3.4 5.3L3.10585 5.6922L3.49218 5.99401L10.6922 11.619ZM21 15H1V1H21V15Z"
      transform="translate(0 6)"
    />
  </svg>
)
