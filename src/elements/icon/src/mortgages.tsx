/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Mortgages: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none'
    }}
    viewBox="0 0 66 64"
  >
    <mask id="path-1-inside-1" fill="white">
      <rect x="10.4536" y="24.4988" width="44.7882" height="39.1992" rx="2" />
    </mask>
    <rect
      x="10.4536"
      y="24.4988"
      width="44.7882"
      height="39.1992"
      rx="2"
      stroke="#FAA73F"
      strokeWidth="6"
      mask="url(#path-1-inside-1)"
    />
    <path
      d="M32.8166 2.3505C33.008 2.17432 33.3025 2.17432 33.4939 2.35049L34.499 1.25857L33.4939 2.3505L56.8125 23.816C57.1476 24.1245 56.9293 24.6839 56.4739 24.6839H9.8366C9.38111 24.6839 9.16285 24.1245 9.49797 23.816L32.8166 2.3505Z"
      stroke="#FAA73F"
      strokeWidth="3"
    />
    <rect
      x="18.6235"
      y="32.851"
      width="9.94351"
      height="10.2498"
      rx="1"
      stroke="#FAA73F"
      strokeWidth="2"
    />
    <rect
      x="38.3281"
      y="43.2632"
      width="9.94351"
      height="19.4371"
      rx="1"
      stroke="#FAA73F"
      strokeWidth="2"
    />
  </svg>
)
