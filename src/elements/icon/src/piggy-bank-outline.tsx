/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const PiggyBankOutline: React.FC<Props> = ({
  color = '#141414',
  size
}) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none',
      stroke: 'none'
    }}
    viewBox="0 0 32 32"
  >
    <g stroke={color}>
      <path
        d="M15.5 10.5v-1h3v1zM10.4 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        fill={color}
      />
      <path
        d="m14.112 6.152.13.848H19.5c3.925 0 7.638 2.282 9.173 5.876 2.004 5.214-.183 10.106-4.09 12.468l-.483.292V28h-2.767c-.927-.49-1.602-1.325-2-2.359L19.087 25H16.013l-.246.641c-.382.993-1.044 1.776-2.03 2.359H11v-3.06l-.478-.293L3 20.04V16h2.12l.076-.917c.269-3.222 2.333-6.02 5.228-7.378l.576-.27V4h1.844c.71.432 1.114 1.157 1.268 2.152z"
        strokeWidth="2"
      />
    </g>
  </svg>
)
