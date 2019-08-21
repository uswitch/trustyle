/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Close: React.FC<Props> = ({ color, size }) => (
  <svg
    css={[
      st.icon,
      {
        fill: 'none',
        fillRule: 'evenodd',
        stroke: color,
        strokeLinecap: 'square',
        strokeWidth: 2
      },
      st.size(size)
    ]}
    viewBox="0 0 18 18"
  >
    <path d="M9 8.795L16.6 1 9 8.795 1.4 1 9 8.795zm0 0L1 17l8-8.205L17 17 9 8.795z" />
  </svg>
)
