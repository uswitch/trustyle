/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const CreditCardOutline: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none',
      stroke: 'none'
    }}
    viewBox="0 0 32 32"
  >
    <g fill="#141414" stroke="#141414">
      <path d="M28 23.5h.5v-10h-25v10H4zM3.5 10v.5h25v-3h-25V8zm-1 0V6.5h27v18h-27V14z" />
      <path d="M6.5 19.5h4v1h-4z" />
    </g>
  </svg>
)
