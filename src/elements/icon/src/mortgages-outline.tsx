/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const MortgagesOutline: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none',
      stroke: 'none'
    }}
    viewBox="0 0 32 32"
  >
    <path
      d="M29.5 12.62v2.126H26V26h-6v-6.06h-4.5V26h-6V14.746H6V12.62l11.75-9.964zM10.25 24.77v.5h4.5v-6.06h6v6.06h4.5V14.014h3.5v-1.077l-.176-.15-10.5-8.917-.324-.275-.324.275-10.5 8.917-.176.15v1.077h3.5z"
      fill="#141414"
      stroke="#141414"
    />
    <path d="M2 9h21v21H2z" fill="#fff" />
    <g stroke="#141414" strokeWidth="2">
      <path d="M3.875 10.875h17.25v3.25H3.875zM3.875 17.875h17.25v3.25H3.875zM3.875 24.875h17.25v3.25H3.875z" />
    </g>
  </svg>
)
