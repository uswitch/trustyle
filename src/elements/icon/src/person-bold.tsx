/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const PersonBold: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44.5 20C44.5 13.1239 38.8761 7.5 32 7.5C25.1239 7.5 19.5 13.1239 19.5 20C19.5 26.8761 25.1239 32.5 32 32.5C38.8761 32.5 44.5 26.8761 44.5 20ZM16.5 20C16.5 11.4761 23.4761 4.5 32 4.5C40.5239 4.5 47.5 11.4761 47.5 20C47.5 28.5239 40.5239 35.5 32 35.5C23.4761 35.5 16.5 28.5239 16.5 20Z"
      fill={color}
      stroke={color}
    />
    <path
      d="M52 56.5H52.5V56V48C52.5 45.5239 50.4761 43.5 48 43.5H16C13.5239 43.5 11.5 45.5239 11.5 48V56V56.5H12H52ZM16 40.5H48C52.1239 40.5 55.5 43.8761 55.5 48V59.5H8.5V48C8.5 43.8761 11.8761 40.5 16 40.5Z"
      fill={color}
      stroke={color}
    />
  </svg>
)
