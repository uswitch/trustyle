/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Filters: React.FC<Props> = ({ color, size }) => (
  <svg
    viewBox="0 0 21 21"
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color,
      strokeWidth: 0.1
    }}
  >
    <path d="m 8.4650847,14.830475 a 2.074,2.074 0 1 0 -4.148,0 2.074,2.074 0 0 0 4.147,0 z m -5.652,0.722 h -3.25799995 v -1.574 H 2.8410847 a 3.65,3.65 0 1 1 -0.028,1.575 z m 18.8250003,-1.575 v 1.575 h -9.417 v -1.574 h 9.417 z M -0.44491525,7.1494746 v -1.575 H 7.9880847 v 1.575 z m 17.92600025,-1.575 h 4.157 v 1.575 h -4.137 a 3.65,3.65 0 1 1 -0.02,-1.575 z m -1.48,0.833 a 2.074,2.074 0 1 0 -4.147,0 2.074,2.074 0 0 0 4.148,0 z" />
  </svg>
)
