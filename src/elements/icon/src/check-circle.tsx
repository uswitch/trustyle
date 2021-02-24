/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color?: string
  size?: number
}

export const CheckCircle: React.FC<Props> = ({ color = '#141424', size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 28 29"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26.5 14.5C26.5 7.62386 20.8761 2 14 2C7.02114 2 1.5 7.62658 1.5 14.5C1.5 21.3761 7.12386 27 14 27C20.8761 27 26.5 21.3761 26.5 14.5ZM0.5 14.5C0.5 7.07614 6.57614 1 14 1C21.4239 1 27.5 7.07614 27.5 14.5C27.5 21.9239 21.4239 28 14 28C6.57614 28 0.5 21.9239 0.5 14.5Z" />
    <path d="M8.40277 14.3036L9.09421 13.6122L12.2407 16.8486L12.5942 17.2122L12.9528 16.8536L19.4992 10.3072L20.1921 11.0001L12.6028 18.5894L8.40277 14.3036Z" />
  </svg>
)
