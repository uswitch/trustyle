/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Checkmark: React.FC<Props> = ({ color = '#91CA50', size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.0727 19.1514L13.4326 19.5157L13.7882 19.1471L21.8917 10.7471L22.2307 10.3958L21.8875 10.0485L20.504 8.64854L20.1483 8.28867L19.7927 8.64855L13.3295 15.1887L10.2263 12.0485L9.87068 11.6887L9.51504 12.0485L8.13152 13.4485L7.7842 13.8L8.13152 14.1514L13.0727 19.1514ZM1.47656 14C1.47656 6.57055 7.48415 0.5 14.8119 0.5C22.1396 0.5 28.1472 6.57055 28.1472 14C28.1472 21.4295 22.1396 27.5 14.8119 27.5C7.48415 27.5 1.47656 21.4295 1.47656 14Z" />
  </svg>
)
