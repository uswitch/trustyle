/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const ThumbDown: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9991 1.99987H19.6691C20.235 1.98986 20.785 2.18801 21.2145 2.55669C21.644 2.92538 21.9232 3.43893 21.9991 3.99987V10.9999C21.9232 11.5608 21.644 12.0744 21.2145 12.4431C20.785 12.8117 20.235 13.0099 19.6691 12.9999H16.9991M9.99905 14.9999V18.9999C9.99905 19.7955 10.3151 20.5586 10.8777 21.1212C11.4403 21.6838 12.2034 21.9999 12.9991 21.9999L16.9991 12.9999V1.99987H5.71905C5.23673 1.99442 4.76868 2.16347 4.40115 2.47587C4.03362 2.78827 3.79138 3.22297 3.71905 3.69987L2.33905 12.6999C2.29555 12.9865 2.31488 13.2792 2.39571 13.5576C2.47655 13.8361 2.61695 14.0936 2.8072 14.3124C2.99744 14.5311 3.23297 14.7059 3.49748 14.8247C3.76199 14.9434 4.04915 15.0032 4.33905 14.9999H9.99905Z"
      stroke="#F35760"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
