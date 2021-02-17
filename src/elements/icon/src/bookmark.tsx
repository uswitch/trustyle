/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Bookmark: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 18 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.6793 21.8712L16.5 22.5571V21.4875V4.25C16.5 3.01136 15.4886 2 14.25 2H3.75C2.51136 2 1.5 3.01136 1.5 4.25V21.4875V22.5571L2.32065 21.8712L8.18317 16.9712L8.18548 16.9692L9 16.28L9.81451 16.9692L9.81683 16.9711L15.6793 21.8712ZM9.31933 17.6028L9 17.3377L8.68067 17.6028L0.75 24.1852V4.25C0.75 2.60114 2.10114 1.25 3.75 1.25H14.25C15.8989 1.25 17.25 2.60114 17.25 4.25V24.1852L9.31933 17.6028Z" />
  </svg>
)
