/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const SortThin: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color
    }}
    viewBox="0 0 53 39"
  >
    <path d="M39.5 7.59999V37.5H36.5V7.59999V6.37428L35.6427 7.25026L26.7962 16.2891L24.7071 14.2L38.2 0.707108L51.6928 14.2L49.5962 16.2966L40.3498 7.24274L39.5 6.41061V7.59999Z" />
    <path d="M15.4993 30.9999V32.207L16.3528 31.3535L25.5994 22.107L27.6921 24.1999L14.3967 37.4953L0.908845 24.1974L3.00321 22.1031L11.6497 30.5574L12.4993 31.3881V30.1999V2.5H15.4993V30.9999Z" />
  </svg>
)
