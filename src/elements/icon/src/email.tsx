/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Email: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 48 48"
  >
    <path
      d="M45.494 0A2.507 2.507 0 0 1 48 2.506v29.65a2.506 2.506 0 0 1-2.506 2.505H2.506A2.506 2.506 0 0 1 0 32.155V2.506A2.507 2.507 0 0 1 2.506 0h42.988zm-.84 3.346H3.346v27.97h41.308V3.346zM8.391 6.908l14.632 11.91c.604.491 1.471.49 2.073-.003L39.641 6.911 41.76 9.5 27.215 21.405a4.987 4.987 0 0 1-6.304.008L6.279 9.503 8.39 6.908z"
      transform="translate(0 6)"
    />
  </svg>
)
