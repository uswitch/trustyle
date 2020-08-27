/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Warning: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4932 9.0822L16.5902 8.5H16H11.9H11.3098L11.4068 9.0822L12.4068 15.0822L12.4764 15.5H12.9H15H15.4236L15.4932 15.0822L16.4932 9.0822ZM0.870519 23.5L14 0.992318L27.1295 23.5H0.870519ZM11.5 19C11.5 20.3761 12.6239 21.5 14 21.5C15.3761 21.5 16.5 20.3761 16.5 19C16.5 17.6239 15.3761 16.5 14 16.5C12.6239 16.5 11.5 17.6239 11.5 19Z"
      fill="#FFAA55"
      stroke="#FFAA55"
    />
  </svg>
)
