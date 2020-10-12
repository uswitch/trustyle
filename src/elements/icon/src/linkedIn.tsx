/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const LinkedIn: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 22 24"
  >
    <path
      d="M18 18H14V11.25C14 10.19 12.81 9.31 11.75 9.31C10.69 9.31 10 10.19 10 11.25V18H6V6H10V8C10.66 6.93 12.36 6.24 13.5 6.24C16 6.24 18 8.28 18 10.75V18ZM4 18H0V6H4V18ZM2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0Z"
      transform="translate(0 6)"
    />
  </svg>
)
