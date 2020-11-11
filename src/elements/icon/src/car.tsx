/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Car: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 22 18"
  >
    <path d="M5.5 10.75V10.25H8.25V10.75H5.5Z" fill="black" stroke="#141424" />
    <path
      d="M13.75 10.75V10.25H16.5V10.75H13.75Z"
      fill="black"
      stroke="#141424"
    />
    <path
      d="M19.3806 6.92213L19.5008 7.25H19.85H21V7.75H20H19.5V8.25V13.8V15V17.5H17.5V15V14.5H17H5H4.5V15V17.5H2.5V15V13.8V8.25V7.75H2H1V7.25H2.22499H2.57421L2.69443 6.92213L5.0492 0.5H17.0258L19.3806 6.92213ZM5.67502 1H5.32443L5.20495 1.3296L3.02993 7.3296L3 7.41217V7.5V13.5V14H3.5H18.5H19V13.5V7.5V7.40933L18.9682 7.32444L16.7182 1.32444L16.5965 1H16.25H5.67502Z"
      fill="black"
      stroke="#141424"
    />
  </svg>
)
