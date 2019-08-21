/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

import { Direction } from '.'

interface Props {
  color: string
  direction?: Direction
  size?: number
}

export const Caret: React.FC<Props> = ({ color, direction = 'up', size }) => (
  <svg
    css={[st.icon, st.rotate(direction), st.size(size), { fill: color }]}
    viewBox="0 0 120 120"
  >
    <path d="M 5.067303,79.355139 55.218287,26.773283 c 2.186148,-2.194309 3.091615,-2.969251 4.60071,-2.969251 1.509096,-0.0081 2.316669,0.774942 4.600711,3.018196 l 50.828042,53.348639 c 6.84396,7.227354 -3.27925,17.831823 -10.17214,10.661571 L 59.810835,43.21837 15.247593,89.98408 C 7.857094,97.733499 -2.2660959,87.120873 5.067303,79.338823 Z" />
  </svg>
)
