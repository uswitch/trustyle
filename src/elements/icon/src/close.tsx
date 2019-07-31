/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
}

export const Close: React.FC<Props> = ({ color }) => (
  <svg
    css={[
      st.icon,
      {
        fill: 'none',
        fillRule: 'evenodd',
        stroke: color,
        strokeLinecap: 'square',
        strokeWidth: 2
      }
    ]}
    viewBox="0 0 18 18"
  >
    <path d="M9 8.795L16.6 1 9 8.795 1.4 1 9 8.795zm0 0L1 17l8-8.205L17 17 9 8.795z" />
  </svg>
)
