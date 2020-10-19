/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const FilledArrow: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 8.90015C0 8.07172 0.671573 7.40015 1.5 7.40015H10V10.4001H1.5C0.671573 10.4001 0 9.72857 0 8.90015Z" />
    <path d="M17.1716 8.256C17.614 8.65334 17.614 9.34666 17.1716 9.744L10.9896 15.296C10.3459 15.8742 9.32143 15.4173 9.32143 14.552L9.32143 3.44796C9.32143 2.58269 10.3459 2.12581 10.9896 2.70397L17.1716 8.256Z" />
  </svg>
)
