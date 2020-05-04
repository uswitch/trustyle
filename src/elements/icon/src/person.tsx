/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Person: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 18 22"
  >
    <path
      d="M14 6.5C14 3.74886 11.7511 1.5 9 1.5C6.24886 1.5 4 3.74886 4 6.5C4 9.25114 6.24886 11.5 9 11.5C11.7511 11.5 14 9.25114 14 6.5ZM3.5 6.5C3.5 3.47614 5.97614 1 9 1C12.0239 1 14.5 3.47614 14.5 6.5C14.5 9.52386 12.0239 12 9 12C5.97614 12 3.5 9.52386 3.5 6.5Z"
      fill={color}
      stroke={color}
    />
    <path
      d="M16.5 20.5H17V20V17C17 15.8989 16.1011 15 15 15H3C1.89886 15 1 15.8989 1 17V20V20.5H1.5H16.5ZM3 14.5H15C16.3739 14.5 17.5 15.6261 17.5 17V21H0.5V17C0.5 15.6261 1.62614 14.5 3 14.5Z"
      fill={color}
      stroke={color}
    />
  </svg>
)
