/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const StarHalfFilled: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M10 15.9929V0L6.90714 6.35L0 7.36429L5 12.3071L3.82143 19.2857L10 15.9929Z"
        fill="#F7C95A"
      />
      <path
        d="M10 3.26429L11.8071 6.97143L12.1357 7.65L12.8786 7.75714L16.9571 8.35714L13.9929 11.2857L13.4643 11.8071L13.5857 12.5429L14.2857 16.6571L10.6714 14.7286L10 14.3714L9.32857 14.7286L5.71429 16.6571L6.40714 12.5429L6.52857 11.8071L6 11.2857L3.03571 8.35714L7.11429 7.75714L7.85714 7.65L8.18571 6.97143L10 3.26429ZM10 0L6.90714 6.35L0 7.36429L5 12.3071L3.82143 19.2857L10 15.9929L16.1786 19.2857L15 12.3071L20 7.36429L13.0929 6.34286L10 0Z"
        fill="#F7C95A"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="19.2857" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
