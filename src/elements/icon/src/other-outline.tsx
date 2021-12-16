/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const OtherOutline: React.FC<Props> = ({ size }) => (
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
      d="M6 26v-7.896h7.896V26zm8.195-7.896zM6 13.896V6h7.896v7.896zm12.104 0V6H26v7.896zM6 26.3zM18.104 26v-7.896H26V26z"
      stroke="#141424"
      strokeWidth="2"
    />
  </svg>
)
