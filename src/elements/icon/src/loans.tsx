/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Loans: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none'
    }}
    viewBox="0 0 75 38"
  >
    <rect
      x="38.875"
      y="31.0444"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="3.61426"
      y="31.0444"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="37.5747"
      y="1"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="37.5747"
      y="16.674"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="1"
      y="16.674"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="38.875"
      y="23.2049"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="3.61426"
      y="23.2049"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="41.4902"
      y="8.83777"
      width="31.9604"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
    <rect
      x="3.61426"
      y="8.83777"
      width="33.2665"
      height="5.83701"
      rx="2.91851"
      stroke="#F4793B"
      strokeWidth="2"
    />
  </svg>
)
