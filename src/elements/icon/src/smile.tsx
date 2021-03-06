/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Smile: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 32 32"
  >
    <path d="M28.5 16C28.5 9.12386 22.8761 3.5 16 3.5C9.12386 3.5 3.5 9.12386 3.5 16C3.5 22.8761 9.12386 28.5 16 28.5C22.8761 28.5 28.5 22.8761 28.5 16ZM2.5 16C2.5 8.57614 8.57614 2.5 16 2.5C23.4239 2.5 29.5 8.57614 29.5 16C29.5 23.4239 23.4239 29.5 16 29.5C8.57614 29.5 2.5 23.4239 2.5 16Z" />
    <path d="M23.5 13.5C23.5 14.6046 22.6046 15.5 21.5 15.5C20.3954 15.5 19.5 14.6046 19.5 13.5C19.5 12.3954 20.3954 11.5 21.5 11.5C22.6046 11.5 23.5 12.3954 23.5 13.5Z" />
    <path d="M15.9996 23.4999C12.6969 23.4999 9.89786 21.4645 8.74033 18.4219L9.68301 18.1242C10.6879 20.7694 13.2452 22.4999 15.9996 22.4999C18.8683 22.4999 21.337 20.7496 22.4084 18.0218L23.3629 18.3232C22.2012 21.4546 19.3118 23.4999 15.9996 23.4999Z" />
    <path d="M12.5 13.5C12.5 14.6046 11.6046 15.5 10.5 15.5C9.39543 15.5 8.5 14.6046 8.5 13.5C8.5 12.3954 9.39543 11.5 10.5 11.5C11.6046 11.5 12.5 12.3954 12.5 13.5Z" />
  </svg>
)
