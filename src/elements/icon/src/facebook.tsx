/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Facebook: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 24 24"
  >
    <path d="M9.25 14.175V14.675H9.75H12.25V21.925H2.625C2.27897 21.925 2 21.6772 2 21.3V2.625C2 2.27897 2.24781 2 2.625 2H21.375C21.6989 2 22 2.30114 22 2.625V21.3C22 21.6239 21.6989 21.925 21.375 21.925H16.25V14.675H18.75H19.25V14.175V11.175V10.675H18.75H16.25V9C16.25 8.52117 16.3127 8.27844 16.4108 8.14907C16.4819 8.0554 16.6489 7.925 17.175 7.925H18.75H19.25V7.425V4.8V4.40961L18.8713 4.31492C18.6747 4.26578 18.3357 4.22627 17.9419 4.19815C17.5356 4.16913 17.0362 4.15001 16.5 4.15001C15.26 4.15001 14.1799 4.56661 13.4135 5.39876C12.6511 6.22652 12.25 7.40962 12.25 8.84999V10.675H9.75H9.25V11.175V14.175Z" />
  </svg>
)
