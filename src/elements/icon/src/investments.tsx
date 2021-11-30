/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Investments: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none'
    }}
    viewBox="0 0 66 59"
  >
    <path fill="#FAA73F" d="M.072.041h2.005v57.714H.072z" />
    <path fill="#FAA73F" d="M.071 56.88h62.523v2.005H.071z" />
    <path
      d="M.946 49.667 20.84 33.053l5.465 9.4c4.518-5.61 14.647-15.959 14.647-15.959s3.28 2.478 4.373 3.28L65 15.564"
      stroke="#FAA73F"
      strokeWidth="2"
    />
  </svg>
)
