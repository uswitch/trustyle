/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

import { Direction } from '.'

interface Props {
  color: string
  direction?: Direction
  size?: number
}

export const CaretFinal: React.FC<Props> = ({
  color,
  direction = 'up',
  size
}) => (
  <svg
    sx={{
      display: 'block',
      ...st.rotate(direction),
      ...st.size(size),
      fill: 'none',
      stroke: color,
      strokeLinecap: 'square',
      strokeWidth: 2
    }}
    viewBox="0 0 17 13"
  >
    <path d="M1,12l7.5-7.5L16,12 M16,1H1" />
  </svg>
)
