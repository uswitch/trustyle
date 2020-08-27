/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const ArrowCircle: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="23.5" fill="white" stroke="#141424" />
    <path
      d="M30.2669 24.7245H15.1914V24.2551H30.12H31.3154L30.476 23.404L25.5349 18.3943L25.8569 18.0722L32.2818 24.5632L25.8693 31.0418L25.5253 30.6732L30.6205 25.578L31.474 24.7245H30.2669Z"
      fill="#141424"
      stroke="#141424"
    />
  </svg>
)
