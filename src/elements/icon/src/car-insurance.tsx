/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const CarInsurance: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none'
    }}
    viewBox="0 0 65 56"
  >
    <path
      d="M16.206 30.8h7.38a1.5 1.5 0 0 1 1.5 1.5v.551a1.5 1.5 0 0 1-1.5 1.5h-7.38a1.5 1.5 0 0 1-1.5-1.5V32.3a1.5 1.5 0 0 1 1.5-1.5ZM41.24 30.8h7.379a1.5 1.5 0 0 1 1.5 1.5v.551a1.5 1.5 0 0 1-1.5 1.5H41.24a1.5 1.5 0 0 1-1.5-1.5V32.3a1.5 1.5 0 0 1 1.5-1.5Z"
      fill="#924A8B"
      stroke="#fff"
    />
    <path
      d="M60.664 21.697h1.61a1.5 1.5 0 0 1 1.5 1.5v.551a1.5 1.5 0 0 1-1.5 1.5h-.552a2.5 2.5 0 0 0-2.5 2.5v25.586a1.5 1.5 0 0 1-1.5 1.5H52.62a1.5 1.5 0 0 1-1.5-1.5V48.23a2.5 2.5 0 0 0-2.5-2.5H16.206a2.5 2.5 0 0 0-2.5 2.5v5.104a1.5 1.5 0 0 1-1.5 1.5H7.103a1.5 1.5 0 0 1-1.5-1.5V27.748a2.5 2.5 0 0 0-2.5-2.5h-.551a1.5 1.5 0 0 1-1.5-1.5v-.551a1.5 1.5 0 0 1 1.5-1.5h1.837a2.5 2.5 0 0 0 2.347-1.64l6.548-17.859a1.5 1.5 0 0 1 1.409-.983H50.36a1.5 1.5 0 0 1 1.408.983l6.549 17.86a2.5 2.5 0 0 0 2.347 1.639ZM46.957 4.767h-29.3a2.5 2.5 0 0 0-2.35 1.647L9.304 22.972a2.5 2.5 0 0 0-.15.852v15.855a2.5 2.5 0 0 0 2.5 2.5h41.517a2.5 2.5 0 0 0 2.5-2.5V23.835c0-.3-.054-.597-.16-.878L49.298 6.388a2.5 2.5 0 0 0-2.34-1.622Z"
      fill="#924A8B"
      stroke="#924A8B"
    />
  </svg>
)