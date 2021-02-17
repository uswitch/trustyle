/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const BookmarkFilled: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.6807 14.534L4.625 19.5602V4.125C4.625 2.88864 5.63864 1.875 6.875 1.875H15.125C16.3614 1.875 17.375 2.88864 17.375 4.125V19.5602L11.3193 14.534L11 14.269L10.6807 14.534Z" />
  </svg>
)
