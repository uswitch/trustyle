/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Error: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 28 28"
  >
    <path d="M16.4945 8.07417L16.5806 7.5H16H12H11.4L11.5082 8.09016L12.6082 14.0902L12.6833 14.5H13.1H15.1H15.5306L15.5944 14.0742L16.4945 8.07417ZM0.5 14C0.5 6.57614 6.57614 0.5 14 0.5C21.4239 0.5 27.5 6.57614 27.5 14C27.5 21.4239 21.4239 27.5 14 27.5C6.57614 27.5 0.5 21.4239 0.5 14ZM11.5 18C11.5 19.3761 12.6239 20.5 14 20.5C15.3761 20.5 16.5 19.3761 16.5 18C16.5 16.6239 15.3761 15.5 14 15.5C12.6239 15.5 11.5 16.6239 11.5 18Z" />
  </svg>
)
