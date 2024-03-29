/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const PersonCircle: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      // fill: color
      stroke: color
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#F3F3F4" stroke="none" />
    <mask id="path-2-inside-1" fill="white">
      <path d="M12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6ZM12 5C9.8 5 8 6.8 8 9C8 11.2 9.8 13 12 13C14.2 13 16 11.2 16 9C16 6.8 14.2 5 12 5Z" />
    </mask>
    <path
      d="M12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6ZM12 5C9.8 5 8 6.8 8 9C8 11.2 9.8 13 12 13C14.2 13 16 11.2 16 9C16 6.8 14.2 5 12 5Z"
      fill="#141424"
    />
    <path
      d="M12 7C13.0977 7 14 7.90228 14 9H16C16 6.79772 14.2023 5 12 5V7ZM14 9C14 10.0977 13.0977 11 12 11V13C14.2023 13 16 11.2023 16 9H14ZM12 11C10.9023 11 10 10.0977 10 9H8C8 11.2023 9.79772 13 12 13V11ZM10 9C10 7.90228 10.9023 7 12 7V5C9.79772 5 8 6.79772 8 9H10ZM12 4C9.24772 4 7 6.24772 7 9H9C9 7.35228 10.3523 6 12 6V4ZM7 9C7 11.7523 9.24772 14 12 14V12C10.3523 12 9 10.6477 9 9H7ZM12 14C14.7523 14 17 11.7523 17 9H15C15 10.6477 13.6477 12 12 12V14ZM17 9C17 6.24772 14.7523 4 12 4V6C13.6477 6 15 7.35228 15 9H17Z"
      fill="#141424"
      mask="url(#path-2-inside-1)"
    />
    <mask id="path-4-inside-2" fill="white">
      <path d="M16 15C16.55 15 17 15.45 17 16V18H7V16C7 15.45 7.45 15 8 15H16ZM16 14H8C6.9 14 6 14.9 6 16V19H18V16C18 14.9 17.1 14 16 14Z" />
    </mask>
    <path
      d="M16 15C16.55 15 17 15.45 17 16V18H7V16C7 15.45 7.45 15 8 15H16ZM16 14H8C6.9 14 6 14.9 6 16V19H18V16C18 14.9 17.1 14 16 14Z"
      fill="#141424"
    />
    <path
      d="M17 18V19H18V18H17ZM7 18H6V19H7V18ZM6 19H5V20H6V19ZM18 19V20H19V19H18ZM16 16H18C18 14.8977 17.1023 14 16 14V16ZM16 16V18H18V16H16ZM17 17H7V19H17V17ZM8 18V16H6V18H8ZM8 16V14C6.89772 14 6 14.8977 6 16H8ZM8 16H16V14H8V16ZM16 13H8V15H16V13ZM8 13C6.34772 13 5 14.3477 5 16H7C7 15.4523 7.45228 15 8 15V13ZM5 16V19H7V16H5ZM6 20H18V18H6V20ZM19 19V16H17V19H19ZM19 16C19 14.3477 17.6523 13 16 13V15C16.5477 15 17 15.4523 17 16H19Z"
      fill="#141424"
      mask="url(#path-4-inside-2)"
    />
  </svg>
)
