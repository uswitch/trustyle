/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const StarFilled: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.29378 1L10.5367 5.56846L15.5524 6.30555L11.9231 9.8596L12.7796 14.8805L8.29378 12.5087L3.80795 14.8805L4.66447 9.8596L1.03516 6.30555L6.05086 5.56846L8.29378 1Z"
      fill="#EFB623"
      stroke="#EFB623"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
