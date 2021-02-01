/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color?: string
  size?: number
}

export const Info: React.FC<Props> = ({ color = '#fff', size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11.27 7.638C11.45 7.818 11.666 7.908 11.918 7.908H12.026C12.278 7.908 12.494 7.818 12.674 7.638C12.854 7.458 12.944 7.242 12.944 6.99V6.918C12.944 6.666 12.854 6.45 12.674 6.27C12.494 6.09 12.278 6 12.026 6H11.918C11.666 6 11.45 6.09 11.27 6.27C11.09 6.45 11 6.666 11 6.918V6.99C11 7.242 11.09 7.458 11.27 7.638ZM11.378 16.816C11.534 16.972 11.726 17.05 11.954 17.05C12.182 17.05 12.374 16.972 12.53 16.816C12.698 16.66 12.782 16.468 12.782 16.24V10.518C12.782 10.278 12.704 10.08 12.548 9.924C12.392 9.768 12.194 9.69 11.954 9.69C11.726 9.69 11.534 9.774 11.378 9.942C11.222 10.098 11.144 10.29 11.144 10.518V16.24C11.144 16.468 11.222 16.66 11.378 16.816Z"
    />
  </svg>
)
