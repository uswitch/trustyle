/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const HeartOutline: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none',
      stroke: 'none'
    }}
    viewBox="0 0 32 32"
  >
    <g fill="#141424">
      <path d="M30.23 10.5c0-.2 0-.4-.1-.6-.5-3.5-3.3-6.3-6.7-6.8-.3 0-.6-.1-1-.1-2.6 0-4.9 1.4-6.3 3.4-1.4-2.1-3.7-3.4-6.3-3.4-.3 0-.6 0-1 .1-3.4.4-6.2 3.2-6.7 6.8l-.1.6c-.2 2 .6 4.1 1.8 5.6l12.2 13 12.2-13c1.4-1.5 2.1-3.5 2-5.6zm-3.3 4.4-10.7 11.3-10.7-11.3c-1-1.3-1.3-2.9-1.3-4.2v-.4c.4-2.6 2.4-4.7 4.9-5.1h.7c1.8 0 3.6.9 4.6 2.5l1.7 2.5 1.7-2.5c1.1-1.6 2.8-2.5 4.6-2.5h.7c2.5.3 4.6 2.4 4.9 5.1v.4c0 1.3-.2 2.9-1.1 4.2z" />
      <path d="M5.23 12.1h2c0-2.2 1.3-4 3-4v-2c-2.8 0-5 2.7-5 6z" />
    </g>
  </svg>
)
