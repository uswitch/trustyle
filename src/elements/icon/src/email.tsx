/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Email: React.FC<Props> = ({ color, size }) => (
  <svg css={css([st.icon, st.size(size)])} viewBox="0 0 36 32">
    <defs>
      <path id="6dea2020-6a88-4cfb-9e0d-259e6dc6f795" d="M34.12 0C35.158 0 36 .748 36 1.67v19.767c0 .923-.842 1.67-1.88 1.67H1.88c-1.038 0-1.88-.747-1.88-1.67V1.67C0 .748.842 0 1.88 0h32.24zm-.63 2.23H2.51v18.647h30.98V2.231zM6.294 4.606l10.974 7.94a1.352 1.352 0 0 0 1.555-.001L29.73 4.607l1.59 1.726L20.41 14.27c-1.374.999-3.35 1.001-4.728.005L4.71 6.335l1.584-1.73z"/>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 4.667)">
      <mask id="0127df0b-f025-4e76-a8e3-64e4f74543f4" fill="#fff">
        <use xlinkHref="#6dea2020-6a88-4cfb-9e0d-259e6dc6f795"/>
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#6dea2020-6a88-4cfb-9e0d-259e6dc6f795"/>
      <g fill={color} mask="url(#0127df0b-f025-4e76-a8e3-64e4f74543f4)">
        <ellipse cx="27.5" cy="24" rx="26.5" ry="23" transform="translate(-9 -12)"/>
      </g>
    </g>
  </svg>
)
