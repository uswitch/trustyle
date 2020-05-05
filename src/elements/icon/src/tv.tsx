/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Tv: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M21.0358 23.1857L22.7615 27.5H9.23852L10.9642 23.1857L11.2385 22.5H10.5H2.5V4.5H29.5V22.5H21.5H20.7615L21.0358 23.1857ZM11.0358 25.8143L10.7615 26.5H11.5H20.5H21.2385L20.9642 25.8143L19.7642 22.8143L19.6385 22.5H19.3H12.7H12.3615L12.2358 22.8143L11.0358 25.8143ZM28 21.5H28.5V21V6V5.5H28H4H3.5V6V21V21.5H4H28Z" />
    <path d="M25.5 18C25.5 18.2761 25.2761 18.5 25 18.5C24.7239 18.5 24.5 18.2761 24.5 18C24.5 17.7239 24.7239 17.5 25 17.5C25.2761 17.5 25.5 17.7239 25.5 18Z" />
  </svg>
)
