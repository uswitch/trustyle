/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Magnifier: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M21.0176 19.7779L20.7219 20.129L21.0465 20.4536L29.1929 28.6L28.5 29.2929L20.3536 21.1464L20.0392 20.8321L19.6902 21.1076C17.8657 22.548 15.5723 23.5 13 23.5C7.17614 23.5 2.5 18.8239 2.5 13C2.5 7.17614 7.17614 2.5 13 2.5C18.8239 2.5 23.5 7.17614 23.5 13C23.5 15.576 22.5457 17.9632 21.0176 19.7779ZM13 3.5C7.72386 3.5 3.5 7.72386 3.5 13C3.5 18.2761 7.72386 22.5 13 22.5C18.2761 22.5 22.5 18.2761 22.5 13C22.5 7.72386 18.2761 3.5 13 3.5Z" />
  </svg>
)
