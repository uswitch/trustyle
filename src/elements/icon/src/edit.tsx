/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Edit: React.FC<Props> = ({ color, size }) => (
  <svg
    css={[
      st.icon,
      {
        fill: color,
        stroke: color,
        strokeWidth: 0.1
      }, st.size(size)
    ]}
    viewBox="0 0 21 21"
  >
    <path d="M7.579 10.958l-.245 2.968a.74.74 0 0 0 .245.574c.14.142.33.222.53.222h.039l2.995-.143a.708.708 0 0 0 .49-.213l8.154-8.255a.752.752 0 0 0 0-1.049l-2.775-2.8a.755.755 0 0 0-1.04 0L7.81 10.499a.74.74 0 0 0-.23.46zm1.441.396l7.453-7.513 1.73 1.746-7.418 7.508-1.897.099.132-1.84z" />
    <path d="M18.551 11.534v6.514c0 .27-.217.488-.486.488H2.945a.487.487 0 0 1-.486-.488V2.952c0-.27.217-.488.486-.488h8.557V1H2.945A1.948 1.948 0 0 0 1 2.952v15.096C1 19.126 1.87 20 2.945 20h15.11A1.948 1.948 0 0 0 20 18.048v-6.514h-1.449z" />
  </svg>
)
