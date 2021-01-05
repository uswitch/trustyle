/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Information: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0.5C5.225 0.5 0.5 5.225 0.5 11C0.5 16.775 5.225 21.5 11 21.5C16.775 21.5 21.5 16.775 21.5 11C21.5 5.225 16.85 0.5 11 0.5ZM9.5 11V17H12.5V11H9.5ZM12.875 7.625C12.875 8.66053 12.0355 9.5 11 9.5C9.96447 9.5 9.125 8.66053 9.125 7.625C9.125 6.58947 9.96447 5.75 11 5.75C12.0355 5.75 12.875 6.58947 12.875 7.625Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0.5C5.225 0.5 0.5 5.225 0.5 11C0.5 16.775 5.225 21.5 11 21.5C16.775 21.5 21.5 16.775 21.5 11C21.5 5.225 16.85 0.5 11 0.5ZM9.5 11V17H12.5V11H9.5ZM12.875 7.625C12.875 8.66053 12.0355 9.5 11 9.5C9.96447 9.5 9.125 8.66053 9.125 7.625C9.125 6.58947 9.96447 5.75 11 5.75C12.0355 5.75 12.875 6.58947 12.875 7.625Z"
    />
    <path
      d="M9.5 17H8.5V18H9.5V17ZM9.5 11V10H8.5V11H9.5ZM12.5 17V18H13.5V17H12.5ZM12.5 11H13.5V10H12.5V11ZM1.5 11C1.5 5.77729 5.77729 1.5 11 1.5V-0.5C4.67272 -0.5 -0.5 4.67272 -0.5 11H1.5ZM11 20.5C5.77729 20.5 1.5 16.2227 1.5 11H-0.5C-0.5 17.3273 4.67272 22.5 11 22.5V20.5ZM20.5 11C20.5 16.2227 16.2227 20.5 11 20.5V22.5C17.3273 22.5 22.5 17.3273 22.5 11H20.5ZM11 1.5C16.2931 1.5 20.5 5.77262 20.5 11H22.5C22.5 4.67738 17.4069 -0.5 11 -0.5V1.5ZM10.5 17V11H8.5V17H10.5ZM12.5 16H9.5V18H12.5V16ZM11.5 11V17H13.5V11H11.5ZM9.5 12H12.5V10H9.5V12ZM11 10.5C12.5878 10.5 13.875 9.21282 13.875 7.625H11.875C11.875 8.10825 11.4832 8.5 11 8.5V10.5ZM8.125 7.625C8.125 9.21282 9.41218 10.5 11 10.5V8.5C10.5168 8.5 10.125 8.10825 10.125 7.625H8.125ZM11 4.75C9.41218 4.75 8.125 6.03718 8.125 7.625H10.125C10.125 7.14175 10.5168 6.75 11 6.75V4.75ZM13.875 7.625C13.875 6.03718 12.5878 4.75 11 4.75V6.75C11.4832 6.75 11.875 7.14175 11.875 7.625H13.875Z"
      mask="url(#path-1-inside-1)"
    />
  </svg>
)
