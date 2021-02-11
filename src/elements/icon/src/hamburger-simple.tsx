/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const HamburgerSimple: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none',
      fillRule: 'evenodd',
      stroke: color,
      strokeLinecap: 'square',
      strokeWidth: 1
    }}
    viewBox="0 0 32 32"
  >
    <mask id="path-1-inside-1" fill="white">
      <path d="M28 10H4V12H28V10Z" />
    </mask>
    <path d="M28 10H4V12H28V10Z" fill="#3E547D" />
    <path
      d="M4 10V8H2V10H4ZM28 10H30V8H28V10ZM28 12V14H30V12H28ZM4 12H2V14H4V12ZM4 12H28V8H4V12ZM26 10V12H30V10H26ZM28 10H4V14H28V10ZM6 12V10H2V12H6Z"
      fill="#3E547D"
      mask="url(#path-1-inside-1)"
    />
    <mask id="path-3-inside-2" fill="white">
      <path d="M28 20H4V22H28V20Z" />
    </mask>
    <path d="M28 20H4V22H28V20Z" fill="#3E547D" />
    <path
      d="M4 20V18H2V20H4ZM28 20H30V18H28V20ZM28 22V24H30V22H28ZM4 22H2V24H4V22ZM4 22H28V18H4V22ZM26 20V22H30V20H26ZM28 20H4V24H28V20ZM6 22V20H2V22H6Z"
      fill="#3E547D"
      mask="url(#path-3-inside-2)"
    />
  </svg>
)
