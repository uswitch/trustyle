/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

import { Direction } from '.'

interface Props {
  direction: Direction
  color: string
}

export const Arrow: React.FC<Props> = ({ color, direction = 'up' }) => (
  <svg
    css={css([st.icon, st.rotate(direction), { fill: color }])}
    viewBox="0 0 120 120"
  >
    <path
      fillRule="evenodd"
      d="M 69.00383,118.24532 V 25.238146 L 109.05606,60.91003 119.38664,50.713297 66.668704,3.7571812 C 63.838543,1.2349911 59.418295,1.1741049 56.508132,3.6119106 L 0.45000101,50.567955 10.440558,61.055301 54.002991,24.567745 V 118.2454 Z"
    />
  </svg>
)
